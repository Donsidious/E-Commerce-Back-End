// Purpose: To create the Category model for the E-Commerce-Back-End app
const { Model, DataTypes } = require("sequelize");

// Import the database connection from config.js
const sequelize = require("../config/connection.js");

// Create the Category model
class Category extends Model {}

// Define the columns in the Category table
Category.init(
  {
    // Define an id column
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
    modelName: "category",
  }
);

// Export the Category model
module.exports = Category;
