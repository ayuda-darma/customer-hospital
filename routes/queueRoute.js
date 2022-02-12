const queueController = require('../controllers/queueController');
const router = require('express').Router();

router.post('/', queueController.create);  
router.delete('/', queueController.deleteAll);

module.exports = router;