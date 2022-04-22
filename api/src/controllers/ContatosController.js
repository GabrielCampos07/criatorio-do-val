const database = require('../models');

class ContatosControler {
    static async getAllContacts(req, res) {
        try {
            const contacts = await database.Contato.findAll();
            return res.status(200).json(contacts);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async getContact(req, res) {
        const { id } = req.params;
        try {
            const contact = await database.Contato.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(contact);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createContact(req, res) {
        const newContact = req.body;
        try {
            const createdContact = await database.Contato.create(newContact);
            return res.status(200).json(createdContact);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateContact(req, res) {
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await database.Contato.update(newInfo, { where: { id: Number(id) } });
            const updatedContact = await database.Contato.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedContact);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteContact(req, res) {
        const { id } = req.params;
        try {
            await database.Contato.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `Contato ${id} deletado` });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ContatosControler;