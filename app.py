from flask import Flask , jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from auth import AuthError




# config the app
app = Flask(__name__)
app.config.from_object('config')



# setup db and migration tool
db = SQLAlchemy(app)
migrate = Migrate(app, db)


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


@app.errorhandler(AuthError)
def catch_err(error):
    return jsonify({
                "success": False,
                "error": error.status_code,
                "code": error.error['code'],
                "message": error.error["description"],
                }), error.status_code




from flask_uploads import configure_uploads,IMAGES, UploadSet
from resources.recipe import Recipe, RecipesList, RecipeImage, images
from resources.cook import Cook, CookList
from resources.category import CategoryList, Category

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






if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)

