import mongoose from "mongoose";

const mailSchema = new mongoose.Schema({
    mails: {
        type: Array,
        "default": [],
        required: true
    },
    mailSubject: {
        type: String,
        required: true
    },
    mailContent: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Mail = mongoose.model("Mail", mailSchema)

export default Mail