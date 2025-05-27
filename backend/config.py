class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:postgres@localhost:5432/flask_crud' # DB URI
    SQLALCHEMY_TRACK_MODIFICATIONS = False # Desactivar la modificaciones de SQLAlchemy
