import React, { Component } from "react";
import * as message from './../constants/message';
class CartItem extends Component {
    
    render() {
        var {item} = this.props;
        
        
        return (
            <tr>
                <th scope="row">
                    <img 
                        src={"image/product/product/"+item.product.image.substr(12)}
                        alt={item.product.name} 
                        className="img-fluid z-depth-0"
                        width="100px"
                        height="100px" 
                        />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={() => this.onUpdateQuantity(item.product,item.quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <label
                            onClick={() => this.onUpdateQuantity(item.product,item.quantity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(item.product.price,item.quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                                    </button>
                </td>
            </tr>
        )
    }
    onUpdateQuantity = (product, quantity) => {
        var {onUpdateProductInCart,onChangeMessage} = this.props;

        if(quantity > 0) {
            
            onUpdateProductInCart(product, quantity);
            onChangeMessage(message.MSG_UPDATE_CART_SUCCESS);
        }
    }
    onDelete = (product) => {
        var {onDeleteProductInCart,onChangeMessage} = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(message.MSG_DELETE_CART_SUCCESS);
    }
    showTotal = (price,quantity) => {
        return price * quantity;
    }
}
export default CartItem;