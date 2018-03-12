//dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose template
var emblemIModel = require('../../models/Tiers/EmblemI.js');

router.get('/', function(req, res, next) {
	var founData = null;
	
	var data = emblemIModel.find({}, {_id: 0}).lean().exec(function (err, docs) {
  	foundData = docs;	
	
   	res.send(foundData);
  });	
});

module.exports = router;
