from Repositorios.PartidoRepositorio import PartidoRepositorio
from Modelos.Partido import Partido

class PartidoControlador():
    #Constructor
    def __init__(self):
        self.repositorioPartido = PartidoRepositorio()

    #Listar Partidos
    def index(self):
        return self.repositorioPartido.findAll()
        
    #Crear Partido
    def create(self, infoPartido):
        nuevoPartido = Partido(infoPartido)
        return self.repositorioPartido.save(nuevoPartido)

    #Información Partido Específico
    def show(self, id):
        elPartido = Partido(self.repositorioPartido.findById(id))
        return elPartido.__dict__

    #Actualizar Información de Partido
    def update(self, id, infoPartido):
        partidoActual = Partido(self.repositorioPartido.findById(id))
        partidoActual.id = infoPartido["id"]
        partidoActual.nombre = infoPartido["nombre"]
        partidoActual.lema = infoPartido["lema"]
        return self.repositorioPartido.save(partidoActual)

    #Eliminar Partido
    def delete(self, id):
        return self.repositorioPartido.delete(id)