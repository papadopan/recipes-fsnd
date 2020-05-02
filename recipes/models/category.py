from app import db

class CategoryModel(db.Model):
    __tablename__="category"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False)
    description = db.Column(db.String(20))
    