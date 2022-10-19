import express from "express";

const app = express();

// Allows JSON requests
app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		'hello': 'world'
	})
});

app.post('/suma', (req, res) => {
	/*
		Estructura del body: {
			"primero": integer,
			"segundo": integer
		}
	*/
	const body = req.body;

	res.json({
		'resultado': body.primero + body.segundo
	})
});

app.post('/resta', (req, res) => {
	/*
		Estructura del body: {
			"primero": integer,
			"segundo": integer
		}
	*/
	const body = req.body;

	res.json({
		'resultado': body.primero - body.segundo
	})
});

app.put('/multi', (req, res) => {
	/*
		Estructura del body: {
			"primero": integer,
			"segundo": integer
		}
	*/
	const body = req.body;

	res.json({
		'resultado': body.primero * body.segundo
	})
});

app.put('/div', (req, res) => {
	/*
		Estructura del body: {
			"primero": integer,
			"segundo": integer
		}
	*/
	const body = req.body;

	res.json({
		'resultado': body.primero / body.segundo
	})
});

// npx nodemon index.js
app.listen(2600, () => {
	console.log('Servidor encendido!');
});
/*
	Metodos HTTP:

	- GET = Para obtener informacion
	- POST = Crear/añadir/Obtener recursos
	- PUT = Actualizar recurso por completo
	- PATCH = Actualizar parcialmente un recurso
	- DELETE = Borar recurso
*/