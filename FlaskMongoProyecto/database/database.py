from pymongo import MongoClient
import json
import certifi

ca = certifi.where()

# Cargar configuración (config.json)
def loadConfigFile():
    with open('database/config.json') as f:
        data = json.load(f)
    return data

def dbConnection():
    dataConfig = loadConfigFile()
    try:
        #Conectamos con MongoDB Atlas
        client = MongoClient(dataConfig['MONGO_URI_SERVER'], tlsCAFile = ca)
        #Conexión MongoDB Local
        #client = MongoClient(dataConfig['MONGO_URI_LOCAL'], dataConfig['LOCAL_PORT'])
        db = client["Proyecto_Final_Ciclo4a_G37"]
    except:
        print("Error de Conexión en la DB")
    return db