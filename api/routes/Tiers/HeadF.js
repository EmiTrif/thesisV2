//dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose template
var headFModel = require('../../models/Tiers/HeadF.js');

router.get('/', function(req, res, next) {
	var founData = null;
	
	var data = headFModel.find({}, {_id: 0}).lean().exec(function (err, docs) {
  	foundData = docs;	
	
   	res.send(foundData);
  });	
});

module.exports = router;
