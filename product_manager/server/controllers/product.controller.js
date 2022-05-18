//import dependancies
const Product = require("../models/product.model")

module.exports.test = (req, res) => {
    res.json("Hello World")
}
//CRUD OPERATIONS

//CREATE
module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

//READ ALL
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

//READ ONE
module.exports.oneProduct = (req, res) => {
    console.log("triggered find 1")
    Product.findOne({_id: req.params.product_id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err));
}