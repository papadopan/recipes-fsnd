from flask_restful import Resource
from models.cookbook import CookBookModel
from schemas.cookbook import CookBookSchema
from flask import jsonify

cookbook_schema = CookBookSchema()
cookbook_schema_all = CookBookSchema(many=True)



class CookBook(Resource):
    def get(self):
        response = jsonify({
            "code":200,
            "success":True,
            "results":cookbook_schema_all.dump(CookBookModel.query.all())
        })
        response.status_code=200
        return response
