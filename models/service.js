const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceCommentSchema = new Schema({
    text: String,
    user: String,
    creator: String,
}, {
    timestamps: true
})

const serviceSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    categories: [],
    cities: [],
    name: String,
    description: String,
    exchange: String,
    contactEmail: String,
    creator: String,
    serviceComments: [serviceCommentSchema],
}, { 
    timestamps: true 
})

module.exports = mongoose.model('Service', serviceSchema)