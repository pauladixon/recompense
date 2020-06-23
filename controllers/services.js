const Service = require('../models/service')

module.exports = {
    index,
    show, 
    create,
    update,
    delete: deleteOne
}

async function index(req, res) {
    const services = await Service.find({})
    .sort({createdAt: -1})
    res.status(200).json(services)
}

async function show(req, res) {
    const service = await Service.findById(req.params.id)
    res.status(200).json(service)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const service = await Service.create(req.body)
    res.status(201).json(service)
}

async function update(req, res) {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedService)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedService = await Service.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedService)
}