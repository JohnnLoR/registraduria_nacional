import json
from flask import Flask, request, Response
from flask import jsonify
from flask_cors import CORS

from Controladores.CandidatoControlador import CandidatoControlador
from Controladores.PartidoControlador import PartidoControlador
from Controladores.MesaControlador import MesaControlador
from Controladores.ResultadoControlador import ResultadoControlador

app = Flask(__name__)
cors = CORS(app)

miControladorPartido = PartidoControlador()
miControladorCandidato = CandidatoControlador()
miControladorMesa = MesaControlador()
miControladorResultado = ResultadoControlador()

######################################
#### PROCEDEMOS A CREAR LAS RUTAS ####
######################################
####     Ruta de Running Server   ####
######################################

@app.route("/", methods=["GET"])
def test():
    json = {}
    json["message"] = "Server is Running. We are Online!!!"
    return jsonify(json)

#####################################
####     EndPoints Partidos      ####
#####################################

@app.route("/partidos", methods=["GET"])
def getPartidos():
    json = miControladorPartido.index()
    return jsonify(json)

@app.route("/partidos", methods=["POST"])
def createPartido():
    data = request.get_json()
    json = miControladorPartido.create(data)
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=["GET"])
def getPartido(id):
    json = miControladorPartido.show(id)
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=["PUT"])
def modificarPartido(id):
    data = request.get_json()
    json = miControladorPartido.update(id, data)
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=["DELETE"])
def eliminarPartido(id):
    json = miControladorPartido.delete(id)
    return jsonify(json)

#####################################
####     EndPoints Candidatos    ####
#####################################

@app.route("/candidatos", methods=["GET"])
def getCandidatos():
    json = miControladorCandidato.index()
    return jsonify(json)

@app.route("/candidatos", methods=["POST"])
def crearCandidato():
    data = request.get_json()
    json = miControladorCandidato.create(data)
    return jsonify(json)

@app.route("/candidatos/<string:id_candidato>", methods=["GET"])
def getCandidato(id_candidato):
    json = miControladorCandidato.show(id_candidato)
    return jsonify(json)

@app.route("/candidatos/<string:id_candidato>", methods=["PUT"])
def modificarCandidato(id_candidato):
    data = request.get_json()
    json = miControladorCandidato.update(id_candidato, data)
    return jsonify(json)

@app.route("/candidatos/<string:id_candidato>", methods=["DELETE"])
def eliminarCandidato(id_candidato):
    json = miControladorCandidato.delete(id_candidato)
    return jsonify(json)

@app.route("/candidatos/<string:id>/partido/<string:id_partido>", methods=["PUT"])
def asignarPartidoCandidato(id, id_partido):    
    json = miControladorCandidato.asignarCandidato(id, id_partido)
    return jsonify(json)





if __name__ == "__main__":
    app.run(debug=False, port=9000)

