const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');


router.post('/', stuffCtrl.createThing);

router.get('/:id', stuffCtrl.getSingleThing);

router.put('/:id', stuffCtrl.modifyThing);

router.delete('/:id', stuffCtrl.deleteThing);

router.get('/' + '', stuffCtrl.getAllthings);

module.exports = router;
