from flask import Flask 
from models import db  #Instancia de base de datos
from routes import init_routes #Importar funcion para inicializar las rutas
from flask_cors import CORS # Importar la libreria CORS para permitir peticiones desde otros dominios
from sqlalchemy import text # Importar la libreria text para realizar consultas SQL

app = Flask(__name__) # Creamos una instancia de la aplicacion flask
app.config.from_object('config.Config') # Cargamos la configuracion desde el archivo config.py

CORS(app) # Inicializamos CORS para permitir peticiones desde otros dominios

db.init_app(app) # Inicializamos la base de datos con la aplicacion flask

with app.app_context(): # Contexto de la aplicacion para realizar operaciones con la base de datos
    db.create_all() # Creamos todas las tablas definidos en los modelos


init_routes(app) # Inicializamos las rutas de la aplicacion


if __name__ == '__main__':
    app.run(debug=True) # Ejecutamos la aplicacion en modo debug
   # app.run ( host'0.0.0.0', port=5000) # Ejecutamos la aplicacion en modo debug

# # Test de conexión a la base de datos

try:
    with app.app_context():
        db.session.execute(text('SELECT 1'))
    print("✅ Conexión exitosa")
except Exception as e:
    print(f"❌ Error en la conexión: {e}")