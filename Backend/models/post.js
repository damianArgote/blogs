const Sequelize = require('sequelize');
const db = require('../config/database');


const Post = db.define('post', {
  id:{
    type:Sequelize.INTEGER(11),
    primaryKey:true,
    autoIncrement:true
  },
  titulo:Sequelize.STRING(30),
  contenido: Sequelize.TEXT,
  imagen: Sequelize.STRING(255),
  categoria:Sequelize.STRING(20),
  fecha:Sequelize.DATE(6)
});

module.exports=Post;