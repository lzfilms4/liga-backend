const mongoose = require ('mongoose');
const TestsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    questions :{
        type: [String],
        required: true,
    },
    answers :{
        type: [[String]],
        required: true,
    },
    answersValues :{
        type: [[Number]],
        required: true,
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('Tests', TestsSchema);