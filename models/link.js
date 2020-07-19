const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LinkCommentSchema = new Schema({
    text: String,
    user: String,
    creator: String,
}, {
    timestamps: true
})

const LinkSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: '',
    cities: [],
    pronouns: '',
    description: '',
    cashapp: '',
    venmo: '',
    paypal: '',
    contactEmail: String,
    creator: String,
    linkComments: [LinkCommentSchema],
}, { timestamps: true})

module.exports = mongoose.model('Link', LinkSchema)