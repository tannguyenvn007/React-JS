import * as Types from './../constants/action-type';

var data = JSON.parse(localStorage.getItem('cart'))
var initialState =  [
    // {
    //     product: {
    //         id: "1",
    //         name: 'Iphone 7 Plus',
    //         image: 'C:\\fakepath\\chuoi-ngu.jpg',
    //         description: 'San pham do apple san xuat',
    //         price: 500,
    //         rating: 4,
    //         inventory: 10
    //     },
    //     quantity: 5
    // },
    // {
    //     product: {
    //         id: "2",
    //         name: 'Iphone 6 Plus',
    //         image: 'C:\\fakepath\\bo-sap-daklak.jpg',
    //         description: 'San pham do apple san xuat',
    //         price: 1000,
    //         rating: 4,
    //         inventory: 10
    //     },
    //     quantity: 3
    // }
];

const cart = (state = initialState,action) => {
    var {product,quantity} = action;
    var index = -1;
    switch(action.type){
        case Types.ADD_TO_CART:
            state.push({
                product,quantity
            })
            return [...state];
        default:
            return state;
    }
}
export default cart;