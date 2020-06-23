const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    categories: [],
    cities: [],
    name: '',
    description: '',
    cashapp: '',
    venmo: '',
    paypal: '',
    contactEmail: String,
    creator: String,
}, { timestamps: true})

module.exports = mongoose.model('Link', linkSchema)