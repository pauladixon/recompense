const Link = require('../models/link')

module.exports = {
    index,
    show, 
    create,
    update,
    delete: deleteOne
}

async function index(req, res) {
    const links = await Link.find({})
    res.status(200).json(links)
}

async function show(req, res) {
    const link = await Link.findById(req.params.id)
    res.status(200).json(link)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const link = await Link.create(req.body)
    res.status(201).json(link)
}

async function update(req, res) {
    try {
        const updatedLink = await Link.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedLink)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedLink = await Link.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedLink)
}