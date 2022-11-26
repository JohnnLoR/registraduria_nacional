from pymongo import MongoClient
import certifi

#  Conexión a Mongo Local
#MONGO_URI = "mongodb://localhost"
#PORT = 27017

# Conexión a Mongo Atlas (Remoto)
MONGO_URI = "mongodb+srv://johnnlor:mperic82@cluster0.vamcmwn.mongodb.net/?retryWrites=true&w=majority"
ca = certifi.where()

def dbConection():
    try:
        #Conexión Local
        #client = MongoClient(MONGO_URI, port=PORT) #Local
        #Conexión Remota
        client = MongoClient(MONGO_URI, tlsCAFile=ca)
        db = client["ciclo4_grupo37_db"]
    except:
        print("Error en la conexión a la DB")
    return db