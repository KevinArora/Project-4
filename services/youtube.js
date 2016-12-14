const fetch = require('node-fetch');

function searchVideos(req, res, next){
  console.log("Hit and req.params.video is ", req.params.video);
  const searchTerm = req.params.region;
  let key = 'AIzaSyD19PVCE5Ur3U6xrOqyEIH2-X17apGi4C8';
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${searchTerm}&maxResults=10&key=AIzaSyB8eKf_94lJayhh3WlkA9jA8T9e5p4b7CU`)
    .then(r => r.json())
    .then((data) => {
      res.videos = data;
      next();
    })
    .catch((error) => {
      console.log("Error is ", error);
      res.error = error;
      next();
    });
};

module.exports = { searchVideos };
