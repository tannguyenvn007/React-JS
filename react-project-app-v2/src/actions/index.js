import * as Types from './../constants/action-type';

export const FetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}