const sequelize= require("sequelize")

const connection = new sequelize ("postgres://lcnbqxeb:pRbN9UxwpXoBrqPL7Yb7jW-DNhHBjaNM@babar.db.elephantsql.com/lcnbqxeb", {
    dialectModule: require('pg')
})

module.exports = connection;