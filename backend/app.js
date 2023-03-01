// import { createRequire } from 'module';

const express = require('express');
const cors = require('cors');
// const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

// Handle CORS and middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    methods: ['GET,HEAD,OPTIONS,POST,PUT,DELETE'],
}));

app.use(bodyParser.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Origin", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.header("Access-Control-Allow-Origin", "Auth-token, Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

// Database stuff [MONGOOSE]
// =================
// const uri = "mongodb+srv://sardar20:Admin25!@doodoocluster.4lxagmy.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("MongoDB Connected")
// })
// .catch(err => console.log(err))

//routes
app.get('/', (req, res) => {
    res.send('hoi home pagina');
});

const TodosRoute = require('./routes/todos');
app.use('/todos', TodosRoute); // FIX DIT <================================

//start server
app.listen(8080, () => {
    console.log("you're listening on port 8080, the radiostation for you");
});