from flask import jsonify, request, Blueprint
import requests
import json

endpointsPartidos = Blueprint('endpointsPartidos',__name__)

###########################################
#####       endPoints Partidos        #####
###########################################
@endpointsPartidos.route("/partidos", methods = ['GET'])
def getPartidos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsPartidos.route("/partidos", methods = ['POST'])
def postPartidos():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsPartidos.route("/partidos/<string:id>", methods = ['GET'])
def getPartido(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsPartidos.route("/partidos/<string:id>", methods = ['PUT'])
def putPartidos(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsPartidos.route("/partidos/<string:id>", methods = ['DELETE'])
def deletePartidos(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/partidos/' + id
    response = requests.delete(url, headers=headers)
    json = response.json()
    return jsonify(json)

def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

dataConfig = loadFileConfig()