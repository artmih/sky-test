function addProduct(item) {
    return {
        type: 'ADD_PRODUCT',
        payload: item
    }
}

function removeProduct(item) {
    return {
        type: 'ADD_PRODUCT',
        payload: item
    }
}

function removeAllProducts(item) {
    return {
        type: 'ADD_PRODUCT',
        payload: item
    }
}

export function addItemToBasket(item) {
    return addProduct(item);
}
