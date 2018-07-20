import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from '../../components/admin/product_list';
import ProductItem from '../../components/admin/product_item';
import ProductAction from './productAction'

import callApi from './../../apiCaller';
import {Link} from 'react-router-dom';
import findIndex from 'lodash'
class Manage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }
    componentDidMount(){
        callApi("http://www.mockapi.io/api/mocks/5b42e42263839a00144c0187/resources/5b42e44163839a00144c0189/data?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YjIwOTU0ZWNhNzYyMDAwMTQ3YjI1YzAiLCJpYXQiOjE1MzE3MzMyMTc5OTYsImV4cCI6MTUzNDMyNTIxNzk5Nn0.NNByU7jTab7xv03bUztcEpzgoHjFt5dZIBCG6_CsSzI",'GET',null).then(res => {
            this.setState({
                products: res.data
            })
        })
    }
    onDelete = (id,category) => {
        var {products} = this.state;
        callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products/${id}`,'DELETE',null).then(res => {
            if(res.status === 200) {
                var index = findIndex(products,id);
                console.log('index',index);
                if (index !== -1 ){
                    products.splice(index,1);
                    this.setState({
                        products: products
                    })
                }
            }
        })

    }
    render(){
        
        var {products}=this.state;

        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
                        <Link to="/add" className="btn btn-info mb-10">Add product</Link>
                        
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
        if( products.length > 0){ 
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}/>
                
            })
        }
        console.log("message", result)
        return result;
      
    
    }
    
}
export default Manage;