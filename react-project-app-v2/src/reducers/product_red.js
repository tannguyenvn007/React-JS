import * as Types from './../constants/action-type'
var initialState = [
    
];

const products = (state= initialState, action ) => {
    switch(action.type){
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
            
        default :return [...state];
    }
}

export default products;