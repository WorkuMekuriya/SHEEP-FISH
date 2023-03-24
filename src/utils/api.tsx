const API_BASE_URL = 'https://dummyjson.com';

const getProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    return data;
};

const addProduct = async (product) => {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
};

const updateProduct = async (product) => {
    const response = await fetch(`${API_BASE_URL}/products/${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
};

const deleteProduct = async (productId) => {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
};

export { getProducts, addProduct, updateProduct, deleteProduct }
