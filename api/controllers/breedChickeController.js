import BreedChicken from '../models/breedChickenModel.js';

class BreedChickenController {
    static async getBreedChickens(req, res) {
        try {
            const breeds = await BreedChicken.findAll();
            return res.status(200).json(breeds);
        } catch (error) {
            return res.status(404).send({ message: `${error.message} - Nenhuma raça encontrada.` });
        }
    }

    static async getBreedChickenById(req, res) {
        const { id } = req.params;
        try {
            const breed = await BreedChicken.findOne({ where: { id: Number(id) } });
            return res.status(200).json(breed);
        }
        catch (error) {
            return res.status(404).send({ message: `${error.message} - Id não encontrado.` })
        }
    }

    static async createBreedChicken(req, res) {
        const newBreed = req.body;
        try {
            const newCreatedBreed = await BreedChicken.create(newBreed);
            return res.status(200).json(newCreatedBreed);
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível criar uma raça.` });
        }
    }

    static async updateBreedChicken(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await BreedChicken.update(newInfo, { where: { id: Number(id) } });
            const updatedBreed = await BreedChicken.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedBreed);
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível atualizar uma raça.` });
        }
    }

    static async deleteBreedChicken(req, res) {
        const { id } = req.params;
        try {
            await BreedChicken.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível deletar uma raça.` });
        }
    }
}

export default BreedChickenController;