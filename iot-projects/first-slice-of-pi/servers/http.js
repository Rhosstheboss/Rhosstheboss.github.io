var sensorRoutes = require('./../routes/sensors');
var actuatorRoutes = require('./../routes/actuators');
var middleWare =  require('./../middleware/converter')
var bodyParser = require('body-parser')

app.use(bodyParser.json());

const express = require('express'),
	cors = require('cors');

	var app = express();
	app.use(cors());
	app.use('/pi/sensors', sensorRoutes);
	app.use('/pi/actuators', actuatorRoutes);
	
	app.get('/', function(rep, res){
		res.send('access the root response');
	});
	app.get('/pi', function(rep, res){
		res.send('access the root response of my pi');
	});

	app.use(converter());

module.exports = app;
// I have looked through all files
