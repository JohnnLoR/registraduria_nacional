from Modelos.Mesa import Mesa
from Modelos.Resultado import Resultado
from Modelos.Candidato import Candidato

from Repositorios.MesaRepositorio import MesaRepositorio
from Repositorios.ResultadoRepositorio import ResultadoRepositorio
from Repositorios.CandidatoRepositorio import CandidatoRepositorio

class ResultadoControlador():
    def __init__(self):
        self.repositorioResultado = ResultadoRepositorio()
        self.repositorioCandidato = CandidatoRepositorio()
        self.repositorioMesa = MesaRepositorio()

    def index(self):
        return self.repositorioResultado.findAll()

    def create(self, infoResultado, id_mesa, id_candidato):
        nuevoResultado = Resultado(infoResultado)
        laMesa = Mesa(self.repositorioMesa.findById(id_mesa))
        elCandidato = Candidato(self.repositorioCandidato.findById(id_candidato))
        nuevoResultado.mesa = laMesa
        nuevoResultado.candidato = elCandidato
        return {"El Resultado se ha Añadido Satisfactoriamente": self.repositorioResultado.save(nuevoResultado)}

    def show(self, id):
        elResultado = Resultado(self.repositorioResultado.findById(id))
        return elResultado.__dict__

    def update(self, id, infoResultado, id_mesa, id_candidato):
        nuevoResultado = Resultado(self.repositorioResultado.findById(id)) #Agrego línea; pero sigue igual, no actualiza; sino que crea un documento nuevo
        # nuevoResultado = Resultado(infoResultado)
        laMesa = Mesa(self.repositorioMesa.findById(id_mesa))
        elCandidato = Candidato(self.repositorioCandidato.findById(id_candidato))
        nuevoResultado.mesa = laMesa
        nuevoResultado.candidato = elCandidato
        return {"Los datos del Resultando han sido Actualizados": self.repositorioResultado.save(nuevoResultado)}

    def delete(self, id):
        return {"Los datos del Resultado han sido Eliminados": self.repositorioResultado.delete(id)}

    def getListarCandidatosMesa(self, id_mesa):
        return self.repositorioResultado.getListadoCandidatosInstritosMesa(id_mesa)

    def getListarMesasDeInscripcionCandidato(self, id_candidato):
        return self.repositorioResultado.getListadoMesasCandidatoInscrito(id_candidato)        

    def getConteoVotos(self):
        return self.repositorioResultado.getConteoVotosCandidato()

    def getCandidatoMayorVotado(self):
        return self.repositorioResultado.getCandidatoMasVotado()