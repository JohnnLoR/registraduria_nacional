from flask import Flask, jsonify, request
from flask_cors import CORS
from waitress import serve
import datetime
import requests
import re
import json

app = Flask(__name__)
cors = CORS(app)

###########################################
##### Implementación del Método Login #####
###########################################
from flask_jwt_extended import create_access_token, verify_jwt_in_request
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app.config["JWT_SECRET_KEY"]='super-secret' #Se puede configurar cualquier clave
jwt = JWTManager(app)

@app.route("/login", methods = ['POST'])
def create_token():
    data = request.get_json()
    headers = {"Content-Type": "application/json; charset = utf-8"}
    url = dataConfig["url-security-backend"] + "/usuarios/validar" #En la guía aparece como login; pero la creamos como validar (securityBackend usuarios)
    response = requests.post(url, json = data, headers = headers)
    if response.status_code == 200:
        user = response.json()
        expires = datetime.timedelta(seconds=60 * 60*24) #Un día en segundos sec*min*dia
        access_token = create_access_token(identity = user, expires_delta = expires)
        return jsonify({"token": access_token, "user_id": user["_id"]})
    else:
        return jsonify({"Message": "Correo, Seudónimo o Contraseña Incorrecto. ¡Intenta de Nuevo!!!"}), 401

###########################################
#####  Implementación del Middleware  #####
###########################################
def limpiarURL(url):
    partes = url.split("/")
    for laParte in partes:
        if re.search('\\d', laParte):
            url = url.replace(laParte, "?")
    return url

def validarPermiso(endPoint, metodo, idRol):
    url = dataConfig["url-security-backend"]+"/permisos-roles/validar-permiso/rol/"+str(idRol)
    tienePermiso = False
    headers = {"Content-Type": "application/json; charset=utf-8"}
    body = { "url": endPoint, "metodo": metodo}
    response = requests.get(url, json=body, headers=headers)
    try:
        data = response.json()
        if("_id" in data):
            tienePermiso = True
    except:
        pass
    return tienePermiso

@app.before_request
def before_request_callback():
    endPoint = limpiarURL(request.path)
    excludeRoutes = ["/login", "/signIn"]
    if excludeRoutes.__contains__(request.path):
        print("Ruta excluída: ", request.path)
        pass
    elif verify_jwt_in_request():
        usuario = get_jwt_identity()
        if usuario["rol"] is not None:
            tienePermiso = validarPermiso(endPoint, request.method, usuario["rol"]["_id"])
            if not tienePermiso:
                return jsonify({"Message": "Usuario, Rol o Método no Autorizado", "Message": "1Permiso Denegado" }), 401
        else:
            return jsonify({"Message": "Rol o Método no Autorizado", "Message": "2Permiso Denegado" }), 401

###########################################
#####         endPoints Mesas         #####
###########################################
@app.route("/mesas", methods = ['GET'])
def getMesas():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/mesas", methods = ['POST'])
def postMesas():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@app.route("/mesas/<string:id>", methods = ['GET'])
def getMesa(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/mesas/<string:id>", methods = ['PUT'])
def putMesas(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@app.route("/mesas/<string:id>", methods = ['DELETE'])
def deleteMesa(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/' + id
    response = requests.delete(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/mesas/mayor-inscritos", methods = ['GET'])
def getMesas():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/mayor-inscritos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)


###########################################
#####       endPoints Candidatos      #####
###########################################
@app.route("/candidatos", methods = ['GET'])
def getCandidatos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/candidatos", methods = ['POST'])
def postCandidato():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@app.route("/candidatos/<string:id>", methods = ['GET'])
def getCandidato(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/candidatos/<string:id>", methods = ['PUT'])
def putCandidato(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@app.route("/candidatos/<string:id>", methods = ['DELETE'])
def deleteCandidato(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos/' + id
    response = requests.delete(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/candidatos/<string:id_candidato>/partido/<string:id_partido>", methods = ['PUT'])
def asignarPartidoCandidato(id_candidato, id_partido):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos/' + id_candidato + '/partido/' + id_partido
    response = requests.put(url, headers=headers)
    json = response.json()
    return jsonify(json)


###########################################
#####       endPoints Partidos        #####
###########################################
@app.route("/partidos", methods = ['GET'])
def getPartidos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/partidos", methods = ['POST'])
def postPartidos():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@app.route("/partidos/<string:id>", methods = ['GET'])
def getPartido(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/partidos/<string:id>", methods = ['PUT'])
def putPartidos(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@app.route("/partidos/<string:id>", methods = ['DELETE'])
def deletePartidos(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos/' + id
    response = requests.delete(url, headers=headers)
    json = response.json()
    return jsonify(json)


###########################################
#####       endPoints Resultados      #####
###########################################
@app.route("/resultados", methods = ['GET'])
def getResuldatos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/resultados/mesa/<string:id_mesa>/candidato/<string:id_candidato", methods = ['POST'])
def postResuldato(id_mesa, id_candidato):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/mesa/' + id_mesa + "/candidato/" + id_candidato
    response = requests.post(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/resultados/<string:id>", methods = ['GET'])
def getResuldato(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/resultados/<string:id_resultado/mesa/<string:id_mesa/candidato/<string:id_candidato>", methods = ['PUT'])
def putResuldato(id_resultado, id_mesa, id_candidato):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/' + id_resultado + "/mesa/" + id_mesa + "/candidato/" + id_candidato
    response = requests.put(url, headers=headers)
    json = response.json()
    return jsonify(json)

@app.route("/resultados/<string:id>", methods = ['DELETE'])
def deleteResuldato(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/' + id
    response = requests.delete(url, headers=headers)
    json = response.json()
    return jsonify(json)

# Obtener los Resultados de una Mesa Específica
@app.route("/resultados/mesa/<string:id_mesa>", methods = ['GET'])
def canditaosInscritosEnMesa(id_mesa):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/mesa/' + id_mesa
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

# Obtener los Candiatos Inscritos en Mesas
@app.route("/resultados/mesas/<string:id_candidato>", methods = ['GET'])
def candidatoinscritoEnMesas(id_candidato):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/mesas/' + id_candidato
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

# Contar votos Candidato
@app.route("/resultados/votos", methods = ['GET'])
def contarVotos():    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/votos/'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

# Candidato más votado
@app.route("/resultados/ganador", methods = ['GET'])
def candidatoMasVotado():    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/ganador/'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)


###########################################
#####   TEST O PRUEBA DEL SERVICIO    #####
###########################################
@app.route("/", methods = ['GET'])
def test():
    json = {}
    json["Message"] = "Server is Running... We are Online!!!"
    return jsonify(json)

def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

if __name__ == "__main__":
    dataConfig = loadFileConfig()
    print("Server is Running : http://" + dataConfig["url-backend"] + ":" + dataConfig["port"])
    serve(app, host = dataConfig["url-backend"], port = dataConfig["port"])