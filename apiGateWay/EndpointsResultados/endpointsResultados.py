from flask import jsonify, request, Blueprint
import requests
import json

endpointsResultados = Blueprint('endpointsResultados',__name__)

###########################################
#####       endPoints Resultados      #####
###########################################
@endpointsResultados.route("/resultados", methods = ['GET'])
def getResuldatos():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsResultados.route("/resultados/mesa/<string:id_mesa>/candidato/<string:id_candidato>", methods = ['POST'])
def postResuldato(id_mesa, id_candidato):
    data = {}   
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/mesa/' + id_mesa + "/candidato/" + id_candidato
    response = requests.post(url, headers=headers, json=data)
    json = response.json()
    return jsonify(json)

@endpointsResultados.route("/resultados/<string:id>", methods = ['GET'])
def getResuldato(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsResultados.route("/resultados/<string:id_resultado>/mesa/<string:id_mesa>/candidato/<string:id_candidato>", methods = ['PUT'])
def putResuldato(id_resultado, id_mesa, id_candidato):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/' + id_resultado + "/mesa/" + id_mesa + "/candidato/" + id_candidato
    response = requests.put(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsResultados.route("/resultados/<string:id>", methods = ['DELETE'])
def deleteResuldato(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/' + id
    response = requests.delete(url, headers=headers)
    json = response.json()
    return jsonify(json)

# Obtener los Resultados de una Mesa Específica
@endpointsResultados.route("/resultados/mesa/<string:id_mesa>", methods = ['GET'])
def canditaosInscritosEnMesa(id_mesa):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/mesa/' + id_mesa
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

# Obtener los Candiatos Inscritos en Mesas
@endpointsResultados.route("/resultados/mesas/<string:id_candidato>", methods = ['GET'])
def candidatoinscritoEnMesas(id_candidato):    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/mesas/' + id_candidato
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

# Contar votos Candidato
@endpointsResultados.route("/resultados/votos", methods = ['GET'])
def contarVotos():    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/votos'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

# Candidato más votado
@endpointsResultados.route("/resultados/ganador", methods = ['GET'])
def candidatoMasVotado():    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-results-backend"] + '/resultados/ganador'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

dataConfig = loadFileConfig()