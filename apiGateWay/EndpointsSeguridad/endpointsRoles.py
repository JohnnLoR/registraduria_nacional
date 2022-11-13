from flask import jsonify, request, Blueprint
import requests
import json

endpointsRoles = Blueprint('endpointsRoles',__name__)

###########################################
#####         endPoints Mesas         #####
###########################################
@endpointsRoles.route("/roles", methods = ['GET'])
def getRoles():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/roles'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsRoles.route("/roles", methods = ['POST'])
def postRol():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/roles'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsRoles.route("/roles/<string:id>", methods = ['GET'])
def getRol(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/roles/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsRoles.route("/roles/<string:id>", methods = ['PUT'])
def putRol(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/roles/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsRoles.route("/roles/<string:id>", methods = ['DELETE'])
def deleteRol(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/roles/' + id
    response = requests.delete(url, headers=headers)
    #json = response.json()
    #return jsonify(json)
    return {"Messaje": "El Rol ha sido Eliminado"}


def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

dataConfig = loadFileConfig()