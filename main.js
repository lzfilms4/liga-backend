
const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 5000
const UserModel = require('./Users')
mongoose
    .connect('mongodb+srv://TIFTEL:5TgM4aVoo@cluster0.c06a4qf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        console.log('ok')
    })
    .catch(err => {
        console.log(err)
    })
const app = express()
app.use(express.json())
app.post('/auth/123', async (req, res)=>{
    try{
        const user = await UserModel.findOne({ fullName: req.body.fullName})

        if(!user){
            return res.status(400).json({
                message:'Пользователь не найден'
            });
        }
        const {...userdata}=user._doc;
        res.json({
            ...userdata,
        });
    } catch (err){

    }
})
app.get('/auth/12345', (req,res)=>{
    res.send('asd');
})
app.listen(PORT, () => {
    console.log('Server OK');
});

//post and get запросы, три поля с тестами настроением и предполагаемый уровень счастья(нейронка)