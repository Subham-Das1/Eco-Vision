from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import os

print("===================================")
print("APP STARTED")
print("===================================")

app = Flask(__name__)

CORS(
    app,
    resources={
        r"/*": {
            "origins": [
                "https://eco-vision-hyln.vercel.app"
            ]
        }
    }
)

print("Model exists:", os.path.exists("waste_classifier.keras"))
print("BEFORE MODEL LOAD")

model = tf.keras.models.load_model(
    "waste_classifier.keras",
    compile=False
)

print("AFTER MODEL LOAD")
print("MODEL LOADED SUCCESSFULLY")

CLASS_NAMES = [
    "Organic",
    "Recyclable"
]


@app.route("/")
def home():
    return jsonify({
        "message": "Eco Vision API is running"
    })


@app.route("/predict", methods=["POST"])
def predict():

    print("\n===================================")
    print("NEW REQUEST RECEIVED")
    print("===================================")

    try:

        print("HEADERS:", request.headers)
        print("CONTENT TYPE:", request.content_type)
        print("FILES:", request.files)
        print("FORM:", request.form)

        if "image" not in request.files:
            return jsonify({
                "success": False,
                "message": "No image uploaded",
                "files_received": list(request.files.keys()),
                "content_type": request.content_type
            }), 400

        print("STEP 1: IMAGE FOUND")

        file = request.files["image"]

        print("STEP 2: FILE RECEIVED")
        print("FILENAME:", file.filename)

        image = Image.open(file).convert("RGB")

        print("STEP 3: IMAGE OPENED")
        print("ORIGINAL SIZE:", image.size)

        image = image.resize((224, 224))

        print("STEP 4: IMAGE RESIZED")

        image_array = np.array(image, dtype=np.float32) / 255.0

        print("STEP 5: NUMPY ARRAY CREATED")
        print("SHAPE:", image_array.shape)

        image_array = np.expand_dims(image_array, axis=0)

        print("STEP 6: BATCH DIMENSION ADDED")
        print("NEW SHAPE:", image_array.shape)

        print("STEP 7: STARTING PREDICTION")

        prediction = model.predict(image_array, verbose=0)

        print("STEP 8: PREDICTION COMPLETE")
        print("RAW OUTPUT:", prediction)

        score = float(prediction[0][0])

        print("STEP 9: SCORE =", score)

        if score > 0.5:
            label = "Recyclable"
            confidence = score * 100
        else:
            label = "Organic"
            confidence = (1 - score) * 100

        print("STEP 10: LABEL =", label)
        print("STEP 11: CONFIDENCE =", confidence)

        if label == "Organic":
            instructions = [
                "Compost if possible",
                "Dispose in green waste bin",
                "Avoid mixing with recyclables"
            ]
        else:
            instructions = [
                "Clean before recycling",
                "Place in recycling bin",
                "Separate from organic waste"
            ]

        print("STEP 12: RETURNING RESPONSE")

        return jsonify({
            "success": True,
            "prediction": label,
            "confidence": round(confidence, 2),
            "instructions": instructions
        })

    except Exception as e:

        print("===================================")
        print("ERROR OCCURRED")
        print(str(e))
        print("===================================")

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )