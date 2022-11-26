from Repositorios.InterfazRepositorio import InterfazRepositorio
from Modelos.Mesa import Mesa

class MesaRepositorio(InterfazRepositorio[Mesa]):
    
    def getMayorInscritosEnMesa(self):
        # query1 = {
        #     "$group": {
        #         "_id": "",
        #         "max": {
        #             "$max": "$cantidad_inscritos"
        #         }
        #     }
        # }
        # query2 = {
        #     "$lookup": {
        #         "from": "mesa",
        #         "localField": "max",
        #         "foreignField": "cantidad_inscritos",
        #         "as": "dato"
        #         }
        # }
        query1 = {
            "$sort": {
                "cantidad_inscritos": -1
                }
        }
        query2 = {
            "$limit": 1
        }
        pipeline = [query1, query2]
        return self.queryAggregation(pipeline)