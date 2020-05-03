from app import db

class ImageModel(db.Model):
    __tablename__="cover"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    data = db.Column(db.LongBinary, nullable=False)

    recipe_id = db.Column(db.Integer, db.ForeignKey("Recipe.id"))

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
    
    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id)

    @classmethod
    def find_by_recipe_id(cls, id):
        return cls.query.filter_by(recipe_id=id)