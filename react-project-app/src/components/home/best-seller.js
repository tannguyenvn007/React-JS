import React, { Component } from 'react';

class BestSeller extends Component {
    render() {
        return (
            <section className="main-container col1-layout home-content-container">
                <div className="container">
                    <div className="std">
                        <div className="best-seller-pro wow bounceInUp animated">
                            <div className="slider-items-products">
                                <div className="new_title center">
                                    <h2>Best Seller</h2>
                                </div>
                                <div id="best-seller-slider" className="product-flexslider hidden-buttons">
                                    <div className="slider-items slider-width-col4">

                                        {/* <!-- Item --> */}
                                        <div className="item">
                                            <div className="col-item">
                                                <div className="sale-label sale-top-right">Sale</div>
                                                <div className="product-image-area">
                                                    <a className="product-image" title="Sample Product" href="product_detail.html">
                                                        <img
                                                            src="products-images/product1.jpg"
                                                            className="img-responsive"
                                                            alt="" />
                                                    </a>
                                                    <div className="hover_fly">
                                                        <a className="exclusive ajax_add_to_cart_button" href="" title="Add to cart">
                                                            <div>
                                                                <i className="icon-shopping-cart"></i>
                                                                <span>Add to cart</span>
                                                            </div>
                                                        </a>
                                                        <a className="quick-view" href="quick_view.html">
                                                            <div>
                                                                <i className="icon-eye-open"></i>
                                                                <span>Quick view</span>
                                                            </div>
                                                        </a>
                                                        <a className="add_to_compare" href="compare.html">
                                                            <div>
                                                                <i className="icon-random"></i>
                                                                <span>Add to compare</span>
                                                            </div>
                                                        </a>
                                                        <a className="addToWishlist wishlistProd_5" href="wishlist.html" >
                                                            <div>
                                                                <i className="icon-heart"></i>
                                                                <span>Add to Wishlist</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="info">
                                                    <div className="info-inner">
                                                        <div className="item-title">
                                                            <a title=" Sample Product" href="product_detail.html"> Sample Product </a>
                                                        </div>
                                                        {/* <!--item-title--> */}
                                                        <div className="item-content">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div className="rating"></div>
                                                                </div>
                                                            </div>
                                                            <div className="price-box">
                                                                <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                                                <p className="old-price">
                                                                    <span className="price-sep">-</span>
                                                                    <span className="price"> $50.00 </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/* <!--item-content-->  */}
                                                    </div>
                                                    {/* <!--info-inner--> */}

                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Item --> 
                
                <!-- Item --> */}
                                        <div className="item">
                                            <div className="col-item">
                                                <div className="new-label new-top-right">New</div>
                                                <div className="product-image-area">
                                                    <a className="product-image" title="Sample Product" href="product_detail.html">
                                                        <img src="products-images/product1.jpg" className="img-responsive" alt="a" />
                                                    </a>
                                                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="" title="Add to cart">
                                                        <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                                                    </a> <a className="quick-view" href="quick_view.html">
                                                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                                                        </a> <a className="add_to_compare" href="compare.html">
                                                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                                                        </a> <a className="addToWishlist wishlistProd_5" href="wishlist.html" >
                                                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="info">
                                                    <div className="info-inner">
                                                        <div className="item-title"> <a title=" Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                                        {/* <!--item-title--> */}
                                                        <div className="item-content">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div className="rating"></div>
                                                                </div>
                                                            </div>
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$422.00</span> </span> </div>
                                                        </div>
                                                        {/* <!--item-content-->  */}
                                                    </div>
                                                    {/* <!--info-inner--> */}

                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Item --> 
                
                <!-- Item --> */}
                                        <div className="item">
                                            <div className="col-item">
                                                <div className="sale-label sale-top-right">Sale</div>
                                                <div className="product-image-area">
                                                    <a className="product-image" title="Sample Product" href="product_detail.html">
                                                        <img alt="a" className="img-responsive" src="products-images/product1.jpg" />
                                                    </a>
                                                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="" title="Add to cart">
                                                        <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                                                    </a> <a className="quick-view" href="quick_view.html">
                                                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                                                        </a> <a className="add_to_compare" href="compare.html">
                                                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                                                        </a> <a className="addToWishlist wishlistProd_5" href="wishlist.html" >
                                                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                                                        </a> </div>
                                                </div>
                                                <div className="info">
                                                    <div className="info-inner">
                                                        <div className="item-title">
                                                            <a title=" Sample Product" href="product_detail.html"> Sample Product </a>
                                                        </div>
                                                        {/* <!--item-title--> */}
                                                        <div className="item-content">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div className="rating"></div>
                                                                </div>
                                                            </div>
                                                            <div className="price-box">
                                                                <span className="regular-price">
                                                                    <span className="price">$50.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* <!--item-content-->  */}
                                                    </div>
                                                    {/* <!--info-inner--> */}

                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Item --> 
                
                <!-- Item --> */}
                                        <div className="item">
                                            <div className="col-item">
                                                <div className="sale-label sale-top-right">Sale</div>
                                                <div className="product-image-area"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="a" className="img-responsive" src="products-images/product1.jpg" /> </a>
                                                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="" title="Add to cart">
                                                        <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                                                    </a> <a className="quick-view" href="quick_view.html">
                                                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                                                        </a> <a className="add_to_compare" href="compare.html">
                                                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                                                        </a> <a className="addToWishlist wishlistProd_5" href="wishlist.html" >
                                                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                                                        </a> </div>
                                                </div>
                                                <div className="info">
                                                    <div className="info-inner">
                                                        <div className="item-title"> <a title=" Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                                        {/* <!--item-title--> */}
                                                        <div className="item-content">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div className="rating"></div>
                                                                </div>
                                                            </div>
                                                            <div className="price-box">
                                                                <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                                                <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                                                            </div>
                                                        </div>
                                                        {/* <!--item-content-->  */}
                                                    </div>
                                                    {/* <!--info-inner--> */}

                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Item --> 
                
                <!-- Item --> */}
                                        <div className="item">
                                            <div className="col-item">
                                                <div className="sale-label sale-top-right">Sale</div>
                                                <div className="product-image-area"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="a" className="img-responsive" src="products-images/product1.jpg" /> </a>
                                                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="" title="Add to cart">
                                                        <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                                                    </a> <a className="quick-view" href="quick_view.html">
                                                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                                                        </a> <a className="add_to_compare" href="compare.html">
                                                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                                                        </a> <a className="addToWishlist wishlistProd_5" href="wishlist.html" >
                                                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                                                        </a> </div>
                                                </div>
                                                <div className="info">
                                                    <div className="info-inner">
                                                        <div className="item-title"> <a title=" Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                                        {/* <!--item-title--> */}
                                                        <div className="item-content">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div className="rating"></div>
                                                                </div>
                                                            </div>
                                                            <div className="price-box">
                                                                <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                                                <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                                                            </div>
                                                        </div>
                                                        {/* <!--item-content-->  */}
                                                    </div>
                                                    {/* <!--info-inner--> */}

                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Item --> 
                
                <!-- Item --> */}
                                        <div className="item">
                                            <div className="col-item">
                                                <div className="new-label new-top-right">New</div>
                                                <div className="product-image-area"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="a" className="img-responsive" src="products-images/product1.jpg" /> </a>
                                                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="" title="Add to cart">
                                                        <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                                                    </a> <a className="quick-view" href="quick_view.html">
                                                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                                                        </a> <a className="add_to_compare" href="compare.html">
                                                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                                                        </a> <a className="addToWishlist wishlistProd_5" href="wishlist.html" >
                                                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                                                        </a> </div>
                                                </div>
                                                <div className="info">
                                                    <div className="info-inner">
                                                        <div className="item-title"> <a title=" Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                                        {/* <!--item-title--> */}
                                                        <div className="item-content">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div className="rating"></div>
                                                                </div>
                                                            </div>
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$422.00</span> </span> </div>
                                                        </div>
                                                        {/* <!--item-content-->  */}
                                                    </div>
                                                    {/* <!--info-inner--> */}

                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Item --> 
                
                <!-- Item --> */}
                                        <div className="item">
                                            <div className="col-item">
                                                <div className="sale-label sale-top-right">Sale</div>
                                                <div className="product-image-area"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="a" className="img-responsive" src="products-images/product1.jpg" /> </a>
                                                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="" title="Add to cart">
                                                        <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                                                    </a> <a className="quick-view" href="quick_view.html">
                                                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                                                        </a> <a className="add_to_compare" href="compare.html">
                                                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                                                        </a> <a className="addToWishlist wishlistProd_5" href="wishlist.html" >
                                                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                                                        </a> </div>
                                                </div>
                                                <div className="info">
                                                    <div className="info-inner">
                                                        <div className="item-title"> <a title=" Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                                        {/* <!--item-title--> */}
                                                        <div className="item-content">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div className="rating"></div>
                                                                </div>
                                                            </div>
                                                            <div className="price-box"> <span className="regular-price"> <span className="price">$50.00</span> </span> </div>
                                                        </div>
                                                        {/* <!--item-content-->  */}
                                                    </div>
                                                    {/* <!--info-inner--> */}

                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Item --> 
                
                <!-- Item --> */}
                                        <div className="item">
                                            <div className="col-item">
                                                <div className="sale-label sale-top-right">Sale</div>
                                                <div className="product-image-area"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="a" className="img-responsive" src="products-images/product1.jpg" /> </a>
                                                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="" title="Add to cart">
                                                        <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                                                    </a> <a className="quick-view" href="quick_view.html">
                                                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                                                        </a> <a className="add_to_compare" href="compare.html">
                                                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                                                        </a> <a className="addToWishlist wishlistProd_5" href="wishlist.html" >
                                                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                                                        </a> </div>
                                                </div>
                                                <div className="info">
                                                    <div className="info-inner">
                                                        <div className="item-title"> <a title=" Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                                        {/* <!--item-title--> */}
                                                        <div className="item-content">
                                                            <div className="ratings">
                                                                <div className="rating-box">
                                                                    <div className="rating"></div>
                                                                </div>
                                                            </div>
                                                            <div className="price-box">
                                                                <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                                                <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                                                            </div>
                                                        </div>
                                                        {/* <!--item-content-->  */}
                                                    </div>
                                                    {/* <!--info-inner--> */}

                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Item -->  */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BestSeller;