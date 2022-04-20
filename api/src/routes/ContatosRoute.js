const { Router } = require('express');
const ContatosController = require('../controllers/ContatosController.js');

const router = Router();

router.get('/contatos', ContatosController.getAllContacts);
router.get('/contato/:id', ContatosController.getContact);
router.post('/contatos', ContatosController.createContact);
router.put('/contato/:id', ContatosController.updateContact);
router.delete('/contato/:id', ContatosController.deleteContact);

module.exports = router;