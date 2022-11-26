"""
Modelo para la colección productos del webstore
@MisiónTIC2022
"""

class Products:
    #Constructor de la clase
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity =  quantity

    def toDBCollection(self):
        return {
            'name': self.name,
            'price': self.price,
            'quantity': self.quantity
        }