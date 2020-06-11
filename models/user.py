from app import db, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property, hybrid_method
from models.confirmation import ConfirmationModel


class UserModel(db.Model):
    __tablename__= "user"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    country = db.Column(db.String(30), nullable=False)
    city = db.Column(db.String(30), nullable=False)
    _password = db.Column(db.Binary(60), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    validated = db.Column(db.Boolean, nullable=False, default=False)

    confirmation = db.relationship("ConfirmationModel", backref="user", lazy=True)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
    
    def update_to_db(self):
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def set_password(self, plaintext_password):
        self._password = bcrypt.generate_password_hash(plaintext_password, 12)

    @hybrid_method
    def is_correct_password(self, plaintext_password):
        return bcrypt.check_password_hash(self.password, plaintext_password)


    @classmethod
    def get_user_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    @classmethod
    def get_user_by_id(cls, id):
       return  cls.query.filter_by(id=id).first()