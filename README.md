<h1 align="center"># Argentina Programa 4.0 Proyecto Final </h1>


El repositorio contiene el proyecto para la creacion de un post


## Instalación y Ejecucion
Siga estos pasos para instalar Mi Proyecto Genial en su máquina:

1. **Clone el repositorio desde GitHub:**
   
   git clone https://github.com/Federicold/21523-A-federico-luis-delgado

2. **Navegue al directorio del proyecto:**

cd 21523-A-federico-luis-delgado

3**Instale las dependencias:**

npm i

4. **Configurar la base de datos MySQL:**
 
 Crear una base de datos llamada 'forodb'

5. **Agrege los siguientes datos en el archivo .example.env**
```
  PORT=5000
  DB_HOST=localhost
  DB_DIALECT=mysql
  USER_DB=root
  PASS_DB=''
  NAME_DB=forodb

6. **Crear la tabla de la base de datos para los posteos con el nombre "publicaciones" con los siguientes datos para las columnas:**
   
 ```
   publicaciones / utf8_general_ci
   id = int
   titulo = varchar 255
   detalle = text
   url_imagen = varchar 255
   fecha_publicacion = date
   user = text   

7. **Ejecute node app.js y acceda de manera predeterminada a la aplicación en su navegador web en el PORT=5000 .env :**
[http://localhost:5000](http://localhost:5000).

# Uso:

Una vez que haya instalado el proyecto, puede usarlo de la siguiente manera:

1. Ejecute la aplicación:

npm start

2. Acceda a la aplicación en su navegador en http://localhost:5000

Completar el formulario para crear un nuevo post.


# Contacto: 

Si tiene preguntas o sugerencias, puede contactarme a través de <a href="mailto:federicold@gmail.com">Click Aqui</a>