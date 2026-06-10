# 🌱 Eco Vision

Eco Vision is an AI-powered waste classification platform that helps users identify whether waste is **Organic** or **Recyclable** using Deep Learning.

Users can upload an image of waste material, and the system classifies it instantly while providing disposal recommendations to encourage responsible waste management.

---

## 🚀 Features

- AI-powered waste classification
- Image upload and prediction
- Organic vs Recyclable detection
- Confidence score display
- Disposal recommendations
- Modern responsive UI
- React frontend
- Flask backend
- TensorFlow / Keras model integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Lucide React Icons

### Backend
- Flask
- Flask-CORS

### AI / Machine Learning
- TensorFlow
- Keras
- MobileNetV2 Transfer Learning
- NumPy
- Pillow

---

## 🧠 Model Details

The waste classification model was built using **MobileNetV2** with Transfer Learning.

### Training Configuration

| Parameter | Value |
|------------|--------|
| Architecture | MobileNetV2 |
| Input Size | 224 x 224 |
| Batch Size | 32 |
| Epochs | 10 |
| Optimizer | Adam |
| Loss Function | Binary Crossentropy |
| Output Classes | Organic, Recyclable |

### Performance

- Test Accuracy: **88.26%**
- Validation Accuracy: **~88%**

---

## 📂 Project Structure

```text
eco-vision/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── waste_classifier.keras
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/eco-vision.git
cd eco-vision
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python app.py
```

Backend runs at:

```text
http://localhost:5000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🖼️ How It Works

1. Upload an image of waste.
2. The image is sent to the Flask API.
3. The TensorFlow model processes the image.
4. The model predicts:
   - Organic
   - Recyclable
5. Confidence score is returned.
6. Results and disposal recommendations are displayed.

---

## 🌍 Environmental Impact

Eco Vision aims to promote sustainable waste management by helping users:

- Improve waste segregation
- Reduce landfill waste
- Increase recycling awareness
- Encourage environmentally responsible disposal practices

---

## 📈 Future Improvements

- Multi-class waste classification
- Plastic detection
- Glass detection
- Metal detection
- Paper detection
- Real-time camera support
- Location-based recycling guidance
- Cloud deployment
- Mobile application

---

## 👨‍💻 Author

Subham Das

B.Tech Graduate | Full Stack Developer | AI Enthusiast

GitHub:
https://github.com/Subham-Das1

---

## 📜 License

This project is developed for educational and portfolio purposes.