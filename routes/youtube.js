const express = require('express')
const router = express.Router();
const { searchVideos } = require('../services/youtube.js')


router.get('/:region', searchVideos, (req,res) => {
  res.json(res.videos)
})

module.exports = router;
