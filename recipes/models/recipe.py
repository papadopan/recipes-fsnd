from db import db

class RecipeModel(db.Model):

    __tablename__= "Recipe"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    description = db.Column(db.String(200))

    def __repr__(self):
        return f"Title: {self.title}, Description: {self.description}"
    

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()