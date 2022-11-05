from Repositorios.InterfazRepositorio import InterfazRepositorio
from Modelos.Resultado import Resultado
from bson import ObjectId

class ResultadoRepositorio(InterfazRepositorio[Resultado]):
    # Devuelve los candidatos votados en la mesa
    def getListadoCandidatosInstritosMesa(self, id_mesa):
        theQuery = {"mesa.$id": ObjectId(id_mesa)}
        return self.query(theQuery)

    # Funcion que verifica el candidato votado en cada mesa
    def getListadoMesasCandidatoInscrito(self, id_candidato):
        theQuery = {"candidato.$id": ObjectId(id_candidato)}
        return self.query(theQuery)

    # Devuelve la Cédula más Reciente (Mayor)
    def getConteoVotosCandidato(self):
        query1 = {
                "$group": {
                    "_id": "$candidato",
                    "Total_votos_candidato": {
                        "$sum": 1
                    },
                    "doc": {
                        "$first": "$$ROOT"
                    }
                }
            }
        pipeline = [query1]
        return self.queryAggregation(pipeline)

    def getCandidatoMasVotado(self):
        query1 = {
                "$group": {
                    "_id": "$candidato",
                    "Total_votos_candidato": {                        
                        "$sum": 1,
                    },
                    "doc": {
                        "$first": "$$ROOT"
                    }
                }
            }
        query2 = {
                "$sort": {
                    "Total_votos_candidato": -1
                }
            }
        query3 = {
                "$limit": 1
            }
        pipeline = [query1, query2, query3]
        return self.queryAggregation(pipeline)