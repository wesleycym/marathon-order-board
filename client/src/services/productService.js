import axios from 'axios';

export const addProduct = async (productData) => {
    const response = await axios.post('/api/products/add-product', productData);
    return response.data;
};