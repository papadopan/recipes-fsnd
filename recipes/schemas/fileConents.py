from app import ma
from models.fileContents import FileContentModel
from models.recipe import RecipeModel

class FileConentSchema(ma.ModelSchema):
    class Meta:
        model = FileContentModel
        include_fk = True