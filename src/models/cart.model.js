const { DataTypes } = require("sequelize");
const db = require("../utils/db");




const Cart = db.define('cart',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalPrice:{
        type:DataTypes.FLOAT,
        allowNull:false

    }
    
})

module.exports = Cart