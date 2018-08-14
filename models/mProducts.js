const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Name field required!']
    },
    stock: {
        type: String
    },
    price: {
        type: Number,
    },
    creator: {
        type: String
    }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;