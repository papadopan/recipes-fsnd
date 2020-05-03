from app import db

class FileContentModel(db.Model):

    __tablename__="files"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    data = db.Column(db.LargeBinary)

    recipe_id = db.Column(db.Integer, db.ForeignKey("Recipe.id"))


    # database interaction
    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def update_to_db(self):
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    # class methods
    @classmethod
    def find_by_recipe_id(id):
        return cls.query.filter_by(recipe_id=id)
    