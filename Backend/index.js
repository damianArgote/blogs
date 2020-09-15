const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//crea conexion a database
const db = require('./config/database');
//importo modelos para generar las tablas automaticamente
require('./models/post');
require('./models/categoria');
//test de conexion
//db.authenticate()
db.sync()
.then(() => console.log('DB Conectado'))
.catch(error => console.log(error));


const app = express();

//habilitar cors
app.use(cors());

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//habilitar routing
app.use('/api',routes());

app.listen(5000,() =>{
  console.log('Servidor funcionando en puerto 5000');
});