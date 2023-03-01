const express = require('express');
const axios = require('axios');
const todo = require('../models/todos');
const router = express.Router();

// Get all todo route
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/todos');
        const todos = response.data.map(item => ({
            id: item.id,
            author: item.author,
            todo: item.todo,
        }));
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// // Get by id [MONGOOSE]
// router.get('/get/:id', async (req, res) => {
//     const t = await todo.findById({ _id : req.params.id })
//     res.json(t)
// })

// Get by id route
router.get('/get/:id', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/todos/${req.params.id}`);
        const todo = {
            id: response.data.id,
            author: response.data.author,
            todo: response.data.todo
        };
        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// // Get all todo route [MONGOOSE]
// router.get('/', async (req, res) => {
//     const todos = await todo.find()
//     res.json(todos)
// })

// =============================== FIX ONDER NOG
// //create todo [MONGOOSE]
// router.post('/new', async (req, res) => {
//     const newTodo = new todo(
//         req.body         // what the vue app is sending
//         // {
//         //     author: 'Zwavel',
//         //     todo: 'zwavelzuur mixen met natriumglyiocyde'
//         // }
//     )
//     const savedTodo = await newTodo.save()
//     res.json(savedTodo)
// })



// =======================================

// //delete a todo by id [MONGOOSE]
// router.delete('/delete/:id', async (req, res) => {
//     const deleteTodo = await todo.findByIdAndDelete({ _id : req.params.id })
//     res.json(deleteTodo)
// })

// //update a todo by id [MONGOOSE]
// router.put('/put/:id', async (req, res) => {
//     const updateTodo = await todo.findByIdAndUpdate(
//         { $set: req.body},
//         // { _id : req.params.id }, 
//         // {
//         //     author: 'bouwer',
//         //     todo: 'ik bouw xd'
//         // }
//     )
//     res.json(updateTodo)
// })

module.exports = router;