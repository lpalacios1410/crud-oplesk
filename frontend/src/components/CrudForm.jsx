import React, { useState } from "react";
import Swal from "sweetalert2";

const UserForm = ({ addUser }) => {
  const [nombre, setNombre] = useState(""); // Nombre del usuario
  const [correo, setCorreo] = useState(""); // Correo del usuario
  const [edad, setEdad] = useState(""); // Edad del usuario
  // const [userId, setUserId] = useState(""); // Edad del usuario

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edad <= 0 || edad >= 120) {
      Swal.fire("Error", "La edad debe ser mayor a 0 o menor a 120", "warning");
      return;
    } else {
      addUser({ nombre, correo, edad });
      Swal.fire("Agregado", "El usuario ha sido agregado", "success");
    }
    setNombre("");
    setCorreo("");
    setEdad("");
    // setUserId("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container-fluid d-flex flex-column align-items-center"
    >
      <div className="mb-3 w-50">
        <input
          className="form-control"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 w-50">
        <input
          className="form-control"
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 w-50">
        <input
          className="form-control"
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};

export default UserForm;
