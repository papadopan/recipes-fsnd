from app import ma
from models.image import ImageModel

class ImageSchema(ma.ModelSchema):
    class Meta:
        model = ImageModel