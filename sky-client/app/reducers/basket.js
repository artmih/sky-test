const initialState = {
    items: []
};

export default function basketState(state = initialState, action) {
    
    switch(action.type) {
        case 'ADD_PRODUCT':
            return Object.assign({}, state, {
                items: [
                    ...(state.items.filter(item => (item.id !== action.payload.id))), 
                    action.payload.id
                ]
            });
        case 'REMOVE_PRODUCT':
            return Object.assign({}, state, {
                items:[
                    ...(state.items.filter(item => (item !== action.payload.id)))
                ]
            });
        case 'REMOVE_ALL_PRODUCTS':
            return Object.assign({}, state, { items: [] });
        default:
            return state;
    }
}