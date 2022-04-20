const bodyParser = require('body-parser');
const galinhas = require('./GalinhasRoute.js');
const contatos = require('./ContatosRoute.js');
const ovos = require('./OvosRoute.js');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(galinhas);
    app.use(contatos);
    app.use(ovos);
}