const postModel = require('../models/model');

const getPosts = async (req, res) => {
    try {
      const posts = await postModel.getPosts();
      res.status(200).json(posts);
    } catch (err) {
      console.error('Error al obtener los posts', err);
      res.status(500).json({ error: 'Error al obtener los posts' });
    }
};

const createPost = async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
      const post = await postModel.createPost(titulo, img, descripcion, likes);
      res.status(201).json(post);
    } catch (err) {
      console.error('Error al crear el post', err);
      res.status(500).json({ error: 'Error al crear el post' });
    }
};

const updateLikes = async (req, res) => {
    const { id } = req.params;
    try {
      const post = await postModel.updateLikes(id);
      if (!post) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }
      res.status(200).json(post);
    } catch (err) {
      console.error('Error al actualizar likes', err);
      res.status(500).json({ error: 'Error al actualizar likes' });
    }
};


const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
      const post = await postModel.deletePost(id);
      if (!post) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }
      res.status(200).json({ message: 'Post eliminado con éxito' });
    } catch (err) {
      console.error('Error al eliminar el post', err);
      res.status(500).json({ error: 'Error al eliminar el post' });
    }
};

module.exports = {
    getPosts,
    createPost,
    updateLikes,
    deletePost,
};