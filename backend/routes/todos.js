const express = require('express');
const router = express.Router();
const Todo = require('../models/todos');

// get all todo route
router.get('/', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})

//create todo
router.post('/new', async (req, res) => {
    const newTodo = new Todo(
        req.body         // what the vue app is sending
        // {
        //     author: 'Zwavel',
        //     todo: 'zwavelzuur mixen met natriumglyiocyde'
        // }
    )
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
})

//getter by id
router.get('/get/:id', async (req, res) => {
    const t = await Todo.findById({ _id : req.params.id })
    res.json(t)
})

//delete a todo by id
router.delete('/delete/:id', async (req, res) => {
    const deleteTodo = await Todo.findByIdAndDelete({ _id : req.params.id })
    res.json(deleteTodo)
})

//update a todo by id
router.put('/put/:id', async (req, res) => {
    const updateTodo = await Todo.findByIdAndUpdate(
        { $set: req.body},
        // { _id : req.params.id }, 
        // {
        //     author: 'bouwer',
        //     todo: 'ik bouw xd'
        // }
    )
    res.json(updateTodo)
})

module.exports = router