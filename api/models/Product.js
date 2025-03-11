const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    size: { type: String, required: true },
    material: { type: String, required: true },
    requires_taping: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', ProductSchema);