# Blog
Chanllenge Alkemy Backend

# Instalacion
Clonar el repositorio. Enviar comando en la carpeta de Backend para instalar la API.

```
npm install
```

## Configuracion de la base de datos
En el siguiente archivo colocar los datos de su conexion.
```
Backend/config/database.js
```

```
const Sequelize = require('sequelize');

module.exports = new Sequelize(DATABASE,USER,PASS,{
    host:'localhost',
    dialect:'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases:false
})
```

# Endpoints Categorias

```
POST http://localhost:5000/api/categorias  ---> crea una catetgoria
GET http://localhost:5000/api/categorias   ---> obtiene lista de categorias
```

# Endpoints Posts

```
Crear un post
POST http://localhost:5000/api/posts

Obtener todos los posts
GET http://localhost:5000/api/posts

Obtener un posts por su ID
GET http://localhost:5000/api/posts/:id

Editar posts por su ID segun la peticion del request
PATCH http://localhost:5000/api/posts/:id

Borrar de la base de datos un post por su ID
DELETE http://localhost:5000/api/posts/:id
```

## Ejemplo
Para agregar un nuevo post enviar al cuerpo el siguente json al endpoint correspondiente.
```
{
    "titulo": "Nuevo Post",
    "contenido":"Contenido demo del post",
    "imagen":"https://cdn.pixabay.com/photo/2020/06/11/20/06/dog-5288071_960_720.jpg",
    "categoriaId":1
}
```
Resultado:
```
{
    "post": {
        "id": 4,
        "titulo": "Nuevo Post",
        "contenido": "Contenido demo del post",
        "imagen": "https://cdn.pixabay.com/photo/2020/06/11/20/06/dog-5288071_960_720.jpg",
        "categoriaId": 1,
        "fecha": "2020-09-16T20:53:48.598Z"
    }
}
```


