from Repositorios.MesaRepositorio import MesaRepositorio
from Modelos.Mesa import Mesa

class MesaControlador():
    def __init__(self):
        self.repositorioMesa = MesaRepositorio()

    def index(self):
        return self.repositorioMesa.findAll()

    def create(self, infoMesa):
        nuevaMesa = Mesa(infoMesa)
        return {"La Mesa se ha Registrado con Éxito": self.repositorioMesa.save(nuevaMesa)}

    def show(self, id):
        laMesa = Mesa(self.repositorioMesa.findById(id))
        return laMesa.__dict__

    def update(self, id, infoMesa):
        mesaActual = Mesa(self.repositorioMesa.findById(id))
        mesaActual.numero = infoMesa["numero"]
        mesaActual.cantidad_inscritos = infoMesa["cantidad_inscritos"]
        return {"Los datos de la Mesa han sido Actualizados": self.repositorioMesa.save(mesaActual)}

    def delete(self, id):
        return {"Los datos de la Mesa han sido Eliminados": self.repositorioMesa.delete(id)}

    def mayorCantidadInscritosEnMesas(self):
        return self.repositorioMesa.getMayorInscritosEnMesa()