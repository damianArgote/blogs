const Sequelize = require('sequelize');
const db = require('../config/database');

const Categoria = require('./categoria');

const Post = db.define('post', {
  id:{
    type:Sequelize.INTEGER(11),
    primaryKey:true,
    autoIncrement:true
  },
  titulo:Sequelize.STRING(30),
  contenido: Sequelize.TEXT,
  imagen: Sequelize.STRING(255),
  fecha:Sequelize.DATE(6)
});

Post.belongsTo(Categoria,{ as: 'categoria' });


module.exports=Post;