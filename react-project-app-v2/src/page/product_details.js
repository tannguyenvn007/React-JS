import React, { Component } from "react";
import { connect } from 'react-redux';
import { FetchProductDetailsAPI, addCart } from "../actions";
import CartContainer from "../container/cart_container";
const formatCurrency = require('format-currency')
class ProductDetails extends Component {
	componentDidMount() {
		var { match } = this.props;
		if (match) {
			var id = match.params.id;
			var category = match.url.substr(1, 2);
			this.props.fetchProducts(id, category);
		}
	}
	render() {
		
		var { product, cart } = this.props;
		
		var image = "";
		if (product.image) {
			image = product.image;
		}
		let opts = { format: '%v %c', code: 'VND' }
		return (
			<div>
				<div className="inner-header">
					<div className="container">
						<div className="pull-left">
							<h6 className="inner-title">Product</h6>
						</div>
						<div className="pull-right">
							<div className="beta-breadcrumb font-large">
								<a href="index.html">Home</a> / <span>Details / {product.name}</span>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				<div className="container">
					<div id="content">
						<div className="row">
							<div className="col-sm-9">

								<div className="row">
									<div className="col-sm-4">

										<img src={"image/product/product/" + image.substr(12)} alt="product" />
									</div>
									<div className="col-sm-8">
										<div className="single-item-body">
											<p className="single-item-title">{product.name}</p>
											<p className="single-item-price">
												<span>{formatCurrency(product.price, opts)}</span>
											</p>
										</div>

										<div className="clearfix"></div>
										<div className="space20">&nbsp;</div>

										<div className="single-item-desc">
											<p>{product.description}</p>
										</div>
										<div className="space20">&nbsp;</div>

										<p>Quantity:</p>
										<div className="single-item-options">
											<select className="wc-select" name="color">

												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</select>
											<a className="add-to-cart" onClick={() => this.onAddToCart(product)}>
												<i className="fa fa-shopping-cart"></i>
											</a>
											<div className="clearfix"></div>
										</div>
									</div>
								</div>

								<div className="space40">&nbsp;</div>
								<div className="woocommerce-tabs">
									<CartContainer />

								</div>
								<div className="space50">&nbsp;</div>
								<div className="beta-products-list">
									<h4>Related Products</h4>

									<div className="row">
										<div className="col-sm-4">
											<div className="single-item">
												<div className="single-item-header">
													<a href="product.html">
														<img src="assets/dest/images/products/4.jpg" alt="" /></a>
												</div>
												<div className="single-item-body">
													<p className="single-item-title">Sample Woman Top</p>
													<p className="single-item-price">
														<span>$34.55</span>
													</p>
												</div>
												<div className="single-item-caption">
													<a className="add-to-cart pull-left" href="product.html"><i className="fa fa-shopping-cart"></i></a>
													<a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
													<div className="clearfix"></div>
												</div>
											</div>
										</div>

										<div className="col-sm-4">
											<div className="single-item">
												<div className="ribbon-wrapper"><div className="ribbon sale">Sale</div></div>

												<div className="single-item-header">
													<a href=""><img src="assets/dest/images/products/6.jpg" alt="" /></a>
												</div>
												<div className="single-item-body">
													<p className="single-item-title">Sample Woman Top</p>
													<p className="single-item-price">
														<span className="flash-del">$34.55</span>
														<span className="flash-sale">$33.55</span>
													</p>
												</div>
												<div className="single-item-caption">
													<a className="add-to-cart pull-left" href=""><i className="fa fa-shopping-cart"></i></a>
													<a className="beta-btn primary" href="">Details <i className="fa fa-chevron-right"></i></a>
													<div className="clearfix"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-3 aside">
								<div className="widget">
									<h3 className="widget-title">Best Sellers</h3>
									<div className="widget-body">
										<div className="beta-sales beta-lists">
											<div className="media beta-sales-item">
												<a className="pull-left" href="product.html">
													<img src="assets/dest/images/products/sales/1.png" alt="" /></a>
												<div className="media-body">
													Sample Woman Top
										<span className="beta-sales-price">$34.55</span>
												</div>
											</div>
											<div className="media beta-sales-item">
												<a className="pull-left" href="product.html">
													<img src="assets/dest/images/products/sales/2.png" alt="" /></a>
												<div className="media-body">
													Sample Woman Top
										<span className="beta-sales-price">$34.55</span>
												</div>
											</div>

										</div>
									</div>
								</div>
								<div className="widget">
									<h3 className="widget-title">New Products</h3>
									<div className="widget-body">
										<div className="beta-sales beta-lists">
											<div className="media beta-sales-item">
												<a className="pull-left" href="product.html">
													<img src="assets/dest/images/products/sales/1.png" alt="" /></a>
												<div className="media-body">
													Sample Woman Top
										<span className="beta-sales-price">$34.55</span>
												</div>
											</div>

											<div className="media beta-sales-item">
												<a className="pull-left" href="product.html">
													<img src="assets/dest/images/products/sales/4.png" alt="" /></a>
												<div className="media-body">
													Sample Woman Top
										<span className="beta-sales-price">$34.55</span>
												</div>
											</div>
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
	onAddToCart = (product) => {
		this.props.onAddToCart(product);
	}
}

const mapStateToProps = (state) => {

	return {
		product: state.products,
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchProducts: (id, category) => {
			dispatch(FetchProductDetailsAPI(id, category));
		},
		onAddToCart: (product) => {
			dispatch(addCart(product,1))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);