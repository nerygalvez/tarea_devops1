var express = require('express');
var app = express();

//var request = require('request');
var request = require('sync-request');

app.get('/', function (req, res) {
	
	//console.log(obtenerPilot());
	var respuesta1 = request('GET', 'http://localhost:3001/');
	//console.log(respuesta.getBody('utf8'));
	var respuesta2 = request('GET', 'http://localhost:3002/');

	var datos = "DATOS DEL PILOTO ---> " + respuesta1.getBody('utf8')
				+ "<BR>DATOS DE LA POSICIÓN --->" + respuesta2.getBody('utf8');
	res.send(datos);
});

app.listen(3000, function () {
  console.log('Micro servicio del Cliente corriendo en http://localhost:3000/');
});
