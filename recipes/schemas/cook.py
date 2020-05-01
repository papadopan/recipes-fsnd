from app import ma
from models.cook import CookModel

class CookSchema(ma.ModelSchema):
    class Meta:
        model = CookModel
        load_only=("password", "id")