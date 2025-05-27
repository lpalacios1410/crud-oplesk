from flask import request, jsonify
from models import db, User # Importamos la instancia de BD y el Model User

def init_routes(app):

    @app.route('/', methods = ['GET'])
    def index():
        return 'Message test, working!', 200 # Mensaje de bienvenida
    
    @app.route('/users', methods = ['POST']) # Creamos la ruta para crear un nuevo usuario
    def create_user():
        data = request.get_json()
        print (data)
        new_user = User(
            nombre = data['nombre'],
            correo = data['correo'],
            edad = data['edad'],
            )
        db.session.add(new_user) # Agregamos el nuevo usuario a la sesion de la BD
        db.session.commit() # Guardamos los cambios en la BD
        return jsonify({'message': 'Usuario creado exitosamente', 'id': new_user.id,
        'nombre': new_user.nombre,
        'correo': new_user.correo,
        'edad': new_user.edad}), 201
    
    @app.route('/users', methods = ['GET'])
    def get_users(): # Creamos la ruta para obtener todos los usuarios
        users = User.query.all()
        users_list = []
        for user in users:
            users_list.append({
                'id': user.id,
                'nombre': user.nombre,
                'correo': user.correo,
                'edad': user.edad
            })
        return jsonify(users_list), 200
    
    @app.route('/users/<int:user_id>', methods = ['GET'])
    def get_user(user_id): # Creamos la ruta para obtener un usuario por su id
        users = User.query.get_or_404(user_id) # Obtenemos el usuario por su id, sino existe, devuelve 404
        return jsonify ({
            'id': users.id, 
            'nombre': users.nombre, 
            'correo': users.correo, 
            'edad': users.edad,
            }), 200 # Devolvemos el usuario en formato JSON
    
    @app.route('/users/<int:user_id>', methods = ['PUT'])
    def update_user(user_id):
        user = User.query.get_or_404(user_id)
        data = request.get_json()
        user.nombre = data['nombre']
        user.correo = data['correo']
        user.edad = data['edad']
        db.session.commit()
        return jsonify({'message': 'Usuario actualizado exitosamente'}), 200
    
    @app.route('/users/<int:user_id>', methods = ['DELETE'])
    def delete_user(user_id):
        user = User.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'Usuario eliminado exitosamente'}), 200

