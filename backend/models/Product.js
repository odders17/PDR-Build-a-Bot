mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
  //How come when we changed from lowercase countinstock to uppercase countInStock, this worked?
  countInStock: {
    type: Number,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  //
  compatibility: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
