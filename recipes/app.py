from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from resources.recipe import Recipe
from flask_restful import Api

# config the app
app = Flask(__name__)
app.config.from_object('config')

# setup db and migration tool
db = SQLAlchemy(app)
migrate = Migrate(app, db)

#setup restfull
api = Api(app)

# add resources
api.add_resource(Recipe, "/recipe")



@app.route("/")
def hello():
    return "Hello"