from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from flask_marshmallow import Marshmallow


# config the app
app = Flask(__name__)
app.config.from_object('config')

# setup db and migration tool
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# setup restfull
api = Api(app)
ma = Marshmallow(app)

from resources.recipe import Recipe, RecipesList, RecipeImage
from resources.cook import Cook, CookList
from resources.category import CategoryList, Category

# set up config for Flask Uploads
# configure_uploads(app,images)

# add resources
api.add_resource(Recipe, "/recipe/<int:id>")
api.add_resource(RecipesList, "/recipe")
api.add_resource(RecipeImage, "/image/recipe/<int:id>")
api.add_resource(Cook, "/cook/<int:id>")
api.add_resource(CookList, "/cook")
api.add_resource(CategoryList, "/category")
api.add_resource(Category, "/category/<int:id>")

