export function addProduct(item) {
    return {
        type: 'ADD_PRODUCT',
        payload: item
    };
}

export function removeProduct(item) {
    return {
        type: 'REMOVE_PRODUCT',
        payload: item
    };
}

export function removeAllProducts() {
    return {
        type: 'REMOVE_ALL_PRODUCTS'
    };
}
