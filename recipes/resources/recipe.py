from flask_restful import Resource
from flask import jsonify, request
from models.recipe import RecipeModel
from schemas.recipe import RecipeSchema
from marshmallow import ValidationError

recipe_schemas = RecipeSchema()

class Recipe(Resource):
    def get(self):
        recipes = RecipeModel.query.count()
        return jsonify({
            "name":"Hello World",
            "count": recipes
        })

    def post(self):
        # fetch data from the body as json
        # data = recipe_schema.load(request.get_json())
        data = request.get_json()

        try:
            # validate through schemas
            new_recipe = recipe_schemas.load({"title":"aa", "description":"nnnnn"})
        except ValidationError as err:
            return err.messages, 400


 

        # search if the title exists
        recipe = RecipeModel.find_by_title(data["title"])
    
        if recipe :
            return {
                "message":"recipe exists"
            }, 400

        # create a new recipe
        recipe = RecipeModel(**data)

        try:
            recipe.save_to_db()
        except:
            return {
                "message": "There was an error please try again"
            }, 500

        return {
            "created": True,
            "success": True,
            "code": 201
        }, 201