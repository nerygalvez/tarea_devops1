var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send(obtenerPosicion());
	//res.send('Este es el archivo de Rastreo');
});

app.listen(3002, function () {
  console.log('Micro servicio del Rastreo corriendo en http://localhost:3002/');
});

function obtenerPosicion(){
	var minimo = -5248;
	var maximo = 5248;

	return {longitud:aleatorio(minimo,maximo), latitud:aleatorio(minimo,maximo)};
}

function aleatorio(minimo,maximo){
	return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}