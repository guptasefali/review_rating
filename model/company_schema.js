const mongoose = require("mongoose")
const companyschema = new mongoose.Schema({
    companyName: {
        type: String,
        require: true,
    },
    City: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },

    founded: {
        type: String,
        require: true,
    },
    userNameID: {
        type: mongoose.Schema.Type.ObjectID,
        ref: "userName",
        require: true
    },
    company_logo: {
        type: String,
    }

})
companyschema.set('timestamps', true)
module.exports = mongoose.model('company detail', companySchema)