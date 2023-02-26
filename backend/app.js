// const uri = mongodb+srv://sardar20:<password>@doodoocluster.4lxagmy.mongodb.net/?retryWrites=true&w=majority;
// import { createRequire } from 'module';

const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// create out express app
const app = express()


// Handle CORS and middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET,HEAD,OPTIONS,POST,PUT,DELETE'],
  }));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Origin", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.header("Access-Control-Allow-Origin", "Auth-token, Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })



//database stuff
const uri = "mongodb+srv://sardar20:Admin25!@doodoocluster.4lxagmy.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))

app.use(bodyParser.json())

//routes
app.get('/', (req, res) => {
    res.send("hoi home pagina")
})

const TodosRoute = require('./routes/todos');
app.use('/todos', TodosRoute)

//start server
app.listen(8080, () => {
    console.log("you're listening on port 8080, the radiostation for you")
})