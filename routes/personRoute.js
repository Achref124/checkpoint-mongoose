//require express
const express = require('express')
const { test, addPerson, getAllPersons, getPersonById, getPersonByIdAndEdit, deletePerson } = require('../controllers/person')
//require person schema
const person =require ('../models/person')


// require router 

const router =express.Router()

//creating routes
// route test

router.get('/test', test)

//route add person
router.post('/add_person',addPerson)

//route find all persons

router.get('/find_all',getAllPersons)

//route get person by id

router.get('/findByid/:_id',getPersonById)

//route find by ID and edit
router.put('/edit/:_id',getPersonByIdAndEdit)

//delete Person

router.delete('/delete/:_id',deletePerson)
//export router

module.exports = router