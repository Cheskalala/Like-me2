const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/posts', controller.getPosts);
router.post('/posts', controller.createPost);
router.put('/posts/:id/like', controller.updateLikes);
router.delete('/posts/:id', controller.deletePost);

module.exports = router;