from flask import jsonify, request, Blueprint
import requests
import json

endpointsCandidatos = Blueprint('endpointsCandidatos',__name__)

###########################################
#####       endPoints Candidatos      #####
###########################################
@endpointsCandidatos.route("/candidatos", methods = ['GET'])
def getCandidatos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsCandidatos.route("/candidatos", methods = ['POST'])
def postCandidato():
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos'
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsCandidatos.route("/candidatos/<string:id>", methods = ['GET'])
def getCandidato(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsCandidatos.route("/candidatos/<string:id>", methods = ['PUT'])
def putCandidato(id):
    data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos/' + id
    response = requests.put(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsCandidatos.route("/candidatos/<string:id>", methods = ['DELETE'])
def deleteCandidato(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos/' + id
    response = requests.delete(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsCandidatos.route("/candidatos/<string:id_candidato>/partido/<string:id_partido>", methods = ['PUT'])
def asignarPartidoCandidato(id_candidato, id_partido):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/candidatos/' + id_candidato + '/partido/' + id_partido
    response = requests.put(url, headers=headers)
    json = response.json()
    return jsonify(json)


def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

dataConfig = loadFileConfig()