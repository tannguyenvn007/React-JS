import * as Types from './../constants/action-type';
import callApi from './../apiCaller'
export const FetchProductsAPI = () => {
    return (dispatch) => {
        return callApi('https://www.mockapi.io/api/mocks/5b42e42263839a00144c0187/resources/5b42e44163839a00144c0189/data?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YjIwOTU0ZWNhNzYyMDAwMTQ3YjI1YzAiLCJpYXQiOjE1MzE0NTQxNjQyNjYsImV4cCI6MTUzNDA0NjE2NDI2Nn0.qH6Y0XxXGFlJA_3FpnwbXC9E1COSV25AVHurmWpQ4Xw','GET',null).then(res => {
                dispatch(FetchProducts(res.data))
            })
        
    }
}


export const FetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const DeleteProductAPI = (id,category) => {
    return dispatch => {
        return callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products/${id}`,'DELETE',null).then(res => {
            dispatch(DeleteProduct(id))
        })
    }
}
export const DeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}