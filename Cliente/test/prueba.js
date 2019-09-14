var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
//let chai = require('chai-http');
var server = require('../Cliente.js');

//Agrego código que se va a ejecutar antes de iniciar la prueba
before(done => {
    console.log('\n\n-----------------------\n--\n-- START TEST\n--\n-------------------------');
    done();
});

//Agrego código que se va a ejecutar al finalizar la prueba
after(done => {
    console.log('\n\n-----------------------\n--\n-- END TEST\n--\n-------------------------');
    done();
});


//Escribo el código para generar alguna prueba
describe('#Llamada a los microservicios de Piloto y Rastreo', () => {


	it('Llamada al microservicio de Piloto', done => {

		chai.request(server)
			.get('/localhost:3001/')
			.end(function (err, res) {
				if(err) done(err);

				done();
				console.log('status code: %s, users: %s',res.statusCode, res.body.length);
			});

	}).timeout(0);

	it('Llamada al microservicio de Rastreo', done => {

		chai.request(server)
			.get('/localhost:3002/')
			.end(function (err, res) {
				if(err) done(err);

				done();
				console.log('status code: %s, users: %s',res.statusCode, res.body.length);
			});

	}).timeout(0);



});
