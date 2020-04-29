from flask_restful import Resource
from flask import jsonify, request
from models.recipe import RecipeModel

class Recipe(Resource):
    def get(self):
        recipes = RecipeModel.query.count()
        return jsonify({
            "name":"Hello World",
            "count": recipes
        })

    def post(self):
        # fetch data from the body as json
        data = request.get_json()

        # search if the title exists
        recipe = RecipeModel.find_by_title(data["title"])
    
        if recipe :
            return jsonify({
                "message":"recipe exists"
            })


        # create a new recipe
        recipe = RecipeModel(**data)

        try:
            recipe.save_to_db()
        except:
            return jsonify({
                "message": "There was an error please try again",
            })

        return jsonify({
            "created": True,
            "success": True,
            "code": 201
        })