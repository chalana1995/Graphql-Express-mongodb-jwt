const express = require('express');
const dotenv = require('dotenv');
const {connectDB} = require('./db');

const app = express();
dotenv.config();


connectDB();

app.get('/', (req, res)=> {
    res.json({msg: "Hello World"})
});


app.listen(process.env.PORT, ()=> {
    console.log(`Server running on ${process.env.PORT}`)
})