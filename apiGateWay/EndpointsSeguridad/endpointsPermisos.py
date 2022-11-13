from flask import jsonify, request, Blueprint
import requests
import json

endpointsPermisos = Blueprint('endpointsPermisos',__name__)

###########################################
#####         endPoints Mesas         #####
###########################################
@endpointsPermisos.route("/permisos", methods = ['GET'])
def getPermisos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsPermisos.route("/permisos", methods = ['POST'])
def postPermiso():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsPermisos.route("/permisos/<string:id>", methods = ['GET'])
def getPermiso(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsPermisos.route("/permisos/<string:id>", methods = ['PUT'])
def putPermiso(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsPermisos.route("/permisos/<string:id>", methods = ['DELETE'])
def deletePermiso(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos/' + id
    response = requests.delete(url, headers=headers)
    #json = response.json()
    #return jsonify(json)
    return {"Messaje": "El Permiso ha sido Eliminado"}


def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

dataConfig = loadFileConfig()