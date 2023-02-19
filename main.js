
const mongoose = require('mongoose');
const express = require('express');
const Router = require('./Router')
const PORT = process.env.PORT || 5000
mongoose.set('strictQuery', false);
mongoose
    .connect('mongodb+srv://TIFTEL:5TgM4aVoo@cluster0.c06a4qf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('ok')
    })
    .catch(err => {
        console.log(err)
    })
const app = express()
app.use(express.json())

app.get('/', (req,res)=>{
        res.send('asd');
})
app.listen(PORT, () => {
    console.log('Server OK');
  });