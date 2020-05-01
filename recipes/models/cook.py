from app import db

class CookModel(db.Model):
    __tablename__= "cook"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(20), nullable=False)
    country = db.Column(db.String(30), nullable=False)
    city= db.Column(db.String(30), nullable=False)


    @classmethod
    def find_cook_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    