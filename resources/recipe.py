from auth import AuthError, requires_auth
from flask_restful import Resource
from flask import jsonify, request
from models.recipe import RecipeModel
from schemas.recipe import RecipeSchema
from marshmallow import ValidationError
from schemas.image import ImageSchema
from flask_uploads import IMAGES, UploadSet
import json
from flask_jwt_extended import jwt_required

recipe_schemas = RecipeSchema()
image_schemas = ImageSchema()
recipe_list_schemas = RecipeSchema(many=True)


images = UploadSet("images", IMAGES)


class Recipe(Resource):
    def get(self, id):
        recipe = RecipeModel.query.filter_by(id=id).first()
        if recipe is None:
            return {
                "message": "recipe was not found",
                "success": False,
                "code": 404
            }, 404

        recipe = recipe_schemas.dump(recipe)
        recipe["ingredients"] = [{'name': r['name'], 'quantity': r['quantity'],
                                  'measurement': r['measurement']} for r in json.loads(recipe["ingredients"])]

        recipe["sections"] = [{'name': r['name']}
                              for r in json.loads(recipe["sections"])]

        return {
            "success": True,
            "code": 200,
            "result": recipe
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
        recipe.ingredients = json.dumps(data["ingredients"])
        recipe.sections = json.dumps(data["sections"])
        recipe.category = data["category"]
        recipe.time = data["time"]
        recipe.portions = data["portions"]

        # save the update data
        try:
            recipe.update_to_db()
        except:
            return {
                "message": "Error during update",
                "code": 500,
                "success": False
            }, 500

        recipe = recipe_schemas.dump(recipe)
        recipe["ingredients"] = [{'name': r['name'], 'quantity': r['quantity'],
                                  'measurement': r['measurement']} for r in json.loads(recipe["ingredients"])]
        return {
            "message": "recipe successfully updated",
            "code": 200,
            "success": True,
            "result": recipe
        }, 200

    def delete(self, id):
        recipe = RecipeModel.find_by_id(id=id)

        if recipe is None:
            return {
                "message": "recipe was not found",
                "code": 404,
                "success": False,
            }, 404

        # delete from db
        try:
            recipe.delete_from_db()
        except:
            return {
                "message": "Error with the delete process",
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
        data["ingredients"] = json.dumps(data["ingredients"])
        data["sections"] = json.dumps(data["sections"])

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
            return err.messages, 500

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
    def post(self, id):
        # make sure the id belongs to a recipe
        recipe = RecipeModel.find_by_id(id=id)

        if recipe is None:
            return {
                "message": "Recipe was not found",
                "success": False,
                "code": 404
            }, 404

        # fetch file and save it
        files = request.files['recipe_cover']
        files.filename = "recipe_"+str(id)+"_"+files.filename

        try:
            filename = images.save(files)
        except:
            return {
                "message": "Make sure you are uploading an image",
                "success": False,
                "code": 500
            }, 500

        # create new image record
        image = image_schemas.load({
            "name": filename,
            "data": files.mimetype,
            "recipe_id": id
        })

        try:
            image.save_to_db()
        except:
            return {
                "message": "There was an error while saving, please try again",
                "success": False,
                "code": True
            }, 500

        return {
            "message": "Image uploaded",
            "success": True,
            "code": 201,
            "result": image_schemas.dump(image)
        }
