import React, { Component } from "react";
import Slide from "./../components/slide"
import ProductNew from "../components/product_new";
import { connect } from 'react-redux';
import axios from 'axios';

import {FetchProducts} from './../actions/index'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: "https://www.mockapi.io/api/mocks/5b42e42263839a00144c0187/resources/5b42e44163839a00144c0189/data?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YjIwOTU0ZWNhNzYyMDAwMTQ3YjI1YzAiLCJpYXQiOjE1MzE0NTQxNjQyNjYsImV4cCI6MTUzNDA0NjE2NDI2Nn0.qH6Y0XxXGFlJA_3FpnwbXC9E1COSV25AVHurmWpQ4Xw",
            data: null
        }).then(res => {
            this.props.fetchAllProducts(res.data);
        }).catch( err => {
            console.log(err);
        });
    }
    render() {
        var { products } = this.props;
        
        
        return (
            <div className="rev-slider">
                <Slide />
                <div className="container">
                    <div id="content" className="space-top-none">
                        <div className="main-content">
                            <div className="space60">&nbsp;</div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="beta-products-list">
                                        <h4>New Products</h4>
                                        <div className="beta-products-details">
                                            <p className="pull-left">438 styles found</p>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="row">
                                            {this.showProduct(products)}
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductNew key={index} product={product} index={index} />
                
            })
        }
        return result;
    }

}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const  mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllProducts: (products) => {
            dispatch(FetchProducts(products));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);