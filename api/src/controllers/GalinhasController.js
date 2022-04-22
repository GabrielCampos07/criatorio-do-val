const database = require('../models');

class GalinhasControler {
    static async getAllChickens(req, res) {
        try {
            const chickens = await database.Galinhas.findAll();
            return res.status(200).json(chickens);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async getChicken(req, res) {
        const { id } = req.params;
        try {
            const chicken = await database.Galinhas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(chicken);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createChicken(req, res) {
        const newChicken = req.body;
        try {
            const createdChicken = await database.Galinhas.create(newChicken);
            return res.status(200).json(createdChicken);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateChicken(req, res) {
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await database.Galinhas.update(newInfo, { where: { id: Number(id) } });
            const updatedChicken = await database.Galinhas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedChicken);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteChicken(req, res) {
        const { id } = req.params;
        try {
            await database.Galinhas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `Galinha ${id} deletada` });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = GalinhasControler;