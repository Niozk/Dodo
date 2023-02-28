const express = require('express');
const axios = require('axios');
const todo = require('../models/todos');
const router = express.Router();

// get all todo route
router.get('/', async (req, res) => {
    axios.get('http://localhost:5000/todos')
    .then( res => {
        const data = res.data.map((item) => ({
            // id: item.id,
            author: item.author,
            todo: item.todo,
            }));
        console.log(data); // logs all data retrieved from the API endpoint
    })
    .catch(error => {
      console.error(error); // logs any errors that occur during the API request
    });
});

// get all todo route [MONGOOSE]
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

// //getter by id
// router.get('/get/:id', async (req, res) => {
//     const t = await todo.findById({ _id : req.params.id })
//     res.json(t)
// })

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