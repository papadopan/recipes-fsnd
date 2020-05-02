from flask_restful import Resource
from flask import request
from marshmallow import ValidationError
from schemas.cook import CookSchema
from models.cook import CookModel


cook_schema = CookSchema()
cook_list_schema = CookSchema(many=True)

class Cook(Resource):
    def get(self, id):
        cook = CookModel.find_by_id(id)

        if cook is None:
            return {
                "message":"Cook was not found",
                "success": False,
                "code": 404
            }, 404
        
        return{
            "message":"Cook fetched successfully",
            "success": True,
            "code": 200,
            "result": cook_schema.dump(cook)
        }, 200
    
    def patch(self, id):
        cook = CookModel.find_by_id(id)

        if cook is None:
            return {
                "message": "Cook was not found",
                "success": False,
                "code": 404,
            }, 404
        
        data = request.get_json()

        country = data["country"]
        city = data["city"]

        cook.country = country
        cook.city = city

        # update the data
        try:            
            cook.update_to_db()
        except:
            return {
                "message": "There was an error please try again",
                "success": False,
                "code": 500
                }, 500
        return {
            "message": "Cook was updated successfully",
            "success": True,
            "code": 200,
            "result": cook_schema.dump(cook)
        }
        
    def delete(self, id):
        cook = CookModel.find_by_id(id)  

        if cook is None:
            return {
                "message": "Cook was not found",
                "success": False,
                "code": 404
            }, 404
        
        # delete from db
        try:
            cook.delete_from_db()
        except:
            return {
                "message": "The is an error, please try again later",
                "success": False,
                "code": 500,
            }, 500
        
        return {
            "message": "Cook was deleted successfully",
            "success": True,
            "code": 200,
            "result": cook_schema.dump(cook)
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
        