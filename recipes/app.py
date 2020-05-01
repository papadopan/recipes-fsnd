from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from resources.recipe import Recipe, RecipesList
from flask_restful import Api
from flask_marshmallow import Marshmallow

# config the app
app = Flask(__name__)
app.config.from_object('config')

# setup db and migration tool
db = SQLAlchemy(app)
migrate = Migrate(app, db)

#setup restfull
api = Api(app)

ma = Marshmallow(app)

# add resources
api.add_resource(Recipe, "/recipe/<int:id>")
api.add_resource(RecipesList, "/recipe")



@app.route("/")
def hello():
    return "Hello"