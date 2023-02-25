
const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 5000
const UserModel = require('./Users')
const catboost = require("catboost");
var fs = require("fs");
mongoose
    .connect('mongodb+srv://TIFTEL:5TgM4aVoo@cluster0.c06a4qf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        console.log('ok')
    })
    .catch(err => {
        console.log(err)
    })
const app = express()
app.get('/listUsers', function (req, res) {
    fs.readFile( UserModel + "/" + "Users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})
app.use(express.json())
app.delete('/deleteUser', function (req, res) {


    fs.readFile( UserModel + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["UserModel"];

        console.log( data );
        res.end( JSON.stringify(data));
    });
}),
    app.get('/:id', function (req, res) {
        // First read existing users.
        fs.readFile( UserModel + "/" + "users.json", 'utf8', function (err, data) {
            let users = JSON.parse( data );
            let user = users["user" + req.params.id]
            console.log( user );
            res.end( JSON.stringify(user));
        });
    }),
app.post('/auth/123', async (req, res)=>{
    try{

        const user = await UserModel.findOne({ fullName: req.body.fullName})

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