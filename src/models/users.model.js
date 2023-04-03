const { DataTypes } = require('sequelize')
const db = require('../utils/db')
const bcrypt = require('bcrypt')



const User = db.define('users',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        
    },
    email:{
        unique:true,
        validate:{
            isEmail:true
        },
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    avatar:{
        type:DataTypes.STRING
    }

});

module.exports = User