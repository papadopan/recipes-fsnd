from flask_restful import Resource
from schemas.category import CategorySchema
from models.category import CategoryModel

category_schema = CategorySchema()
category_list_schema = CategorySchema(many=True)


class Category(Resource):
    def get(self):
        return {
            "message": "All categories",
            "success": True,
            "code": 200,
            "count":CategoryModel.query.count(),
            "result": category_list_schema.dump(CategoryModel.query.all())
        }
        