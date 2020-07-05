const router = require('express').Router();
const linkCommentsCtrl = require('../../controllers/linkComments');

router.post('/', linkCommentsCtrl.create);

module.exports = router;