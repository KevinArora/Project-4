const express = require('express')
const router = express.Router();
const { searchVideos, getViews } = require('../services/youtube.js')


router.get('/:region', searchVideos, (req,res) => {
  res.json(res.videos)
})
router.get('/video/:id', getViews, (req,res) => {
  res.json(res.videos)
})

module.exports = router;
