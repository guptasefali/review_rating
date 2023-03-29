const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    // //profilepic: {
    // type:String,
    // require:true,
    // },
    isActive: {
        type: Boolean,
        default:true
    }
})
module.exports = mongoose.model('userdetail', userSchema)