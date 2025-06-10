
# crud_oplesk_final  
## Proyecto CRUD con React, Flask, PostgreSQL, Docker y AWS-EC2
## EC2 AWS [(http://18.221.135.15)]

---

## 1. Nombre y Objetivo  
**crud_oplesk_final** es una aplicación web que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre datos, gestionando usuarios y sus interacciones a través de una API REST construida con Flask, conectada a una base de datos PostgreSQL, y con un frontend en React.

---

## 2. Tecnologías Usadas  
- **Frontend:** React (JSX, componentes reutilizables, CSS)  
- **Backend:** Flask (Python)  
- **Base de Datos:** PostgreSQL  
- **Contenedores:** Docker (para facilitar despliegue y desarrollo)  
- **Despliegue:** AWS (Amazon Web Services)

---

## 3. Funcionalidades Principales  
- Gestión completa de datos mediante operaciones CRUD.  
- API REST para comunicación entre frontend y backend.  
- Manejo y autenticación básica de usuarios.  
- Interfaz dinámica y responsiva con React.  
- Configuración para desarrollo y producción con Docker.

---

## 4. Estructura del Proyecto  

    ├── backend/
    │ ├── app.py # Archivo principal backend con Flask
    │ ├── config.py # Configuración de la base de datos y variables
    │ ├── models.py # Definición de modelos y tablas de la BD
    │ ├── routes.py # Definición de rutas y endpoints API
    ├── frontend/
    │ ├── src/
    │ │ ├── components/ # Componentes React reutilizables
    │ │ ├── svg/ # Recursos gráficos y SVGs
    │ │ ├── App.jsx # Componente principal de React
    │ │ ├── index.css # Estilos CSS globales y variables
    │ │ ├── main.jsx # Punto de entrada React


---

---

## 5. Flujo y Manejo de Usuarios  
- Los usuarios pueden registrarse y realizar operaciones CRUD sobre los recursos definidos.  
- El backend valida y controla el acceso a través de rutas protegidas.  
- El frontend consume las APIs y muestra datos actualizados de manera dinámica.

---

## 6. Cómo usar / Instalar (Resumen rápido)  
1. Clonar el repositorio.  
2. Levantar los contenedores Docker (base de datos y backend).  
3. Configurar variables de entorno para conexión a PostgreSQL y AWS si aplica.  
4. Ejecutar backend Flask.    
5. Levantar frontend React con `npm start` o el comando que uses.  
6. Acceder vía navegador a la interfaz.

---

## 7. Posibles mejoras / Próximos pasos  
- Implementar autenticación más segura (JWT, OAuth).  
- Añadir tests automatizados para backend y frontend.  
- Mejorar manejo de errores y validaciones.  
- Despliegue automático CI/CD en AWS.  
- Optimización UI/UX.

---

**¡Gracias por usar este proyecto!**  
Si quieres contribuir, haz un fork y envía tus pull requests.

---

## 📝 Autor

**Luis Palacios**  
🐙 [GitHub] - [https://github.com/lpalacios1410]

---


### ✔️ Checklist de requisitos cumplidos

- [x] Crear usuario
- [x] Ver lista de usuarios
- [x] Ver total de usuarios  
- [x] Eliminar usuario
- [x] Buscar usuario
- [x] Actualizar usuario
- [x] Truncar los caracteres a max 10
- [x] Base datos aws


---

