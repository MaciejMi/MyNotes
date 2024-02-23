const express = require('express')
const path = require('path')
const fs = require('fs')
const data = require('../data/notes.json')
const router = express.Router()

//  /newnote/ =>  get
router.get('/newnote', (req, res, next) => {
	res.render('newnote', { title: 'My notes - new note' })
})

// /newnote/ => post
router.post('/newnote', (req, res, next) => {
	const title = req.body.title
	const message = req.body.message

	const newNote = { title: title, message: message }

	data.push(newNote)

	fs.writeFile(path.join('data', 'notes.json'), JSON.stringify(data), () => {
		res.redirect('/')
	})
})

exports.router = router
