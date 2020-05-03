from app import ma
from models.recipe import RecipeModel
from models.cook import CookModel
from models.category import CategoryModel


class RecipeSchema(ma.ModelSchema):
    class Meta:
        model = RecipeModel
        load_only = ("id", "recipes")
        include_fk = True

