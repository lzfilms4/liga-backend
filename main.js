
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const express = require('express');
const PORT = process.env.PORT || 5000
const UserModel = require('./Users')
// const catboost = require("catboost");
const fs = require("fs");
const bodyParser = require('body-parser');
const cors = require('cors');
const uri = "mongodb+srv://lzfilms3:4321qwerr@sovkom-back.bvtv8wl.mongodb.net/?retryWrites=true&w=majority"

// mongodb+srv://TIFTEL:5TgM4aVoo@cluster0.c06a4qf.mongodb.net/blog?retryWrites=true&w=majority
mongoose
    .connect(uri)
    .then(() => {
        console.log('DB ok')
    })
    .catch(err => {
        console.log(err)
    })
const client = new MongoClient(uri);


const app = express()
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
app.use(express.json())
app.use(cors());
app.post('/person/create', async (req, res) => {
    // model = new catboost.Model();
    // model.loadModel('modeltest.cbm');
    // prediction = model.predict(
    //     [[req.body.age, req.body.BusinessTravel, req.body.DailyRate, req.body.Department, req.body.Education, req.body.EducationField, req.body.Gender, req.body.HourlyRate, req.body.JobInvolvement, req.body.JobLevel, req.body.MaritalStatus, req.body.MonthlyIncome, req.body.NumCompaniesWorked, req.body.OverTime, req.body.StandardHours, req.body.TotalWorkingYears, req.body.YearsAtCompany, req.body.YearsInCurrentRole, req.body.YearsSinceLastPromotion, req.body.YearsWithCurrManager]],
    //     [['Age','BusinessTravel','DailyRate','Department','Education','EducationField','Gender','HourlyRate','JobInvolvement','JobLevel','MaritalStatus','MonthlyIncome','NumCompaniesWorked','OverTime','StandardHours','TotalWorkingYears','YearsAtCompany','YearsInCurrentRole','YearsSinceLastPromotion','YearsWithCurrManager']]);
    try {
        const doc = new UserModel({
            fullName: req.body.fullName,
            age: req.body.age,
            BusinessTravel: req.body.BusinessTravel,
            DailyRate: req.body.DailyRate,
            Department: req.body.Department,
            Education: req.body.Education,
            EducationField: req.body.EducationField,
            Gender: req.body.Gender,
            HourlyRate: req.body.HourlyRate,
            JobInvolvement: req.body.JobInvolvement,
            JobLevel: req.body.JobLevel,
            MaritalStatus: req.body.MaritalStatus,
            MonthlyIncome: req.body.MonthlyIncome,
            NumCompaniesWorked: req.body.NumCompaniesWorked,
            OverTime: req.body.OverTime,
            StandardHours: req.body.StandardHours,
            TotalWorkingYears: req.body.TotalWorkingYears,
            YearsAtCompany: req.body.YearsAtCompany,
            YearsInCurrentRole: req.body.YearsInCurrentRole,
            YearsSinceLastPromotion: req.body.YearsSinceLastPromotion,
            YearsWithCurrManager: req.body.YearsWithCurrManager,
            happiness: prediction[0],
            mood: req.body.mood,
        })
        const person = await doc.save()
        res.json(person)
    } catch (err) {
        console.log(err)
    }
})
app.post('/person/addMood', async (req, res) => {
    await UserModel.findOneAndUpdate({
        fullName: req.body.fullName,
      }, {
        $push: { mood: req.body.mood }
      }).then((user) => {
        res.json(user)
      }).catch(err => console.log(err))
})

app.get('/person/find', async (req, res) => {
    await UserModel.find({
        fullName: req.body.fullName,
      }).then((user) => {
        res.json(user)
      }).catch(err => console.log(err))
})
app.get('/person/findall', async (req, res) => {
    await UserModel.find().then((users) => {
        res.json(users)
      }).catch(err => console.log(err))
})


// model = new catboost.Model();
// model.loadModel('modeltest.cbm');
// app.get('/', (req,res)=>{
//     prediction = model.predict(
//         [[36, 2, 599, 1, 3, 3, 1, 42, 3, 1, 1, 25960, 1, 1, 80, 10, 10, 0, 7, 8]],
//         [['Age','BusinessTravel','DailyRate','Department','Education','EducationField','Gender','HourlyRate','JobInvolvement','JobLevel','MaritalStatus','MonthlyIncome','NumCompaniesWorked','OverTime','StandardHours','TotalWorkingYears','YearsAtCompany','YearsInCurrentRole','YearsSinceLastPromotion','YearsWithCurrManager']]);
//     res.send(prediction);
// })

app.listen(PORT, () => {
    console.log('Server OK');
});

