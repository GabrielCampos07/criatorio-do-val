const { Router } = require('express');
const OvosController = require('../controllers/OvosController.js');

const router = Router();

router.get('/ovos', OvosController.getAllEggs);
router.get('/ovo/:id', OvosController.getEgg);
router.post('/ovos', OvosController.createEgg);
router.put('/ovo/:id', OvosController.updateEgg);
router.delete('/ovo/:id', OvosController.deleteEgg);

module.exports = router;