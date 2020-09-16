const Categoria = require('../models/categoria');

exports.categoria_create = async (req,res) =>{

  const {nombre} = req.body;

  const categoria = await Categoria.create({nombre});

  res.status(200).json({categoria});
}

exports.categoria_list = async (req,res) =>{
  const categorias = await Categoria.findAll();
  res.status(200).json({categorias});
}