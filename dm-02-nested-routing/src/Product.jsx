import React from 'react';

const Product = ({match, data}) => {
    var product = data.find((p) => p.id === Number(match.params.productId));
    var productData;
    console.log(product);
    if(product){
        productData = <div>
                        <h3> {product.name} </h3>
                        <p>{product.description}</p>
                        <hr/>
                        <h4>{product.status}</h4>
                    </div>
    }else{
        productData = <h2>Sorry. Product data dosent exist</h2>
    }
    return (
        <div>
          <div>
             {productData}
          </div>
        </div>
      )   
};
export default Product;