from flask_restful import Resource
from schemas.cook import CookSchema
from models.cook import CookModel


cook_schema = CookSchema()
cook_list_schema = CookSchema(many=True)

class Cook(Resource):
    def get(self):
        return {
            "message":"AAAA"
        }
    


class CookList(Resource):
    def get(self):
        return{
            "message":"List of all Cooks",
            "success": True,
            "code": 200
        }