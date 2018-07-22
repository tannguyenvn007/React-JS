import * as Types from './../constants/action-type'
import findIndex from 'lodash';
var initialState = [
    
];

const products = (state= initialState, action ) => {
    var index = -1;
    var id = action;    
    switch(action.type){
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state,id);
            state.splice(index,1);
            return [...state];
        default :return [...state];
    }
}

export default products;