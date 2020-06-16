const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    categories: [],
    city: String,
    name: String,
    description: String,
    exchange: String,
    contactEmail: String,
    creator: String,
}, { timestamps: true})

module.exports = mongoose.model('Link', requestSchema)