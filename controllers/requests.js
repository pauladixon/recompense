const Request= require('../models/request')

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
    const requests = await Request.find({})
    res.status(200).json(requests)
}

async function show(req, res) {
    const request = await Request.findById(req.params.id)
    res.status(200).json(request)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const request = await Request.create(req.body)
    res.status(201).json(request)
}

async function update(req, res) {
    try {
        const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedRequest)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedRequest = await Request.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedRequest)
}

async function addComment (req, res) {
    try {
        request.findById(req.params.id, function (err, request){
            request.requestComments.push({text: req.body.requestComment, user: req.user._id, creator: req.user.name})
            request.save()
            index(req,res)
        }) 
    } catch (err){
            res.json({err})
    }
}

async function deleteComment(req,res){
    try {
      await Request.findByIdAndUpdate(req.params.id, {
            $pull: {
              requestComments: {_id: req.params.id}
            }})
        index(req, res)
    } catch (err) {
        res.json({err})
    }
}