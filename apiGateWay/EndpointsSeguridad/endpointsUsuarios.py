from flask import jsonify, request, Blueprint
import requests
import json

endpointsUsuarios = Blueprint('endpointsUsuarios',__name__)

###########################################
#####         endPoints Mesas         #####
###########################################
@endpointsUsuarios.route("/usuarios", methods = ['GET'])
def getUsuarios():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/usuarios'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsUsuarios.route("/usuarios", methods = ['POST'])
def postUsuario():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/usuarios'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsUsuarios.route("/usuarios/<string:id>", methods = ['GET'])
def getUsuario(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/usuarios/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsUsuarios.route("/usuarios/<string:id>", methods = ['PUT'])
def putUsuario(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/usuarios/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsUsuarios.route("/usuarios/<string:id>", methods = ['DELETE'])
def deleteUsuario(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/usuarios/' + id
    response = requests.delete(url, headers=headers)
    #json = response.json()
    #return jsonify(json)
    return {"Messaje": "Los datos de Usuario han sido Eliminados"}

@endpointsUsuarios.route("/usuarios/<string:id_usuario>/rol/<string:id_rol>", methods = ['PUT'])
def asignarRolUsuario(id_usuario, id_rol):
    #data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/usuarios/' + id_usuario + '/rol/' + id_rol
    response = requests.put(url, headers=headers)
    json = response.json()
    return jsonify(json)


def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

dataConfig = loadFileConfig()