const sequelize = require("sequelize")
const connection= require("../database/databases")
const users = connection.define("users", {
  name:{
    type: sequelize.TEXT,
    allowNull: false
  },
  email:{
    type: sequelize.TEXT,
    allowNull: false
  },
  password:{
    type: sequelize.TEXT,
    allowNull: false
  }
  
})
users.sync({force: false})
users.create({
  name:"Gustav",
  email:"gustavodasilvama10@gmail.com",
  password:"123456"
})
module.exports = users