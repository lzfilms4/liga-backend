
const mongoose = require('mongoose');
const express = require('express');
const Router = require('./Router')
catboost = require('catboost');
const PORT = process.env.PORT || 5000
mongoose.set('strictQuery', false);

const app = express()
app.use(express.json())



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