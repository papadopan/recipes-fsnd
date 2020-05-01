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



from resources.recipe import Recipe, RecipesList
from resources.cook import Cook, CookList
# add resources
api.add_resource(Recipe, "/recipe/<int:id>")
api.add_resource(RecipesList, "/recipe")
api.add_resource(Cook, "/cook/<int:id>")
api.add_resource(CookList, "/cook")

