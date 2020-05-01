from flask_restful import Resource
from flask import request
from marshmallow import ValidationError
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
            "code": 200,
            "count": CookModel.query.count(),
            "result":cook_list_schema.dump(CookModel.query.all())
        }
    
    def post(self):
        # fetch data
        data = request.get_json()

        if CookModel.find_cook_by_email(data["email"]):
            return {
                "message": "This email already exists",
                "success": False,
                "code": 400,
            }, 400
        
        # serialize data
        try:
            cook = cook_schema.load(data)
        except ValidationError as err:
            return err.messages, 500
        
        try:
            cook.save_to_db()
        except:
            return{
                "message":"There is an error, please try again"
            }, 500
        
        return {
            "message": "Cook succesfully added",
            "success": True,
            "code": 201,
            "cook": cook_schema.dump(cook)
        }
        