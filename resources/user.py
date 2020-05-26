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
            user.set_password = data["_password"]
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


class UserLogin(Resource):
    def post(self):
        data = request.get_json()

        user = UserModel.get_user_by_email(data["email"])

        if user is None:
            response = jsonify({
                "message":"user does not exists",
                "code": 404
            })
            response.status_code = 404
            return response

        access_token = create_access_token(identity=user.email)
        refresh_token = create_refresh_token(identity=user.email)

        if user.is_correct_password(data["password"]):
            response = jsonify({
                "access_token":access_token,
                "refresh_token":refresh_token,
                "success": True,
                "code":200
            })
            response.status_code = 200
            return response
        
        response = jsonify({
            "message":"Credentians are not valid",
            "success": False,
            "code": 400
        })
        response.status_code = 400

        return response
        