const Link = require('../models/link')

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


// function addComment(req, res) {
//     Link.findById(req.params.id).then(function(link) {
//       console.log('push')
//       link.linkComments.push(req.body);
//       console.log('after push')
//       link.save(function(err, link) {
//         console.log(err);
//         res.status(200).json(link);
//       })
//     })
//   }

async function addComment (req, res) {
    try {
        await Link.findById(req.params.id, function (err, link){
            link.linkComments.push({text: req.body.linkComment, user: req.user._id, creator: req.user.name})
            link.save()
            index(req,res)
        }) 
    } catch (err){
            res.json({err})
    }
}

async function deleteComment(req,res){
    try {
      await Link.findByIdAndUpdate(req.body.link_id, {
            $pull: {
              linkComments: {_id: req.params.id}
            }})
        index(req, res)
    } catch (err) {
        res.json({err})
    }
}
