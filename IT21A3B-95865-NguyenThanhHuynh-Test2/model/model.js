const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    subjectId: {
        type: String,
        required: true
    },
    name:{
        type:String,
    },
    describe: {
        type: String,
    },
})

let Subject = mongoose.model("Subject",subjectSchema);

module.exports = Subject;