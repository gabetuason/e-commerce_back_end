// import models
const Product = require('./Product');

const Category = require('./Category');

const Tag = require('./Tag');

const ProductTag = require('./ProductTag');


// Defining the associations
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // delete products when their associated category is deleted
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // delete products when their associated category is deleted
    onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // Define the join table
  foreignKey: 'product_id',// Set the foreign key to product_id
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // Define the join table
  foreignKey: 'tag_id', // Set the foreign key to tag_id
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
