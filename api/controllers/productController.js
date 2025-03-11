const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    const { name, size, material, requires_taping } = req.body;

    try {
        const existingProduct = await Product.findOne({ name });

        if (existingProduct) {
            return res.status(400).json({ message: 'Product already exists!' });
        }

        const newProduct = await Product.create({
            name,
            size,
            material,
            requires_taping
        });

        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        res.status(500).json({ error: 'Error adding product' });
    }
};