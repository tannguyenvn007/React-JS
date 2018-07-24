import * as Types from './../constants/action-type';

var initialState = [];

const cart = (state = initialState,action) => {
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}
export default cart;