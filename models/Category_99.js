const db = require('../utils/database');

const Category_99 = class Category_99 {
  constructor(id, name, size, remote_url, local_url, link_url) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }
  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * FROM category_99`);
      return results.rows;
    } catch (e) {
      console.log(e);
    }
  }
};

module.exports = Category_99;
