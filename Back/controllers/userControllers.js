const User = require('../models/userModel'); 
const bcrypt = require('bcrypt');
const db = require('../database/database')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
require('dotenv').config();

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
    
    // Lire les informations de tous les utilisateurs
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
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
    },
    
    // Inscription d'un utilisateur
    async register(req, res) {
        jsonParser(req, res, async () => {
            try {
                const { firstName, lastName, email, password, role } = req.body;
                const existingUser = await User.findOne({ where: { email } });
                if (existingUser) {
                    return res.status(409).json({ message: "Email déjà utilisé" });
                }
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await User.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    role
                });
                const token = jwt.sign(
                    { id: newUser.id, email: newUser.email, role: newUser.role },
                    process.env.SECRET_KEY,
                    { expiresIn: '1h' } 
                );
                res.status(201).json({ user: { id: newUser.id, firstName, lastName, email, role }, token });
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    },

    // Connexion d'un utilisateur
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ message: "Email ou mot de passe incorrect" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Email ou mot de passe incorrect" });
            }
            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                process.env.SECRET_KEY, 
                { expiresIn: '1h' } 
            );
            res.status(200).json({ message: "Connexion réussie", token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};



module.exports = UserController;
