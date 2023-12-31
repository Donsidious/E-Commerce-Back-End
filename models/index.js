// Initialize Sequelize
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Categories have many Products
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)

// Product.belongsToMany(Tag, { through: ProductTag });

// OR

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Tags belongToMany Products (through ProductTag)

// Tag.belongsToMany(Product, { through: ProductTag });

// OR

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});

// Export
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
