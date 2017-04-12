'use strict'
const api = require('express').Router()
const Sequelize = require('sequelize');

const db = require('../db')
const Campus = require('../db/models/campuses')
const Student = require('../db/models/students')



// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

// CAMPUS ROUTES:

// finds all campuses
api.get('/campuses', (req, res, next) => {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(next)
})

// find campus by id
api.get('/campuses/:campusId', (req, res, next) => {
	Campus.findById(req.params.campusId)
		.then(campus => res.json(campus))
		.catch(next)
})

// creates a new campus
api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
		.then(campus => res.json(campus))
		.catch(next)
})

// updates a campus
api.put('/campuses/:campusId', (req, res, next) => {
	Campus.update(
		req.body,
		{ returning: true, where: { id: req.params.campusId } })
		.then(function([_, [updatedCampus]]) {
			if (!updatedCampus) {
				res.sendStatus(404)
			} else {
				res.json(updatedCampus)
			}
		})
		.catch(next)
})

// deletes a campus
api.delete('/campuses/:campusId', (req, res, next) => {
	Campus.findById(req.params.campusId)
		.then(function(campus) {
			if (!campus) {
				res.sendStatus(404)
			} else {
				campus.destroy({ force: true })
					.then(() => res.sendStatus(204))
			}
		})
		.catch(next)
})


// STUDENT ROUTES:

// finds all students
api.get('/students', (req, res, next) => {
	Student.findAll()
		.then(students => res.json(students))
		.catch(next)
})

// finds student by id 
api.get('/students/:studentId', (req, res, next) => {
	Student.findById(req.params.studentId)
		.then(student => res.json(student))
		.catch(next)
})

// creates a new student
api.post('/students', (req, res, next) => {
	Student.create(req.body)
		.then(student => res.json(student))
		.catch(next)
})

// updates a student
api.put('/students/:studentId', (req, res, next) => {
	Student.update(
		req.body,
		{ returning: true, where: { id: req.params.studentId } })
		.then(function([_, [updatedStudent]]) {
			if (!updatedStudent) {
				res.sendStatus(404)
			} else {
				res.json(updatedStudent)
			}
		})
})

// deletes a student
api.delete('/students/:studentId', (req, res, next) => {
	Student.findById(req.params.studentId)
		.then(function(student) {
			if (!student) {
				res.sendStatus(404)
			} else {
				student.destroy({ force: true })
					.then(() => res.sendStatus(204))
			}
		})
		.catch(next)
})


module.exports = api