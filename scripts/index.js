var app = require('app');
var BrowserWindow = require('browser-window');

var apiKey = require('./../data-access/apikey.json').steamApiKey;
var Crystalys = require('./../data-access/Crystalys.js');

var viewsUrl = 'file://' + __dirname + '/../views/';

app.on('ready', function() {
	// create splash window
	var splashWindow = new BrowserWindow({
		width: 400,
		height: 600,
		frame: false,
		transparent: true,
		icon: './content/img/Mango.png'
	});

	var mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		icon: './content/img/Mango.png',
		show: false
	});
	mainWindow.setMinimumSize(800, 600);

	splashWindow.loadUrl(viewsUrl + 'splash.html');
	mainWindow.loadUrl(viewsUrl + 'index.html');

	setTimeout(function() {
		splashWindow.close();
		mainWindow.show();
		
		// debug
		var api = new Crystalys(apiKey);
	}, 4000);
});
