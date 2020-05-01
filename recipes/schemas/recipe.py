from app import ma
from models.recipe import RecipeModel


class RecipeSchema(ma.ModelSchema):
    class Meta:
        model = RecipeModel
        load_only = ("id", )

