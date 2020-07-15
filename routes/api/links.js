const express = require('express')
const router = express.Router()
const linksCtrl = require('../../controllers/links')

router.get('/', linksCtrl.index)
router.get('/:id', linksCtrl.show)

router.use(require('../../config/auth'))

router.post('/', checkAuth, linksCtrl.create)
router.put('/:id', checkAuth, linksCtrl.update)
router.delete('/:id', checkAuth, linksCtrl.delete)
router.post('/:id/comment', checkAuth, linksCtrl.addComment)
router.delete('/delete/:id', checkAuth, linksCtrl.deleteComment)

function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router