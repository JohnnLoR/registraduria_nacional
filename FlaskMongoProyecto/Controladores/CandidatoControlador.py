from Repositorios.CandidatoRepositorio import CandidatoRepositorio
from Repositorios.PartidoRepositorio import  PartidoRepositorio
from Modelos.Candidato import Candidato
from Modelos.Partido import Partido

class CandidatoControlador():
    def __init__(self):
        self.repositorioCandidato = CandidatoRepositorio()
        self.repositorioPartido = PartidoRepositorio

    def index(self):
        return self.repositorioCandidato.findAll()

    def create(self, infoCandidato):
        nuevoCandidato = Candidato(infoCandidato)
        return {"El Candidato ha sido Registrado con Éxito": self.repositorioCandidato.save(nuevoCandidato)}

    def show(self, id):
        elCandidato = Candidato(self.repositorioCandidato.findById(id))
        return elCandidato.__dict__

    def update(self, id, infoCandidato):
        candidatoActual = Candidato(self.repositorioCandidato.findById(id))
        candidatoActual.cedula = infoCandidato["cedula"]
        candidatoActual.numero_resolucion = infoCandidato["numero_resolucion"]
        candidatoActual.nombre = infoCandidato["nombre"]
        candidatoActual.apellido = infoCandidato["apellido"]
        return {"Los datos del Candidato han sido Actualizados": self.repositorioCandidato.save(candidatoActual)}

    def delete(self, id):
        return {"Los datos del Candidato han sido Eliminados": self.repositorioCandidato.delete(id)}

    def asignarCandidato(self, id, id_partido):
        candidatoActual = Candidato(self.repositorioCandidato.findById(id))
        partidoActual = Partido(self.repositorioPartido.findById(id_partido))
        candidatoActual.partido = partidoActual
        return {"El candidato ha sido Asignado a un Partido de Manera Exitosa": self.repositorioCandidato.save(candidatoActual)}