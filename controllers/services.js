const Service = require('../models/service')

module.exports = {
    index,
    show, 
    create,
    update,
    delete: deleteOne,
    addComment,
    deleteComment
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

async function addComment (req, res) {
    try {
        await Service.findById(req.params.id, function (err, service){
            service.serviceComments.push({text: req.body.serviceComment, user: req.user._id, creator: req.user.name})
            service.save()
            index(req,res)
        }) 
    } catch (err){
            res.json({err})
    }
}

async function deleteComment(req,res){
    try {
      await Service.findByIdAndUpdate(req.params.id, {
            $pull: {
              serviceComments: {_id: req.params.id}
            }})
        index(req, res)
    } catch (err) {
        res.json({err})
    }
}