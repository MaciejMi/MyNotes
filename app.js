const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const PORT_NUMBER = 3000;

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/newnote', (req, res, next) => {
	res.render('newnote');
});

app.get('/', (req, res, next) => {
	const data = require('./data/notes.json');
	res.render('index', { notes: data });
});

app.post('/newnote', (req, res, next) => {
	const title = req.body.title;
	const message = req.body.message;

	const data = require('./data/notes.json');
	const newNote = { title: title, message: message };

	data.push(newNote);

	fs.writeFile('./data/notes.json', JSON.stringify(data), () => {
		res.redirect('/');
	});
});

app.listen(PORT_NUMBER);
