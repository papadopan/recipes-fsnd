from db import db

class RecipeModel(db.Model):

    __tablename__= "Recipe"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200), nullable=False)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def find_by_title(cls, title):
        return cls.query.filter_by(title=title).first()

