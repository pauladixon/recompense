const express = require('express')
const router = express.Router()
const servicesCtrl = require('../../controllers/services')

router.get('/', servicesCtrl.index)
router.get('/:id', servicesCtrl.show)

router.use(require('../../config/auth'))

router.post('/', checkAuth, servicesCtrl.create)
router.put('/:id', checkAuth, servicesCtrl.update)
router.delete('/:id', checkAuth, servicesCtrl.delete)

function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router