const { Router } = require('express');
const GalinhasController = require('../controllers/GalinhasController.js');

const router = Router();

router.get('/galinhas', GalinhasController.getAllChickens);
router.get('/galinha/:id', GalinhasController.getChicken);
router.post('/galinhas', GalinhasController.createChicken);
router.put('/galinha/:id', GalinhasController.updateChicken);
router.delete('/galinha/:id', GalinhasController.deleteChicken);

module.exports = router;