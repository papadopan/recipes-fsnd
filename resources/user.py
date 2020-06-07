from flask_restful  import Resource
from flask import request, jsonify, make_response, render_template
from schemas.user import UserSchema
from schemas.confirmation import ConfirmationSchema
from models.user import UserModel
from models.confirmation import ConfirmationModel
from marshmallow import ValidationError
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required,get_raw_jwt, get_jwt_identity
from app import blacklist, mail
from flask_mail import Message


user_schema = UserSchema()
confirmation_schema = ConfirmationSchema()



class UserRegister(Resource):
    def post(self):     
        data = request.get_json()

        if UserModel.get_user_by_email(data["email"]):
            response = jsonify({
                "message":"this email is already registered",
                "success": False,
                "status": 400
            })
            response.status_code = 400
            return response

        try:
            user = user_schema.load(data)
            user.set_password = data["_password"]
        except ValidationError as err:
            return err.messages, 500 

        try: 
            user.save_to_db()   
            u = user_schema.dump(user)
            conf = ConfirmationModel(user_id=u["id"])
            conf.save_to_db()       
        except:
            response = jsonify({
                "message": "There was an error while saving, please try again",
                "status": 500
            })
            response.status_code = 500
            return response

        
        response = jsonify({
            "user": user_schema.dump(user),
            "success": True,
            "status": 201, 
        })
        response.status_code=201
        
        # send verification email 
        msg = Message("Hello",
            sender="from@example.com",
            recipients=[data["email"]])
        url=f"http://localhost:5000/api/confirmation/{conf.id}"
        msg.html = f"<a href={url}>Confirm Your account</a>"
        mail.send(msg)
        return response

class UserLogin(Resource):
    def post(self):
        data = request.get_json()

        user = UserModel.get_user_by_email(data["email"])

        if not user:
            response = jsonify({
                "message":"this email is not registered",
                "code": 404
            })
            response.status_code = 404
            return response

        if not user.is_correct_password(data["password"]):
            response= jsonify({
                "message":"password is not correct",
                "code":400,
                "success":False
            })
            response.status_code=400
            return response

        if user.is_correct_password(data["password"]):
            if user.confirmation[0] and user.confirmation[0].confirmed:
                access_token = create_access_token(identity=user.email, fresh=True)
                refresh_token = create_refresh_token(identity=user.email)
                
                response = jsonify({
                    "access_token":access_token,
                    "refresh_token":refresh_token,
                    "success": True,
                    "code":200
                })
                response.status_code = 200
                return response
            response = jsonify({
                "message":"Your account has not been activated yet",
                "code":400
            })
            response.status_code=400
            return response



        
        response = jsonify({
            "message":"Credentians are not valid",
            "success": False,
            "code": 400
        })
        response.status_code = 400

        return response
        
class UserLogout(Resource):
    @jwt_required
    def post(self):
        jti = get_raw_jwt()['jti']
        blacklist.add(jti)
        response = jsonify({
            "message": "Successfully logout",
            "code":200,
            "email":get_jwt_identity()
        })
        response.status_code = 200
        return response

class UserConfirmation(Resource):
    def get(self, id):
        confirmation = ConfirmationModel.find_by_id(id)
        if not confirmation:
            response =jsonify({
                "message":"This id does not belong to the database",
                "success": False,
                "code": 404
            })
            response.status_code = 404
            return response
        
        if confirmation.expired:
            response = jsonify({
                "message": "Confirmation link has been expired",
                "code": 400
            })
            response.status_code = 400
            return response

        if confirmation.confirmed:
            response = jsonify({
                "message":"Confirmation link for this user already confirmed",
                "code": 400
            })
            response.status_code=400
            return response

        # mark this confirmation record as confirmed and save
        confirmation.confirmed = True
        confirmation.save_to_db()

        headers = {"Content-Type": "text/html"}
        return make_response(
            render_template("confirmation_page.html", email=confirmation.user.email),
            200,
            headers,
        )
        
