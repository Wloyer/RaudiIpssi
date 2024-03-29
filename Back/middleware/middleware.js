const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('../database/database');

// Middleware pour vérifier si l'utilisateur est connecté
exports.isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Accès refusé. Pas de token fourni." });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // Ajoute les informations décodées à la requête
        next();
    } catch (err) {
        res.status(401).json({ message: "Token invalide" });
    }
};
// Middleware pour vérifier le rôle de l'utilisateur
exports.hasRole = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.role;

        if (roles.includes(userRole)) {
            next();
        } else {
            res.status(403).json({ message: "Accès non autorisé pour ce rôle" });
        }
    };
};


