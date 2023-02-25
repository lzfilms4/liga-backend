
const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 5000
const UserModel = require('./Users')
const catboost = require("catboost");
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
        user._doc = undefined;

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
model = new catboost.Model();
model.loadModel('modeltest.cbm');
app.get('/', (req,res)=>{
    prediction = model.predict(
        [[36, 1, 599, 1, 3, 3, 1, 42, 3, 1, 1, 2596, 1, 1, 80, 10, 10, 0, 7, 8]],
        [['Age','BusinessTravel','DailyRate','Department','Education','EducationField','Gender','HourlyRate','JobInvolvement','JobLevel','MaritalStatus','MonthlyIncome','NumCompaniesWorked','OverTime','StandardHours','TotalWorkingYears','YearsAtCompany','YearsInCurrentRole','YearsSinceLastPromotion','YearsWithCurrManager']]);
    res.send(prediction);

})
app.listen(PORT, () => {
    console.log('Server OK');
});

//post and get запросы, три поля с тестами настроением и предполагаемый уровень счастья(нейронка)