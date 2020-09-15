const Categoria = require('../models/categoria');

exports.categoria_create = async (req,res) =>{

  const {nombre} = req.body;

  const categoria = await Categoria.create({nombre});

  res.status(200).json({categoria});
}