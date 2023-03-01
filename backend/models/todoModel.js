const TodoSchema = ({
    author: String,
    todo: String
});

module.exports = TodoSchema;

// Is alleen voor mongodb schema maken. gebruik maar als reference [MONGOOSE]

// const mongoose = require('mongoose')
// const TodosSchema = new mongoose.Schema({
//     author: String,
//     todo: String
// })

// module.exports = mongoose.model('todo', TodosSchema)
