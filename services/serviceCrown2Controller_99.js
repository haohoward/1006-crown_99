const Category_99 = require('../models/Category_99');

exports.getCategories = async (req, res) => {
  try {
    return await Category_99.fetchAll();
  } catch (err) {
    console.log(err);
  }
};
