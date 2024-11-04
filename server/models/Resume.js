const {
    Schema,
    model
} = require("mongoose");

const ResumeSchema = new Schema({
    
    pdf:{
        type:String,
        required:true
    }

}, { versionKey: false, timestamps: true });

const Resume = model("Resume", ResumeSchema)

module.exports = Resume