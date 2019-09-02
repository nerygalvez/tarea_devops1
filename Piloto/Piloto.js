//Variables para levantar el servicio
var express = require('express');
var app = express();


//Arreglo donde voy a tener a los pilotos
var pilotos = [
					{nombre:"Nery", telefono: 16485963},
					{nombre:"Juan", telefono: 92547631},
					{nombre:"Roberto", telefono: 45972153},
					{nombre:"Luis", telefono: 33498512}
				];

/**
*	Función que permite hacer una petición a la ruta indicada
*/
app.get('/', function (req, res) {
	
	//Genero un número aleatorio para designar a un piloto
	var posicion = aleatorio(0,pilotos.length - 1);
	//Retorno la información del piloto asignado
	res.send(pilotos[posicion]);
});

/**
*	Función que inicia el servidor
*/
app.listen(3001, function () {
  console.log('Micro servicio del Piloto corriendo en http://localhost:3001/');
});

/**
* Función que genera un número aleatorio entre los límites definidos
*
* @param minimo Límite inferior, si se incluye
* @param maximo Límite superior, si se incluye
*/

function aleatorio(minimo,maximo){
	return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}