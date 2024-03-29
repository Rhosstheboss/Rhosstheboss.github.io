const resources = require('./../../resources/model');
const sensorDriver = require('node-dht-sensor');

let interval, sensor;
const device = resources.pi.sensors.dht;
let localParams = {'frequency': 2000};

function connectHardware(){
	sensor = {
	initialize : function initial(){
		sensorDriver.initialize(device.model, device.gpio)
	},
	read: function temp(){
		var drive = sensorDriver.read()
		device.temperature.value = parseFloat(drive.temperature);
		device.humidity.value = parseFloat(drive.humidity);
	}
};
	sensor.initialize()
	sensor.read()
	interval = setInterval(function () {
        sensor.read();
    }, localParams.frequency);
};

function start(params){
	localParams = params ? params : localParams;
	connectHardware()
};
exports.start = start;

function stop(){
	clearInterval(interval)
};
exports.stop = stop;
