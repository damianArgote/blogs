const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const categoriaController = require('../controllers/categoriaController');

module.exports = function(){

  /**
   * CRUD posts
   */

  router.post('/posts',postController.post_create);
  
  router.get('/posts',postController.post_list);

  router.get('/posts/:id',postController.post_getById);

  router.delete('/posts/:id',postController.post_delete);

  router.patch('/posts/:id',postController.post_update);


  /**
   * Categorias
   */
  router.post('/categorias', categoriaController.categoria_create);


  return router;
}