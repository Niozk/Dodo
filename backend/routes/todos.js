const express = require('express');
const axios = require('axios');
const todo = require('../models/todoModel');
const router = express.Router();

// Get all todo route
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await axios.get(`http://localhost:5000/todos?userId=${userId}`);
        const todos = response.data.map(item => ({
            id: item.id,
            author: item.author,
            userId: item.userId,
            todo: item.todo,
        }));
        res.json(todos);
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

// // Get by id route [MONGOOSE]
// router.get('/get/:id', async (req, res) => {
//     const t = await todo.findById({ _id : req.params.id })
//     res.json(t)
// })

// Create todo route
router.post('/new', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/todos', {
            author: req.body.author,
            todo: req.body.todo,
            userId: req.body.userId
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// // Create todo route [MONGOOSE]
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

// Delete todo by id route
router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/todos/${req.params.id}`);
        if (!response.data) {
            return res.status(404).json({error: 'Todo not found'});
        }
        await axios.delete(`http://localhost:5000/todos/${req.params.id}`);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// // Delete todo by id route [MONGOOSE]
// router.delete('/delete/:id', async (req, res) => {
//     const deleteTodo = await todo.findByIdAndDelete({ _id : req.params.id })
//     res.json(deleteTodo)
// })

// Update todo by id route
router.put('/put/:id', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/todos/${req.params.id}`);
        if (!response.data) {
            return res.status(404).json({error: 'Todo not found'});
        }
        await axios.put(`http://localhost:5000/todos/${req.params.id}`, {
            author: req.body.author,
            todo: req.body.todo,
            userId: req.body.userId
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// // Update todo by id route [MONGOOSE]
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