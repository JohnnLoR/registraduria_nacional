from Repositorios.InterfazRepositorio import InterfazRepositorio
from Modelos.Mesa import Mesa

class MesaRepositorio(InterfazRepositorio[Mesa]):
    
    def getMayorInscritosEnMesa(self):
        query1 = {
            "$group": {
                "_id": "",
                "max": {
                    "$max": "$cantidad_inscritos"
                },
                "Mesa": {
                    "$max": "$$ROOT"
                }
            }
        }
        pipeline = [query1]
        return self.queryAggregation(pipeline)