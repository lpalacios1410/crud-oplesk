import React, { useState } from "react";
import EditLogo from "../svg/edit";
import LogoTrash from "../svg/trash";

const CrudTable = ({ users, updateUser, deleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");

  const startEditing = (user) => {
    setIsEditing(true);
    setEditUserId(user.id);
    setNombre(user.nombre || "");
    setCorreo(user.correo || "");
    setEdad(user.edad || "");
  };

  const handleUpdate = () => {
    updateUser(editUserId, {
      nombre,
      correo,
      edad,
    });
    setIsEditing(false);
    setEditUserId(null);
  };

  if (!Array.isArray(users)) {
    return <div>No hay usuarios registrados</div>;
  }
  return (
    <table className="table table-striped table-hover mt-4">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {users.map((user, index) => {
          const isCurrentUserEditing = isEditing && user.id === editUserId;

          return isCurrentUserEditing ? (
            <tr key={user.id || index}>
              <td>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                />
              </td>
              <td>
                <button className="btn btn-success me-2" onClick={handleUpdate}>
                  Guardar
                </button>
              </td>
            </tr>
          ) : (
            //Si no estamos editando, mostramos la fila normal
            <tr key={user.id || index}>
              <td>
                {user.nombre && user.nombre.length > 10
                  ? user.nombre.slice(0, 10) + "..."
                  : user.nombre || ""}
              </td>
              <td>{user.correo}</td>
              <td>{user.edad}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => startEditing(user)}
                >
                  <EditLogo />
                </button>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => deleteUser(user.id)}
                >
                  <LogoTrash />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CrudTable;
