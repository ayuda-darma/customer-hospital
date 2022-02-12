const customerController = require('../controllers/customerController');
const router = require('express').Router();

router.get('/', customerController.findAll);
router.get('/:id', customerController.findOne);
router.post('/', customerController.create);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);

module.exports = router;