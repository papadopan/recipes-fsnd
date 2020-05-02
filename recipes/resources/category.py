from flask_restful import Resource
from flask import request
from marshmallow import ValidationError
from schemas.category import CategorySchema
from models.category import CategoryModel

category_schema = CategorySchema()
category_list_schema = CategorySchema(many=True)

class Category(Resource):
    def patch(self, id):
        # check if exists
        category = CategoryModel.find_by_id(id=id)

        if category is None:
            return {
                "message": "Category was not found",
                "success": False, 
                "code": 404
            }, 404
        
        # fetch data 
        data = request.get_json()

        # update fields
        category.title = data["title"]
        category.description = data["description"]

        #update to db
        try:
            category.update_to_db()
        except:
            return {
                "message":"There was an error please try again",
                "code": 500
            }, 500
        
        return {
            "message": "Category updated",
            "success": True,
            "code": 200,
            "result": category_schema.dump(category)
        }, 200

    def delete(self, id):
        # check if exists
        category = CategoryModel.find_by_id(id=id)

        if category is None:
            return {
                "message": "Category was not found",
                "success": False,
                "code": 404
            }, 404
        
        # delete 
        try:
            category.delete_from_db()
        except:
            return {
                "message":"There is an error, please try again",
                "success": False,
                "code": 500
            }, 500
        
        return {
            "message":"Category was deleted",
            "success": True,
            "code": 200,
            "result": category_schema.dump(category)
        }, 200


class CategoryList(Resource):
    def get(self):
        return {
            "message": "All categories",
            "success": True,
            "code": 200,
            "count":CategoryModel.query.count(),
            "result": category_list_schema.dump(CategoryModel.query.all())
        }
    def post(self):
        # fetch the data
        data = request.get_json()

        # search if exists
        category = CategoryModel.find_by_title(title=data["title"])

        if category:
            return {
                "message": "Category already exists",
                "success": False, 
                "code": 400
            }, 400

        # serialize the data
        try:
            category = category_schema.load(data)
        except ValidationError as err:
            return err.messages, 500
        
        # save the new category
        try:
            category.save_to_db()
        except:
            return {
                "message":"There is an error please try again",
                "success": False,
                "code": 500
            }, 500
        
        return {
            "message": "New category added",
            "success": True,
            "code": 201,
            "result": category_schema.dump(category)
        }, 201

        