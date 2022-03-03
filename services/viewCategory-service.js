const Category = require("../models/category-model");

const viewCategory = async (req, res) => {
  await Category.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  viewCategory,
};
