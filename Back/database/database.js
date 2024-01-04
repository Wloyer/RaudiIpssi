const Sequelize = require('sequelize')

const sequelize = new Sequelize('testSequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
})

// tester la connexion
sequelize.authenticate().then(()=>{
    console.log('authentification réussit')
}).catch((err)=>{
    console.log(err);
})

module.exports = sequelize