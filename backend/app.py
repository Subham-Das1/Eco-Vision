from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import os

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

# Load trained model
model = tf.keras.models.load_model(
    "waste_classifier.keras",
    compile=False
)

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

    if "image" not in request.files:
        return jsonify({
            "success": False,
            "message": "No image uploaded"
        }), 400

    file = request.files["image"]

    try:
        # Preprocess image
        image = Image.open(file).convert("RGB")
        image = image.resize((224, 224))

        image_array = np.array(image) / 255.0
        image_array = np.expand_dims(image_array, axis=0)

        # Predict
        prediction = model.predict(image_array, verbose=0)

        score = float(prediction[0][0])

        if score > 0.5:
            label = CLASS_NAMES[1]
            confidence = score * 100
        else:
            label = CLASS_NAMES[0]
            confidence = (1 - score) * 100

        # Disposal instructions
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

        return jsonify({
            "success": True,
            "prediction": label,
            "confidence": round(confidence, 2),
            "instructions": instructions
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )