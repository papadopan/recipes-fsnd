from ma import ma
from models.cook import CookModel

class CookSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = CookModel
        load_only=("password", "id")