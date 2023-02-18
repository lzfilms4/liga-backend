
const mongoose = require('mongoose');
const express = require('express');
const Router = require('./Router')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use("/Router", Router)
const start = async () =>{
    try {
        await mongoose.connect('mongodb+srv://tysachnyk1111:5TgM4aVoo@cluster0.wtrbjof.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, ()=> console.log('server started on port ${PORT}'))
    }catch(e){
        console.log(e)
    }
}

start()

//app.get('/', async (req,res)=>{
    //const  = await postModel.find({})
        //res.send(POSTS);
//})
