from app import ma
from models.confirmation import ConfirmationModel

class ConfirmationSchema(ma.ModelSchema):
    class Meta:
        model = ConfirmationModel