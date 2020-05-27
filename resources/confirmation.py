from flask_restful import Resource
from schemas.confirmation import ConfirmationSchema
from models.confirmation import ConfirmationModel
from flask import jsonify

confirmations = ConfirmationSchema()

class Confirmation(Resource):
    def get(self, id):
        
        return jsonify({"data":id})
        