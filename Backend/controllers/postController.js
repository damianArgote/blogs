const Post = require('../models/post');

//Crea un post
exports.post_create = async (req, res) => {
  try {
    const { titulo, contenido, imagen, categoria } = req.body;

    const fecha = Date.now();

    const post = await Post.create({ titulo, contenido, imagen, categoria, fecha });

    res.status(200).json({ post });

  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: 'Hubo un error' });
  }
}

//Obtener lista de posts
exports.post_list = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [
        ['fecha', 'DESC']
      ]
    });

    res.status(200).json({ posts });

  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: 'Hubo un error' });
  }
}

//Obtener un post por su ID
exports.post_getById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (post) {
      res.status(200).json({ post });
    } else {
      res.status(404).json({ msg: 'No encontrado' });
    }

  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: 'Hubo un error' });
  }
}

//Borrar un post por su ID
exports.post_delete = async (req, res) => {
  try {

    const post = await Post.destroy({
      where: {
        id: req.params.id
      }
    });

    if (post) {
      res.status(200).json({ msg: 'Post eliminado' });
    } else {
      res.status(404).json({ msg: 'El post no existe' });
    }

  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: 'Hubo un error' });
  }
}

//Editar un post por su ID
exports.post_update = async (req, res) => {
  try {
    //obtener por id
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ msg: 'No existe' });

    await Post.update(req.body, {
      where: {
        id: post.id
      }
    })

    res.status(200).json({ msg: 'Post Editado' });

  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: 'Hubo un error' });
  }
}