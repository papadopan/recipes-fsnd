from ma import ma
from models.recipe import RecipeModel

class RecipeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = RecipeModel

