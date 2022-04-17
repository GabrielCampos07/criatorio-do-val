import User from '../models/userModel.js';

class UserController {
    static async getUsers(req, res) {
        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(404).send({ message: `${error.message} - Nenhum usuário encontrado.` });
        }
    }

    static async getUserById(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findOne({ where: { id: Number(id) } });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(404).send({ message: `${error.message} - Id não encontrado.` })
        }
    }

    static async createUser(req, res) {
        const newUser = req.body;

        try {
            const newCreatedUser = await User.create(newUser);
            return res.status(200).json(newCreatedUser);
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível criar um usuário.` });
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await User.update(newInfo, { where: { id: Number(id) } });
            const updatedUser = await User.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível atualizar um usuário.` });
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;

        try {
            await User.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).send({ message: `${error.message} - Não foi possível deletar um usuário.` });
        }
    }
}

export default UserController;