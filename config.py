SQLALCHEMY_DATABASE_URI = "postgresql+psycopg2://antoniospapadopoulos@localhost:5432/recipes"
# SQLALCHEMY_DATABASE_URI = "postgres://bqkoodptnvqegb:e4a01009ed041cef529bd7c31eee94d75292cbfd889544229d11c86551e8908c@ec2-18-235-20-228.compute-1.amazonaws.com:5432/d8gf197be26e7p"
SQLALCHEMY_TRACK_MODIFICATIONS = "FALSE"
PROPAGATE_EXCEPTIONS="TRUE"
UPLOADED_IMAGES_DEST="upload"
JWT_SECRET_KEY = "Thi$I$@veryImport@ntKey$"
JWT_BLACKLIST_ENABLED=True
JWT_BLACKLIST_TOKEN_CHECKS=["access", "refresh"]



MAIL_SERVER="smtp.gmail.com"
MAIL_PORT=465
MAIL_USERNAME="papadopan7@gmail.com"
MAIL_PASSWORD="uyopmjyeafsmyszc"
MAIL_USE_TLS=False
MAIL_USE_SSL=True
