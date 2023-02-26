
const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 5000
const UserModel = require('./Users')
const catboost = require("catboost");
const fs = require("fs");
const bodyParser = require('body-parser');

mongoose
    .connect('mongodb+srv://TIFTEL:5TgM4aVoo@cluster0.c06a4qf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        console.log('ok')
    })
    .catch(err => {
        console.log(err)
    })

const app = express()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.json())


app.delete('/posts/:id', (req, res) => {
    UserModel.remove({
        _id: req.params.id
    }).then(post => {
        if(post) {
            res.json({ status: "deleted"});
        } else {
            res.json({ status: "error"});
        }
    })
})

    app.get('/:id', function (req, res) {
        // First read existing users.
        fs.readFile( UserModel + "/" + "users.json", 'utf8', function (err, data) {
            let users = JSON.parse( data );
            let user = users["user" + req.params.id]
            console.log( user );
            res.end( JSON.stringify(user));
        });
    }),

app.post('/auth/123', async (req, res) => {
        try {
            const data = req.body;

            console.log(data);
            const doc = new UserModel({
                fullName: req.body.fullName,
                Happiness: req.body.Happiness
            });

            const user = await doc.save();

        }catch (err) {

        }
    })

model = new catboost.Model();
model.loadModel('modeltest.cbm');
app.get('/', (req,res)=>{
    prediction = model.predict(
        [[36, 2, 599, 1, 3, 3, 1, 42, 3, 1, 1, 25960, 1, 1, 80, 10, 10, 0, 7, 8]],
        [['Age','BusinessTravel','DailyRate','Department','Education','EducationField','Gender','HourlyRate','JobInvolvement','JobLevel','MaritalStatus','MonthlyIncome','NumCompaniesWorked','OverTime','StandardHours','TotalWorkingYears','YearsAtCompany','YearsInCurrentRole','YearsSinceLastPromotion','YearsWithCurrManager']]);
    res.send(prediction);
})

app.listen(PORT, () => {
    console.log('Server OK');
});

//post and get запросы, три поля с тестами настроением и предполагаемый уровень счастья(нейронка)