const initialState = {
    items: []
};

export default function basketState(state = initialState, action) {
    
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [ ...state, action.payload ];

        default:
            return state;
    }
}