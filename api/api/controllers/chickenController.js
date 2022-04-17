import Chicken from '../models/chickenModel.js';

class ChickenController {
    static async getChickens(req, res) {
        try {
            const chickens = await Chicken.findAll();
            return res.status(200).json(chickens);
        } catch (error) {
            return res.status(404).send({ message: `${error.message} - Nenhuma galinha encontrada.` });
        }
    }

    static async getChickenById(req, res) {
        const { id } = req.params;
        try {
            const chicken = await Chicken.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(chicken);
        }
        catch (error) {
            return res.status(404).send({ message: `${error.message} - Id não encontrado.` })
        }
    }

    static async createChicken(req, res) {
        const newChicken = req.body;
        try {
            const newCreatedChicken = await Chicken.create(newChicken);
            return res.status(200).json(newCreatedChicken);
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível criar uma galinha.` });
        }
    }

    static async updateChicken(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await Chicken.update(newInfo, { where: { id: Number(id) } });
            const updatedChicken = await Chicken.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedChicken);
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível atualizar uma galinha.` });
        }
    }

    static async deleteChicken(req, res) {
        const { id } = req.params;
        try {
            await Chicken.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível deletar uma galinha.` });
        }
    }
}

export default ChickenController;