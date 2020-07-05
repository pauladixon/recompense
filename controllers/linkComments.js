const Link = require('../models/link')

module.exports = {
	create
};

async function create(req, res) {
    const linkComment = await (await Link.findByIdAndUpdate(req.body.id, {$push: {linkComments: req.body}}));
    // post.comments.push(req.body);
	res.status(201).json(linkComment);
}