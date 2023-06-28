const sequelize= require("sequelize")

const connection = new sequelize ("postgresql://GustavoSweb:ODWTzcsl97eh@ep-lively-rain-503674.us-east-2.aws.neon.tech/neondb?sslmode=require", {
    dialectModule: require('pg')
})

module.exports = connection;