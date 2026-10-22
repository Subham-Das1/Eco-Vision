from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from PIL import Image
import os

try:
    import tflite_runtime.interpreter as tflite
    print("Using lightweight TFLite Runtime")
except ImportError:
    import tensorflow as tf
    tflite = tf.lite
    print("Using TensorFlow Lite fallback for local testing")

# Limit interpreter threads
print("===================================")
print("ECO VISION TFLITE API STARTED")
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

MODEL_PATH = "waste_classifier.tflite"

print("TFLite model exists:", os.path.exists(MODEL_PATH))
print("Loading TFLite model...")

interpreter = tflite.Interpreter(
    model_path=MODEL_PATH,
    num_threads=1
)

interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

print("TFLite model loaded successfully!")

CLASS_NAMES = ["Organic", "Recyclable"]


@app.route("/")
def home():
    return jsonify({
        "message": "Eco Vision API is running"
    })


@app.route("/predict", methods=["POST"])
def predict():

    print("\nNEW PREDICTION REQUEST")

    try:
        if "image" not in request.files:
            return jsonify({
                "success": False,
                "message": "No image uploaded"
            }), 400

        file = request.files["image"]

        image = Image.open(file).convert("RGB")
        image = image.resize((224, 224))

        image_array = np.array(
            image,
            dtype=np.float32
        ) / 255.0

        image_array = np.expand_dims(
            image_array,
            axis=0
        )

        interpreter.set_tensor(
            input_details[0]["index"],
            image_array
        )

        interpreter.invoke()

        prediction = interpreter.get_tensor(
            output_details[0]["index"]
        )

        score = float(prediction[0][0])

        if score > 0.5:
            label = "Recyclable"
            confidence = score * 100
        else:
            label = "Organic"
            confidence = (1 - score) * 100

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
        print("PREDICTION ERROR:", str(e))

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )
