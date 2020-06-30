const express = require('express')
const router = express.Router()
const requestsCtrl = require('../../controllers/requests')

router.get('/', requestsCtrl.index)
router.get('/:id', requestsCtrl.show)

router.use(require('../../config/auth'))

router.post('/', checkAuth, requestsCtrl.create)
router.put('/:id', checkAuth, requestsCtrl.update)
router.delete('/:id', checkAuth, requestsCtrl.delete)
router.post('/:id/comment', checkAuth, requestsCtrl.addComment)
router.delete('/delete/:id', checkAuth, requestsCtrl.deleteComment)

function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router