import React, { Component } from 'react';


class ProductItem extends Component {
    render() {
        var {index, product} = this.props;
        if (!product) return null; 
        console.log("adsasd6565665",product)
        return (

            
                <tr>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td><img src={product.image} width="100px" height="100px" /></td>
                    <td>50000</td>
                    <td>

                        <span className="label label-warning">Con hang</span>

                    </td>
                    <td>Ngon</td>
                    <td>

                        <button type="button" class="btn btn-danger mr-10">Edit</button>
                        <button type="button" class="btn btn-warning">Delete</button>

                    </td>
                </tr>
            
        )
    }
}
export default ProductItem;