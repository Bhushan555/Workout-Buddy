require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const routes=require('./routes/dataRoutes');

// app created
const app=express()

app.use(express.json());

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//routes
app.use('/api/workouts',routes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT,()=>{
            console.log("connected to & server is listening on port 4000");
        })
    })
    .catch((err)=>{
        console.log(err);
    })
