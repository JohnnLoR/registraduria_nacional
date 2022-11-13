from flask import Flask, jsonify, request
from flask_cors import CORS
from waitress import serve
import datetime
import requests
import re
import json

import EndpointsResultados
import EndpointsSeguridad

app = Flask(__name__)
cors = CORS(app)

###########################################
#####    Registro de los Endpoints    #####
###########################################
app.register_blueprint(EndpointsResultados.endpointsMesas)
app.register_blueprint(EndpointsResultados.endpointsCandidatos)
app.register_blueprint(EndpointsResultados.endpointsPartidos)
app.register_blueprint(EndpointsResultados.endpointsResultados)

app.register_blueprint(EndpointsSeguridad.endpointsUsuarios)
app.register_blueprint(EndpointsSeguridad.endpointsRoles)
app.register_blueprint(EndpointsSeguridad.endpointsPermisos)
app.register_blueprint(EndpointsSeguridad.endpointsPermisosRoles)

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
                return jsonify({"Message": "Usuario, Rol o Método no Autorizado", "Message": "El Usuario o Rol No cuenta con los Permisos Necesarios para Realizar esta Operación" }), 401
        else:
            return jsonify({"Message": "Rol o Método no Autorizado", "Message": "Permiso Denegado" }), 401

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