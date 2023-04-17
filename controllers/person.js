//require schema person
const person = require('../models/person')

exports.test = async (req,res) =>{
    try {
        res.send('this is a test!!')
    } catch (error) {
        console.log(error)
    }
}

exports.addPerson = async (req,res) =>{
    try {
        const {name, age,favoriteFoods} =req.body
        const newPerson = new person({name, age,favoriteFoods})
        await newPerson.save()
        res.status(200).send({msg:'person added successfully', newPerson})
    } catch (error) {
        res.status(400).send({msg:'error on adding person',error})
    }
}

exports.getAllPersons = async(req,res) =>{
    try {
        const persons = await person.find()
        res.status(200).send(persons)
    } catch (error) {
        res.status(400).send({msg:'error on finding all', error})
    }
}

exports.getPersonById = async(req,res) =>{
    try {
        const {_id} =req.params
        const persons = await person.findById({_id})
        if(!persons){
            res.status(400).send({msg:'person not found'})
        }
        else{
            res.status(200).send(persons)
        }
    } catch (error) {
        res.status(400).send({msg:'error on finding by ID', error})
    }
}

exports.getPersonByIdAndEdit = async(req,res) =>{
    try {
        const {_id} =req.params
        const newPerson = req.body
        const persons = await person.updateOne({_id},{$set: newPerson})
        if(!persons){
            res.status(400).send({msg:'person not found'})
        }
        else{
            res.status(200).send({msg:'updated successfully'})
        }
    } catch (error) {
        res.status(400).send({msg:'error on editing ', error})
    } }

    exports.deletePerson = async(req,res) =>{
        try {
            const {_id} =req.params
            const persons = await person.findByIdAndDelete({_id})
            if(!persons){
                res.status(400).send({msg:'person not found'})
            }
            else{
                res.status(200).send({msg:'removed successfully'})
            }
        } catch (error) {
            res.status(400).send({msg:'error on editing ', error})
        } }