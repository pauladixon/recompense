const Link = require('../models/link')

module.exports = {
    index,
    show, 
    create
}

async function index(req, res) {
    const requests = await Request.find({})
    res.status(200).json(requests)
}

async function show(req, res) {
    const request = await Service.findById(req.params.id)
    res.status(200).json(request)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const request = await Request.create(req.body)
    res.status(201).json(request)
}