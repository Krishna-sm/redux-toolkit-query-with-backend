require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

// middlware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))


// routes
app.use('/api/v1',require('./routes/CrudRoute'));

app.listen(process.env.PORT,()=>{
    console.log(`the server is listen at http://localhost:${process.env.PORT}`)
})