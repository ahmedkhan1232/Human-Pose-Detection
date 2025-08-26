from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb+srv://rizwansajid2919:qDPMIDcRNuo2SP3m@cluster0.jgjdy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

# Select the database and collection
db = client["pose_detection"]
users_collection = db["users_progress"]
