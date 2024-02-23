const express = require('express')
const data = require('../data/notes.json')
const router = express.Router()

router.get('/', (req, res, next) => {
	res.render('index', { title: 'My notes - main', notes: data })
})

exports.router = router
