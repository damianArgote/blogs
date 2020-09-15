# blogs
Chanllenge Alkemy Backend y Frontend

# Instalacion
Clonar el repositorio. Enviar comando

```
npm install
```

## Configuracion de la base de datos
En el siguiente archivo colocar los datos de su conexion.
```
config/database.js
```

```
const Sequelize = require('sequelize');

module.exports = new Sequelize(DATABSE,USER,PASS,{
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