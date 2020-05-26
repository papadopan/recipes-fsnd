from flask_restful  import Resource
from flask import request, jsonify
from schemas.user import UserSchema
from models.user import UserModel
from marshmallow import ValidationError
from flask_jwt_extended import create_access_token, create_refresh_token

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
            user.password = data["_password"]
        except ValidationError as err:
            return err.messages, 500 

        try: 
            user.save_to_db()
        except:
            return jsonify({
                "message": "There was an error while saving, please try again",
                "status": 500
            })

        access_token = create_access_token(identity=user.email)
        refresh_token = create_refresh_token(identity=user.email)
        response = jsonify({
            "user": user_schema.dump(user),
            "success": True,
            "status": 201, 
            "access_token": access_token,
            "refresh_token": refresh_token
        })
        response.status_code=201
        
        return response
