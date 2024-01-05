# RaudiIpssi

npm init
npm i  express cors dotenv sequelize mariadb nodemon bcrypt

Ajouter "start": "npx nodemon server.js"

Si "Unable to connect to the database: ConnectionError [SequelizeConnectionError]: LRU.LRUCache is not a constructor" 
Solution = npm update mariadb sequelize
