const express = require('express');
const path = require('path');

const PORT_NUMBER = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/newnote', (req, res, next) => res.sendFile(path.join(__dirname, 'views', 'newnote.html')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'views', 'index.html')));

app.listen(PORT_NUMBER);
