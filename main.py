from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/pose_detection"
mongo = PyMongo(app)

UPLOAD_FOLDER = "received"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "mp4", "mov", "avi"}

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No file selected for uploading"}), 400

    if file and allowed_file(file.filename):
        filepath = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(filepath)

        # Placeholder for ML model
        pose_result = {"percentage": 85, "guidance": "Good posture!"}

        # Get the logged-in user's info (you can implement JWT or session-based auth)
        user_id = request.headers.get("User-ID")  # assuming you're sending the user ID in the header

        if user_id:
            # Save the result to the user's collection in MongoDB
            progress_data = {
                "user_id": user_id,
                "file_name": file.filename,
                "pose_result": pose_result,
                "timestamp": datetime.datetime.now()
            }
            mongo.db.progress.insert_one(progress_data)

        return jsonify({"message": "File received successfully", "pose_result": pose_result}), 200
    else:
        return jsonify({"error": "File type not allowed"}), 400

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the Pose Detection Backend!"}), 200

if __name__ == "__main__":
    app.run(debug=True)
