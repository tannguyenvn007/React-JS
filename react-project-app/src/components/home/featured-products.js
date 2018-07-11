import React, { Component } from 'react'

class FeaturedProducts extends Component {
    render() {
        return (
            <section className="featured-pro container wow bounceInUp animated">
                <div className="slider-items-products">
                    <div className="new_title center">
                        <h2>Featured Products</h2>
                    </div>
                    <div id="featured-slider" className="product-flexslider hidden-buttons">
                        <div className="slider-items slider-width-col4">

                            {/* <!-- Item --> */}
                            <div className="item">
                                <div className="col-item">
                                    <div className="sale-label sale-top-right">Sale</div>
                                    <div className="product-image-area">
                                        <a className="product-image" title="Sample Product" href="product_detail.html">
                                            <img src="products-images/product1.jpg" className="img-responsive" alt="a" /> </a>
                                        <div className="actions-links">
                                            <span className="add-to-links">
                                                <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html">
                                                    <span>quickview</span>
                                                </a>
                                                <a title="Add to Wishlist" className="link-wishlist" href="wishlist.html">
                                                    <span>Add to Wishlist</span>
                                                </a>
                                                <a title="Add to Compare" className="link-compare" href="compare.html">
                                                    <span>Add to Compare</span>
                                                </a>
                                            </span>
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
                                                <div className="price-box">
                                                    <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                                    <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                                                </div>
                                            </div>
                                            {/* <!--item-content-->  */}
                                        </div>
                                        {/* <!--info-inner--> */}
                                        <div className="actions">
                                            <button type="button" title="Add to Cart" className="button btn-cart"><span>Add to Cart</span></button>
                                        </div>
                                        {/* <!--actions--> */}

                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Item -->  */}

                            {/* <!-- Item --> */}
                            <div className="item">
                                <div className="col-item">
                                    <div className="new-label new-top-right">New</div>
                                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img src="products-images/product1.jpg" className="img-responsive" alt="a" /> </a>
                                        <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                                        <div className="actions">
                                            <button type="button" title="Add to Cart" className="button btn-cart"><span>Add to Cart</span></button>
                                        </div>
                                        {/* <!--actions--> */}

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
                                        <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                                        <div className="actions">
                                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                                        </div>
                                        {/* <!--actions--> */}

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
                                        <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                                        <div className="actions">
                                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                                        </div>
                                        {/* <!--actions--> */}

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
                                        <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                                        <div className="actions">
                                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                                        </div>
                                        {/* <!--actions--> */}

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
                                        <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                                        <div className="actions">
                                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                                        </div>
                                        {/* <!--actions--> */}

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
                                        <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                                        <div className="actions">
                                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                                        </div>
                                        {/* <!--actions--> */}

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
                                        <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                                        <div className="actions">
                                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                                        </div>
                                        {/* <!--actions--> */}

                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Item -->  */}

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FeaturedProducts;