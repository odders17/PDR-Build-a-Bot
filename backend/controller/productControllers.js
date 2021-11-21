const Product = require("../models/Product");

const getAllProducts = async (req, res) => {

    try{
        const products = await Product.find({})

        res.json(products);
    } catch(error) {
        console.error(error)
    }
}