const serviceCrown2Controller_99 = require('../services/serviceCrown2Controller_99');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_99.getCategories();
    console.log(JSON.stringify(results));
    res.render('crown2_99', {
      data: results,
      title: 'crown2_99',
      name: 'EnHao Huang',
      id: 209410799,
    });
  } catch (e) {
    console.log(e);
  }
};
