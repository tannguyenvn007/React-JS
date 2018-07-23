import {combineReducers} from 'redux';
import products from './product_red';
import itemEditing from './product_item';
const appReducers = combineReducers ({
    products,
    itemEditing
});
export default appReducers;