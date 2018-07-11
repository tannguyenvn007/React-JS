import React, { Component } from 'react'


import Banner from './../home/banner';
import BestSeller from './../home/best-seller';
import FeaturedProducts from './../home/featured-products';
import MenuLeftHome from './../home/menu-left-home';
class Home extends Component {
    render(){
        return(
            <div>
                <MenuLeftHome/>
                <Banner/>
                <BestSeller/>
                <FeaturedProducts/>
            </div>
        )
    }
}
export default Home;