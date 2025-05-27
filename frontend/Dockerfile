# Imagen base oficial de Node
FROM node:20-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json* ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa de producción: usa un servidor web ligero para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]