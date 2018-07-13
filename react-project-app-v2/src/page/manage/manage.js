import React, {Component} from 'react';
import ProductList from '../../components/admin/product_list';
import ProductItem from '../../components/admin/product_item';

import axios from 'axios';
 

class Manage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }
    componentDidMount(){
        console.log('asd')
        axios({
            method: 'GET',
            url: "https://www.mockapi.io/api/mocks/5b42e42263839a00144c0187/resources/5b42e44163839a00144c0189/data?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YjIwOTU0ZWNhNzYyMDAwMTQ3YjI1YzAiLCJpYXQiOjE1MzE0NTQxNjQyNjYsImV4cCI6MTUzNDA0NjE2NDI2Nn0.qH6Y0XxXGFlJA_3FpnwbXC9E1COSV25AVHurmWpQ4Xw",
            data: null
        }).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        }).catch( err => {
            console.log(err);
        });
    }
    render(){
        
        var {products}=this.state;
        console.log('a1sd1asssss',products);
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
                        <button type="button" className="btn btn-info mb-10">Add product</button>
                        <ProductList>
                            {this.showProduct(products)}
                        </ProductList>
                            
                        
                    </div>
                </div>
                
            </div>
        )
    }
    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} />
                
            })
        }
        console.log('a1sd1a',result);
        return result;
      
    
    }
    
}
export default Manage;