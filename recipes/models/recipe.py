from app import db
class RecipeModel(db.Model):

    __tablename__= "Recipe"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200), nullable=False)

    cook_id = db.Column(db.Integer, db.ForeignKey("cook.id"), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("category.id"), nullable=True)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
    
    def update_to_db(self):
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    
    @classmethod
    def find_by_title(cls, title):
        return cls.query.filter_by(title=title).first()
    
    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

