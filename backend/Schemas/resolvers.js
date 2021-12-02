const { Product } = require("../models");

const resolvers = {
  Query: {
    Product: async () => {
      return Product.find({});
    },
  },
};

module.exports = resolvers;
