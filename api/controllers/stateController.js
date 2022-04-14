import State from '../models/stateModel.js';

class StateController {
    static async getStates(req, res) {
        try {
            const states = await State.findAll();
            return res.status(200).json(states);
        } catch (error) {
            return res.status(404).send({ message: `${error.message} - Nenhum estado encontrado.` });
        }
    }

    static async getStateById(req, res) {
        const { id } = req.params;

        try {
            const state = await State.findOne({ where: { id: Number(id) } });
            return res.status(200).json(state);
        }
        catch (error) {
            return res.status(404).send({ message: `${error.message} - Id não encontrado.` })
        }
    }

    static async createState(req, res) {
        const newState = req.body;

        try {
            const newCreatedState = await State.create(newState);
            return res.status(200).json(newCreatedState);
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível criar um estado.` });
        }
    }

    static async updateState(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await State.update(newInfo, { where: { id: Number(id) } });
            const updatedState = await State.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedState);
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível atualizar um estado.` });
        }
    }

    static async deleteState(req, res) {
        const { id } = req.params;

        try {
            await State.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível deletar um estado.` });
        }
    }
}

export default StateController;