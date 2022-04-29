const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goodsSchema = new Schema({
    header: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true
    }
})
const Goods = mongoose.model('Goods', goodsSchema);

module.exports = Goods;