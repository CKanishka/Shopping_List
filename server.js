const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const mongoURI='YOUR_LINK_GOES_HERE';

const app=express(); //initializing express

const items=require('./routes/api')   //importing the route file

//applying middleware bodyparser
app.use(bodyParser.json());

//connecting to mongo
mongoose.connect(mongoURI)
    .then(()=>console.log("MongoDB Connected"))
    .catch((err)=>console.log(err));

//using route
app.use('/api',items);

const port =process.env.port || 5000;

app.listen(port,()=>console.log(`Server running on port: ${port}`))

