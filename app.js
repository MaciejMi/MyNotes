const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT_NUMBER = 3000

const app = express()

const mainRoutes = require('./routes/main').router
const newNoteRoutes = require('./routes/newnote').router

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)
app.use(newNoteRoutes)

app.use('/', (req, res, next) => {
	res.status(404)
	res.render('404', { title: '404' })
})

app.listen(PORT_NUMBER)
