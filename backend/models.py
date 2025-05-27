from flask_sqlalchemy import SQLAlchemy #Importamos la libreria SQLAlchemy para trabajar con BD

db = SQLAlchemy() # Creamos una instancia de SQLAlchemy para trabajar con la BD

class User(db.Model): # Creamos la clase User que representa la tabla de usuarios
    id = db.Column(db.Integer, primary_key=True) # Definimos la columna id como clave primaria
    nombre = db.Column(db.String(100), nullable=False) # Columna nombre 
    correo = db.Column(db.String(120), unique=True) # Columna correo
    edad = db.Column(db.Integer, nullable=False) # Columna edad


