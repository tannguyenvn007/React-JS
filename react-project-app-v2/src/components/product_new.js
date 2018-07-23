import React, { Component } from "react";
import {Link} from 'react-router-dom';
const formatCurrency = require('format-currency')
class ProductNew extends Component {
    render() {
        let opts = { format: '%v %c', code: 'VND' }
        var { product } = this.props;
        console.log("products",product);
        return (

            <div>
                <div className="col-sm-3">
                    <div className="single-item">
                        <div className="single-item-header">
                            <Link to={`${product.CategoryId}/${product.id}/details`}>
                                <img  src={`image/product/product/${product.image.substr(12)}`} alt="" />
                            </Link>
                        </div>
                        <div className="single-item-body">
                            <p className="single-item-title">{product.name}</p>
                            <p className="single-item-price">
                                <span>{formatCurrency(product.price, opts)}</span>
                            </p>
                        </div>
                        <div className="single-item-caption">
                            <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                            <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="space50">&nbsp;</div>
                </div>
                
            </div>
        )
    }
}
export default ProductNew;