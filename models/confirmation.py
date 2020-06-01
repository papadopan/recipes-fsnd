from app import db
from uuid import uuid4
from time import time

class ConfirmationModel(db.Model):
    __tablename__="confirmation"

    id = db.Column(db.String(50), primary_key=True)
    expiration = db.Column(db.Integer, nullable=False)
    confirmed = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __init__(self,user_id, **kwargs):
        super().__init__(**kwargs)
        self.id = uuid4().hex
        self.user_id = user_id
        self.expiration = int(time()) + 1800 #30mins
        self.confirmed = False

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @property
    def expired(self):
        return time() > self.expiration

    def force_expire(self):
        if not self.expired:
            self.expired = time()
            self.save_to_db()


    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
    
    def delete_from_db():
        db.session.delete(self)
        db.session.commit()
   

