mongoose = require("mongoose");

const productschema = new mongoose.schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  countinstock: {
    type: number,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

const product = mongoose.model("product", productschema);

module.exports - product;
