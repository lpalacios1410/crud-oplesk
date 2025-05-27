import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; // Importamos axios para hacer peticiones HTTP
import CrudForm from "./CrudForm.jsx";
import CrudTable from "./CrudTable.jsx";

const API = "http://localhost:5000/users"; // Definimos la URL base para las peticiones

const CrudApp = () => {
  // Definimos la URL base para las peticiones
  const [users, setUsers] = useState([]); // Inicializamos el estado de usuarios como un array vacio
  const [currentUser, setCurrentUser] = useState(null); // Estado para el usuario actual que se esta editando

  useEffect(() => {
    fetchUsers(); // Llamamos a la función para obtener los usuarios al cargar el componente
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(API);
    setUsers(response.data); // Actualizando el estado de los usuarios con la respuesta de la API
  };

  const addUser = async (user) => {
    try {
      const response = await axios.post(API, user);
      setUsers([...users, response.data]);
      fetchUsers();
    } catch (error) {
      console.error("Error al agregar usuario:", error);
    }
  };

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${API}/${userId}`, updatedUser);
    fetchUsers();
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`${API}/${userId}`);
    fetchUsers();
  };

  return (
    <div className="container mt-5 w-50 mx-auto text-center bg-light p-4 rounded">
      <h1 className="text-center">CRUD React</h1>
      <h1>Gestión de Usuarios</h1>
      <CrudForm
        addUser={addUser}
        updateUser={updateUser}
        currentUser={currentUser}
      />
      <CrudTable
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </div>
  );
};

export default CrudApp;
