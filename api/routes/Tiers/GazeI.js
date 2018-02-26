//dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose template
var gazeIModel = require('../../models/Tiers/GazeI.js');

router.get('/', function(req, res, next) {
	var founData = null;
	
	var data = gazeIModel.find({}, {_id: 0}).lean().exec(function (err, docs) {
  	foundData = docs;	
	
   	res.send(foundData);
  });	
});

module.exports = router;
