const {Sequelize} = require('sequelize')
require('dotenv').config()

const db = new Sequelize({
    database:process.env.DB_NAME,
    host:'localhost',
    password:process.env.DB_PASSWORD,
    username:process.env.DB_USERNAME,
    port:5432,
    logging:false

})

module.exports =db