var express = require('express');
var path = require('path');
var videodata = require('../videodata.js');

var router = express.Router();

router.get('/', function(req, res) {
	var videos = [];

	console.log(videodata);

	videodata.data.forEach(function(element, index){
		videos.push('/videos/' + path.basename(element));
	});

	res.render('index', {
		videos: videos
	});
});

module.exports = router;