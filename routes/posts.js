const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('posts list');
})

router.get('/new', (req, res) => {
  res.send('new post');
})

module.exports = router;