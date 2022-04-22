const database = require('../models');

class OvosControler {
    static async getAllEggs(req, res) {
        try {
            const eggs = await database.Ovos.findAll();
            return res.status(200).json(eggs);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getEgg(req, res) {
        const { id } = req.params;
        try {
            const egg = await database.Ovos.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(egg);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createEgg(req, res) {
        const newEgg = req.body;
        try {
            const createdEgg = await database.Ovos.create(newEgg);
            return res.status(200).json(createdEgg);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateEgg(req, res) {
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await database.Ovos.update(newInfo, { where: { id: Number(id) } });
            const updatedEgg = await database.Ovos.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedEgg);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteEgg(req, res) {
        const { id } = req.params;
        try {
            await database.Ovos.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `Ovo ${id} deletado` });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = OvosControler;