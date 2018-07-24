import {combineReducers} from 'redux';
import products from './product_red';
import itemEditing from './product_item';
import searchProduct from './search_pro';
import cart from './cart';
const appReducers = combineReducers ({
    products,
    itemEditing,
    searchProduct,
    cart
});
export default appReducers;