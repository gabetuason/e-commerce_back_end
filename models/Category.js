// import sequelize package
const { Model, DataTypes } = require('sequelize');

// Import connection to the config connection.js
const sequelize = require('../config/connection.js');

class Category extends Model {}

// Initialize the Category model with its attributes and options
Category.init(
  {
    // define columns
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// export category
module.exports = Category;
