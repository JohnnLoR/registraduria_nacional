from flask import jsonify, request, Blueprint
import requests
import json

endpointsPermisosRoles = Blueprint('endpointsPermisosRoles',__name__)

###########################################
#####         endPoints Mesas         #####
###########################################
@endpointsPermisosRoles.route("/permisos-roles", methods = ['GET'])
def getPermisosRoles():
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos-roles'
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsPermisosRoles.route("/permisos-roles/rol/<string:id_rol>/permiso/<string:id_permiso>", methods = ['POST'])
def postPermisoRol(id_rol, id_permiso):
    #data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos-roles/rol/' + id_rol + '/permiso/' + id_permiso
    response = requests.post(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsPermisosRoles.route("/permisos-roles/<string:id>", methods = ['GET'])
def getPermisoRol(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos-roles/' + id
    response = requests.get(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsPermisosRoles.route("/permisos-roles/<string:id_permisoRol>/rol/<string:id_rol>/permiso/<string:id_permiso>", methods = ['PUT'])
def putPermisoRol(id_permisoRol, id_rol, id_permiso):
    #data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos-roles/' + id_permisoRol + '/rol/' + id_rol + '/permiso/' + id_permiso
    response = requests.put(url, headers=headers)
    json = response.json()
    return jsonify(json)

@endpointsPermisosRoles.route("/permisos-roles/<string:id>", methods = ['DELETE'])
def deletePermisoRol(id):
    headers = {"Content-Type": "application/json; charset=utf-8"}
    url = dataConfig["url-security-backend"] + '/permisos-roles/' + id
    response = requests.delete(url, headers=headers)
    #json = response.json()
    #return jsonify(json)
    return {"Messaje": "El PermisoRol ha sido Eliminado"}

# @endpointsPermisosRoles.route("/permisos-roles/validar-permiso/rol/<string:id_rol>", methods = ['GET'])
# def validarPermisoRol(id_rol):
#     data = request.get_json() # Permite tomar y utilizar los datos que llegan en el body
#     headers = {"Content-Type": "application/json; charset=utf-8"}
#     url = dataConfig["url-security-backend"] + '/permisos-roles/validar-permiso/rol/' + id_rol
#     response = requests.get(url, json=data, headers=headers)    
#     if response.status_code == 200:
#         json = response.json()
#         return jsonify(json)
#     else:
#         return jsonify({"Message": "El Rol Especificado No Cuenta con Permisos para esta operación"}), 401



def loadFileConfig():
    with open('config.json') as f:
        data = json.load(f)
    return data

dataConfig = loadFileConfig()