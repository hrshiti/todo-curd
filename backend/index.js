require('dotenv').config();
const express = require("express")
const cors = require("cors");
const connectDB = require('./db/db');
const router = require('./routers/todo-router');
const app = express()


app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use("/api/todos",router)

const corsOptions = {
    origin: 'http://http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };



const PORT =  5000
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
console.log('Connected to the database');
})