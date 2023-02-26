const mongoose = require('mongoose')
const TodosSchema = new mongoose.Schema({
    author: String,
    todo: String
})

module.exports = mongoose.model('todo', TodosSchema)