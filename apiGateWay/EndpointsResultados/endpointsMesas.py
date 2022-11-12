from flask import jsonify, request, Blueprint
import requests
import json

endpointsMesas = Blueprint('endpointsMesas',__name__)

###########################################
#####         endPoints Mesas         #####
###########################################
@endpointsMesas.route("/mesas", methods = ['GET'])
def getMesas():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsMesas.route("/mesas", methods = ['POST'])
def postMesas():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsMesas.route("/mesas/<string:id>", methods = ['GET'])
def getMesa(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsMesas.route("/mesas/<string:id>", methods = ['PUT'])
def putMesas(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsMesas.route("/mesas/<string:id>", methods = ['DELETE'])
def deleteMesa(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/' + id
    response = requests.delete(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsMesas.route("/mesas/mayor-inscritos", methods = ['GET'])
def getMesaMayorInscritos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/mayor-inscritos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsMesas.route("/mesas/mayor-inscritos", methods = ['GET'])
def getMayorInscritos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/mesas/mayor-inscritos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)


def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

dataConfig = loadFileConfig()