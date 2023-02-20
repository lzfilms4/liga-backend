
const mongoose = require('mongoose');
const express = require('express');
const Router = require('./Router')
catboost = require('catboost');
const PORT = process.env.PORT || 5000
mongoose.set('strictQuery', false);
// mongoose
//     .connect('mongodb+srv://TIFTEL:5TgM4aVoo@cluster0.c06a4qf.mongodb.net/?retryWrites=true&w=majority')
//     .then(() => {
//         console.log('ok')
//     })
//     .catch(err => {
//         console.log(err)
//     })
const app = express()
app.use(express.json())

model = new catboost.Model();
model.loadModel('model.cbm');

app.get('/', (req,res)=>{
    prediction = model.predict(
        [[36., 1., 599., 1., 24., 3., 3., 4., 1., 42., 3., 1., 4., 1., 2596., 5099., 1., 1., 13., 3., 2., 80., 10., 3., 10., 0., 7., 8.]],
        [['Age','BusinessTravel','DailyRate','Department','DistanceFromHome','Education','EducationField','EnvironmentSatisfaction','Gender','HourlyRate','JobInvolvement','JobLevel','JobSatisfaction','MaritalStatus','MonthlyIncome','MonthlyRate','NumCompaniesWorked','OverTime','PercentSalaryHike','PerformanceRating','RelationshipSatisfaction','StandardHours','TotalWorkingYears','WorkLifeBalance','YearsAtCompany','YearsInCurrentRole','YearsSinceLastPromotion','YearsWithCurrManager']]);
    res.send(prediction);

})
app.listen(PORT, () => {
    console.log('Server OK');
  });