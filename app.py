from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_jwt_extended import JWTManager 
from flask_bcrypt import Bcrypt
from flask_mail import Mail


# config the app
app = Flask(__name__)
app.config.from_object('config')

# setup db and migration tool
db = SQLAlchemy(app)
migrate = Migrate(app, db)

#jwt manager
jwt = JWTManager(app)
blacklist = set()

#check if the token is revoked
@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    jti = decrypted_token['jti']
    return jti in blacklist

#mail 
mail = Mail(app)

#bcrypt app
bcrypt = Bcrypt(app)

# setup restfull
api = Api(app)
ma = Marshmallow(app)

# setup cors
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")

    return response


@app.errorhandler(400)
def bad_request(error):
  return jsonify({
      'success': False,
      'error': 400,
      'message': 'bad request'
  }), 400

@app.errorhandler(500)
def internal_server_error(error):
  return jsonify({
      'success': False,
      'error': 500,
      'message': 'internal server error'
  }), 500

@app.errorhandler(401)
def unauthorized_error(error):
  return jsonify({
      'success': False,
      'error': 401,
      'message': 'unauthorized error'
  }), 401

@app.errorhandler(403)
def forbidden(error):
  return jsonify({
      'success': False,
      'error': 403,
      'message': 'forbidden'
  }), 403

@app.errorhandler(404)
def not_found(error):
  return jsonify({
      'success': False,
      'error': 404,
      'message': 'resource not found'
  }), 404

from flask_uploads import configure_uploads,IMAGES, UploadSet
from resources.recipe import Recipe, RecipesList, RecipeImage, images
from resources.cook import Cook, CookList
from resources.category import CategoryList, Category
from resources.user import UserRegister, UserLogin, UserLogout, UserConfirmation


# set up config for Flask Uploads
images = UploadSet("images", IMAGES)
configure_uploads(app,images)

# add resources
api.add_resource(Recipe, "/api/recipe/<int:id>")
api.add_resource(RecipesList, "/api/recipe")
api.add_resource(RecipeImage, "/api/image/recipe/<int:id>")
api.add_resource(Cook, "/api/cook/<int:id>")
api.add_resource(CookList, "/api/cook")
api.add_resource(CategoryList, "/api/category")
api.add_resource(Category, "/api/category/<int:id>")
api.add_resource(UserRegister, "/api/signup")
api.add_resource(UserLogin, "/api/login")
api.add_resource(UserLogout, "/api/logout")
api.add_resource(UserConfirmation, "/api/confirmation/<string:id>")

if __name__ == '__main__':
    mail.init_app(app)
    # port = int(os.environ.get("PORT", 5000))
    port = 5000
    app.run(port=port, debug=True)

