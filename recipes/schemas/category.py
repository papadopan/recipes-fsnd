from app import ma
from models.category import CategoryModel

class CategorySchema(ma.ModelSchema):
    class Meta:
        model = CategoryModel
        