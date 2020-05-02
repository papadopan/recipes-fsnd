from app import ma
from models.recipe import RecipeModel
from models.cook import CookModel

class RecipeSchema(ma.ModelSchema):
    class Meta:
        model = RecipeModel
        load_only = ("id", )
        include_fk = True

