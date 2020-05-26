from flask_restful  import Resource
from flask import request, jsonify
from schemas.user import UserSchema
from models.user import UserModel
from marshmallow import ValidationError


user_schema = UserSchema()


class User(Resource):
    def post(self):
        
        data = request.get_json()

        if UserModel.get_user_by_email(data["email"]):
            return jsonify({
                "message":"this email is already registered",
                "success": False,
                "status": 400
            })

        try:
            user = user_schema.load(data)
        except ValidationError as err:
            return err.messages, 500 

        try: 
            user.save_to_db()
        except:
            return jsonify({
                "message": "There was an error while saving, please try again",
                "status": 500
            })

        return jsonify({
            "user": user,
            "success": True,
            "status": 201
        })
