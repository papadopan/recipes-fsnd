from flask_restful import Resource
from flask import jsonify, request
from models.recipe import RecipeModel
from schemas.recipe import RecipeSchema
from marshmallow import ValidationError



recipe_schemas = RecipeSchema()
recipe_list_schemas = RecipeSchema(many=True)

class Recipe(Resource):
    def get(self, id):
        recipe = RecipeModel.query.filter_by(id=id).first()
        if recipe is None:
            return {
                "message": "recipe was not found",
                "success": False,
                "code": 404
            }, 404
        
        return {
            "success": True,
            "code":200,
            "result": recipe_schemas.dump(recipe)
        }, 200
    def patch(self, id):
        recipe = RecipeModel.find_by_id(id)

        # check if the recipe exists
        if recipe is None:
            return {
                "message": "recipe was not found", 
                "code": 404,
                "success": False
            }, 404
        
        # fetch the arguments
        data = request.get_json()   
        
        recipe.title = data["title"]
        recipe.description = data["description"]

            
        # save the update data
        try:
            recipe.update_to_db()
        except:
            return {
                "message":"Error during update",
                "code": 500,
                "success": False
            }, 500

        return {
            "message": "recipe successfully updated",
            "code":200,
            "success": True,
            "result": recipe_schemas.dump(recipe)
        }, 200
    def delete(self, id):
        recipe = RecipeModel.find_by_id(id=id)

        if recipe is None :
            return {
                "message": "recipe was not found",
                "code":404,
                "success":False,
            }, 404
        
        # delete from db
        try:
            recipe.delete_from_db()
        except:
            return {
                "message":"Error with the delete process",
                "code": 500,
                "success": False,
            }, 500
        
        return {
            "message": "Recipe was deleted",
            "success": True,
            "code": 200,
            "result": recipe_schemas.dump(recipe)
        }

class RecipesList(Resource):
    def get(self):
        return {
            "message": "List of all the recipes", 
            "success": True, 
            "count": RecipeModel.query.count(),
            "result": recipe_list_schemas.dump(RecipeModel.query.all())
        }
    def post(self):
        # fetch data from the body as json
        data = request.get_json()

        # search if that name of the recipe exists
        if RecipeModel.find_by_title(data["title"]):
            return {
                "message": "Recipe already exists",
                "code": 400,
                "success": False
            }, 400  

        # validate through schemas
        try:
            recipe = recipe_schemas.load(data)
        except ValidationError as err:
            return err.messages, 400
      

        try:
            recipe.save_to_db()
        except:
            return {
                "message": "There was an error please try again"
            }, 500

        return {
            "created": True,
            "success": True,
            "code": 201,
            "recipe": recipe_schemas.dump(recipe)
        }, 201


class RecipeImage(Resource):
    def post(self,id):
        # make sure the id belongs to a recipe
        recipe = RecipeModel.find_by_id(id=id)

        if recipe is None:
            return {
                "message":"Recipe was not found",
                "success": False,
                "code": 404
            }, 404

        return {
            "message":"Image uploaded",
            "success": True,
            "code": 201,
            "result": recipe_schemas.dump(recipe)
        }