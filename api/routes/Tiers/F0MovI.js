//dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose template
var f0movIModel = require('../../models/Tiers/F0MovI.js');

router.get('/', function(req, res, next) {
	var founData = null;
	
	var data = f0movIModel.find({}, {_id: 0}).lean().exec(function (err, docs) {
  	foundData = docs;	
	
   	res.send(foundData);
  });	
});

module.exports = router;
