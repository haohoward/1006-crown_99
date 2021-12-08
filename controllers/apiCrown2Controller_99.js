const serviceCrown2Controller_99 = require('../services/serviceCrown2Controller_99');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_99.getCategories();
    return res.json(data);
  } catch (e) {
    console.log(e);
  }
};
