var initialState = [
    {
        id: 1,
        name: 'Nha dam',
        price: 500000,
        status: true,
        image: "image/product/product/nha-dam.jpg"
    },
    {
        id: 2,
        name: 'Chuoi ngu',
        price: 500000,
        status: true,
        image: "image/product/product/chuoi-ngu.jpg"
    },
    {
        id: 3,
        name: 'Khoai lang',
        price: 500000,
        status: true,
        image: "image/product/product/khoai-lang-nhat-tim.png"
    },
    {
        id: 4,
        name: 'Bo',
        price: 500000,
        status: true,
        image: "image/product/product/bo-sap-daklak.jpg"
    },
];

const products = (state= initialState, action ) => {
    switch(action.type){
        default :return [...state];
    }
}

export default products;