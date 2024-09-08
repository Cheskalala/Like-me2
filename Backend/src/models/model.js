const pool = require('../../db/connections');

const getPosts = async () => {
  const sql = 'SELECT * FROM posts';
  const { rows } = await pool.query(sql);
  if (!rows.length) {
    throw { status: 404, message: 'No hay datos que mostrar' };
  }
  return rows;
};

const createPost = async (titulo, img, descripcion, likes) => {
  const sql = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *';
  const { rows } = await pool.query(sql, [titulo, img, descripcion, likes]);
  if (!rows.length) {
    throw { status: 500, message: 'Error al crear el post' };
  }
  return rows[0];
};

const updateLikes = async (id) => {
  const sql = 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *';
  const { rows } = await pool.query(sql, [id]);
  if (!rows.length) {
    throw { status: 404, message: 'No se encontró el post para actualizar' };
  }
  return rows[0];
};

const deletePost = async (id) => {
  const sql = 'DELETE FROM posts WHERE id = $1 RETURNING *';
  const { rows } = await pool.query(sql, [id]);
  if (!rows.length) {
    throw { status: 404, message: 'No se encontró el post para eliminar' };
  }
  return rows[0];
};

module.exports = {
  getPosts,
  createPost,
  updateLikes,
  deletePost,
};




