const {
    Schema,
    model
} = require("mongoose");

const MessageSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    phone: {
        type: String,
        required: true,

    },
    message:{
        type:String,
        required:true
    }

}, { versionKey: false, timestamps: true });

const Message = model("Message", MessageSchema)

module.exports = Message