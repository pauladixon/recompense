const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: String,
    user: String
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
    comments: [commentSchema],
}, { 
    timestamps: true 
})

module.exports = mongoose.model('Service', serviceSchema)