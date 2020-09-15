const Sequelize = require('sequelize');
const db = require('../config/database');



const Categoria = db.define('categorias',{
  id:{
    type:Sequelize.INTEGER(11),
    primaryKey:true,
    autoIncrement:true
  },
  nombre:Sequelize.STRING(30)
});



module.exports=Categoria;