const User = require('../models/userModel'); 
const bcrypt = require('bcrypt');

const UserController = {

    // Créer un nouvel utilisateur

    async createUser(req, res) {
        try {
            const { firstName, lastName, email, password, role } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                role
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Lire les informations d'un utilisateur
    async getUser(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Mettre à jour un utilisateur
    async updateUser(req, res) {
        try {
            const { firstName, lastName, email, password, role } = req.body;
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }

            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.role = role;
            if (password) {
                user.password = await bcrypt.hash(password, 10);
            }

            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Supprimer un utilisateur
    async deleteUser(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }

            await user.destroy();
            res.status(200).json({ message: 'Utilisateur supprimé' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = UserController;
