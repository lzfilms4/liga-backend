const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    fullName :{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    BusinessTravel:{
        type: Number,
        required: true,
    },
    DailyRate:{
        type: Number,
        required: true,
    },
    Department:{
        type: Number,
        required: true,
    },
    Education:{
        type: Number,
        required: true,
    },
    EducationField:{
        type: Number,
        required: true,
    },
    Gender:{
        type: Number,
        required: true,
    },
    HourlyRate:{
        type: Number,
        required: true,
    },
    JobInvolvement:{
        type: Number,
        required: true,
    },
    JobLevel:{
        type: Number,
        required: true,
    },
    MaritalStatus:{
        type: Number,
        required: true,
    },
    MonthlyIncome:{
        type: Number,
        required: true,
    },
    NumCompaniesWorked:{
        type: Number,
        required: true,
    },
    OverTime:{
        type: Number,
        required: true,
    },
    StandardHours:{
        type: Number,
        required: true,
    },
    TotalWorkingYears:{
        type: Number,
        required: true,
    },
    YearsAtCompany:{
        type: Number,
        required: true,
    },
    YearsInCurrentRole:{
        type: Number,
        required: true,
    },
    YearsSinceLastPromotion:{
        type: Number,
        required: true,
    },
    YearsWithCurrManager:{
        type: Number,
        required: true,
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('User', UserSchema);