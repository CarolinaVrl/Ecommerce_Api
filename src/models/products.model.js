const { DataTypes } = require("sequelize");
const db = require("../utils/db");





const Product = db.define('products',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        unique:true

    },
    description:{
        type:DataTypes.TEXT
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    avaliableQty:{
        type:DataTypes.INTEGER,
        allowNull:false
        
    },
    status:{
        type:DataTypes.BOOLEAN
    },
    userId:{
        type:DataTypes.INTEGER
    },
    productImage:{
        type:DataTypes.STRING
    }

})

module.exports = Product