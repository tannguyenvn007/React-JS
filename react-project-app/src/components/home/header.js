import React, { Component } from 'react';
import MenuLeftHome from './menu-left-home'
class Header extends Component {
    render() {
        return (
            <div>
                <header className="header-container">
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                {/* <!-- Header Language --> */}
                                <div className="col-xs-6">
                                    <div className="dropdown block-language-wrapper">
                                        <a role="button" data-toggle="dropdown" data-target="" className="block-language dropdown-toggle" href="">
                                            <img src="images/english.png" alt="language" />  English <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li role="presentation">
                                                <a role="menuitem" tabindex="-1" href="">
                                                    <img src="images/english.png" alt="language" /> English
                                            </a>
                                            </li>
                                            <li role="presentation">
                                                <a role="menuitem" tabindex="-1" href="">
                                                    <img src="images/francais.png" alt="language" /> French
                                            </a>
                                            </li>
                                            <li role="presentation">
                                                <a role="menuitem" tabindex="-1" href="">
                                                    <img src="images/german.png" alt="language" /> German       
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Header Language -->  */}

                                    {/* <!-- Header Currency --> */}
                                    <div className="dropdown block-currency-wrapper">
                                        <a role="button" data-toggle="dropdown" data-target="" className="block-currency dropdown-toggle" href=""> USD 
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href=""> $ - Dollar </a></li>
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href=""> £ - Pound </a></li>
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href=""> € - Euro </a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Header Currency --> */}
                                    <div className="welcome-msg hidden-xs"> Default welcome msg! </div>
                                </div>
                                <div className="col-xs-6">
                                    {/* <!-- Header Top Links --> */}
                                    <div className="toplinks">
                                        <div className="links">
                                            <div className="myaccount"><a title="My Account" href="login.html"><span className="hidden-xs">My Account</span></a></div>
                                            <div className="wishlist"><a title="My Wishlist" href="wishlist.html"><span className="hidden-xs">Wishlist</span></a></div>
                                            <div className="check"><a title="Checkout" href="checkout.html"><span className="hidden-xs">Checkout</span></a></div>
                                            <div className="login"><a title="Login" href="login.html"><span className="hidden-xs">Log In</span></a></div>
                                        </div>
                                    </div>
                                    {/* <!-- End Header Top Links -->  */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-3 col-md-2">
                                {/* <!-- Header Logo -->  */}
                                <a className="logo" title="Magento Commerce" href="index.html">
                                    <img alt="Magento Commerce" src="images/logo.png" />
                                </a>
                                {/* <!-- End Header Logo -->  */}
                            </div>
                            <div className="col-lg-8 col-sm-6 col-md-8">
                                {/* <!-- Search-col --> */}
                                <div className="search-box">
                                    <form action="cat" method="POST" id="search_mini_form" name="Categories">
                                        <select name="category_id" className="cate-dropdown hidden-xs">
                                            <option value="0">All Categories</option>
                                            <option value="36">Camera</option>
                                            <option value="37">Electronics</option>
                                            <option value="42">&nbsp;&nbsp;&nbsp;Cell Phones</option>
                                            <option value="43">&nbsp;&nbsp;&nbsp;Cameras</option>
                                            <option value="44">&nbsp;&nbsp;&nbsp;Laptops</option>
                                            <option value="45">&nbsp;&nbsp;&nbsp;Hard Drives</option>
                                            <option value="46">&nbsp;&nbsp;&nbsp;Monitors</option>
                                            <option value="47">&nbsp;&nbsp;&nbsp;Mouse</option>
                                            <option value="48">&nbsp;&nbsp;&nbsp;Digital Cameras</option>
                                            <option value="38">Desktops</option>
                                            <option value="39">Computer Parts</option>
                                            <option value="40">Televisions</option>
                                            <option value="41">Featured</option>
                                        </select>
                                        <input type="text" placeholder="Search here..." value="" maxlength="70" className="" name="search" id="search" />
                                        <button id="submit-button" className="search-btn-bg">
                                            <span>Search</span>
                                        </button>
                                    </form>
                                </div>
                                {/* <!-- End Search-col -->  */}
                            </div>
                            {/* <!-- Top Cart --> */}
                            <div className="col-lg-2 col-sm-3 col-md-2">
                                <div className="top-cart-contain">
                                    <div className="mini-cart">
                                        <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle">
                                            <a href="">
                                                <i className="glyphicon glyphicon-shopping-cart"></i>
                                                <div className="cart-box">
                                                    <span className="title">cart</span>
                                                    <span id="cart-total">2 item </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="top-cart-content arrow_box">
                                                <div className="block-subtitle">Recently added item(s)</div>
                                                <ul id="cart-sidebar" className="mini-products-list">
                                                    <li className="item even">
                                                        <a className="product-image" href="" title="Downloadable Product ">
                                                            <img alt="Downloadable Product " src="products-images/product3.jpg" width="80" />
                                                        </a>
                                                        <div className="detail-item">
                                                            <div className="product-details">
                                                                <a href="" title="Remove This Item" onClick="" className="glyphicon glyphicon-remove">&nbsp;</a>
                                                                <a className="glyphicon glyphicon-pencil" title="Edit item" href="">&nbsp;</a>
                                                                <p className="product-name">
                                                                    <a href="product_detail.html" title="Downloadable Product">Sample Product </a>
                                                                </p>
                                                            </div>
                                                            <div className="product-details-bottom">
                                                                <span className="price">$100.00</span>
                                                                <span className="title-desc">Qty:</span>
                                                                <strong>1</strong>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item last odd">
                                                        <a className="product-image" href="" title="  Sample Product ">
                                                            <img alt="  Sample Product " src="products-images/product2.jpg" width="80" />
                                                        </a>
                                                        <div className="detail-item">
                                                            <div className="product-details">
                                                                <a href="" title="Remove This Item" onClick="" className="glyphicon glyphicon-remove">&nbsp;</a>
                                                                <a className="glyphicon glyphicon-pencil" title="Edit item" href="">&nbsp;</a>
                                                                <p className="product-name">
                                                                    <a href="" title="  Sample Product "> Sample Product </a>
                                                                </p>
                                                            </div>
                                                            <div className="product-details-bottom">
                                                                <span className="price">$320.00</span>
                                                                <span className="title-desc">Qty:</span>
                                                                <strong>2</strong>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="top-subtotal">Subtotal:
                                    <span className="price">$420.00</span>
                                                </div>
                                                <div className="actions">
                                                    <button className="btn-checkout" type="button"><span>Checkout</span></button>
                                                    <button className="view-cart" type="button"><span>View Cart</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="ajaxconfig_info">
                                        <a href="/">ex</a>
                                        <input value="" type="hidden" />
                                        <input id="enable_module" value="1" type="hidden" />
                                        <input className="effect_to_cart" value="1" type="hidden" />
                                        <input className="title_shopping_cart" value="Go to shopping cart" type="hidden" />>
                            </div>
                                </div>
                            </div>
                            {/* <!-- End Top Cart -->  */}
                        </div>
                    </div>
                </header>
                <nav>
                    <div class="container">
                        <div class="nav-inner">
                            <div class="logo-small">
                                <a class="logo" title="Magento Commerce" href="index.html">
                                    <img alt="Magento Commerce" src="images/logo.png" />
                                </a>
                            </div>
                            {/* <!-- mobile-menu --> */}
                            <div class="hidden-desktop" id="mobile-menu">
                                <ul class="navmenu">
                                    <li>
                                        <div class="menutop">
                                            <div class="toggle">
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                            </div>
                                            <h2>Menu</h2>
                                        </div>
                                        <ul class="submenu">
                                            <li>
                                                <ul class="topnav">
                                                    <li class="level0 nav-6 level-top first parent">
                                                        <a class="level-top" href="">
                                                            <span>Pages</span>
                                                        </a>
                                                        <ul class="level0">
                                                            <li class="level1 first">
                                                                <a href="grid.html">
                                                                    <span>Grid</span>
                                                                </a>
                                                            </li>
                                                            <li class="level1 nav-10-2"> <a href="list.html"> <span>List</span> </a> </li>
                                                            <li class="level1 nav-10-3"> <a href="product_detail.html"> <span>Product Detail</span> </a> </li>
                                                            <li class="level1 nav-10-4"> <a href="shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
                                                        </ul>
                                                    </li>
                                                    <li class="level0 nav-7 level-top parent"> <a class="level-top" href="grid.html"> <span>Women</span> </a>
                                                        <ul class="level0">
                                                            <li class="level1 nav-1-1 first parent"> <a href="grid.html"> <span>Clothing</span> </a>
                                                                <ul class="level1">
                                                                    <li class="level2 nav-1-1-1 first"> <a href="grid.html"> <span>Western Wear</span> </a> </li>
                                                                    <li class="level2 nav-1-1-2"> <a href="grid.html"> <span>Night Wear</span> </a> </li>

                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="level0 nav-8 level-top parent"> <a class="level-top" href="grid.html"> <span>Men</span> </a>
                                                        <ul class="level0">
                                                            <li class="level1 nav-2-1 first parent"> <a href="grid.html"> <span>Clothing</span> </a>
                                                                <ul class="level1">
                                                                    <li class="level2 nav-2-1-1 first"> <a href="grid.html"> <span>Casual Wear</span> </a> </li>
                                                                    <li class="level2 nav-2-1-2"> <a href="grid.html"> <span>Formal Wear</span> </a> </li>
                                                                    <li class="level2 nav-2-1-3"> <a href="grid.html"> <span>Ethnic Wear</span> </a> </li>
                                                                    <li class="level2 nav-2-1-4 last"> <a href="grid.html"> <span>Denims</span> </a> </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="level0 nav-3 level-top parent"> <a href="grid.html" class="level-top"> <span>Jewellery</span> </a><em>+</em>
                                                        <ul class="level0">
                                                            <li class="level1 nav-3-5 last parent"> <a href="grid.html"> <span>Platinum</span> </a><em>+</em>
                                                                <ul class="level1">
                                                                    <li class="level2 nav-3-5-17 first"> <a href="grid.html"> <span>Earrings</span> </a> </li>
                                                                    <li class="level2 nav-3-5-18"> <a href="grid.html"> <span>Rings</span> </a> </li>
                                                                    <li class="level2 nav-3-5-19"> <a href="grid.html"> <span>Bangles &amp; Bracelets</span> </a> </li>
                                                                    <li class="level2 nav-3-5-20 last"> <a href="grid.html"> <span>Pendants</span> </a> </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="level0 nav-10 level-top "> <a class="level-top" href="blog.html"> <span>Custom</span> </a> </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* <!--navmenu-->  */}
                            </div>

                            {/* <!--End mobile-menu --> */}
                            <ul id="nav" class="hidden-xs">
                                <li id="nav-home" class="level0 parent drop-menu">
                                    <a href="index.html" class="active">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li class="level0 parent drop-menu"><a href=""><span>Pages</span> </a>
                                    <ul class="level1">
                                        <li class="level1 first"><a href="grid.html"><span>Grid</span></a></li>
                                        <li class="level1 first parent"><a href="blog.html"><span>Blog</span></a>
                                            <ul class="level2">
                                                <li class="level2 nav-2-1-1 first">
                                                    <a href="blog_detail.html">
                                                        <span>Blog Detail</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="level0 nav-6 level-top parent">
                                    <a href="grid.html" class="level-top">
                                        <span>Women</span>
                                    </a>
                                    <div class="level0-wrapper dropdown-6col">
                                        <div class="level0-wrapper2">
                                            <div class="nav-block nav-block-center grid12-8 itemgrid itemgrid-4col">

                                                {/* <!--mega menu--> */}

                                                <ul class="level0">
                                                    <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Clothing</span></a>
                                                        <ul class="level1">
                                                            <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Western Wear</span></a> </li>
                                                            <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Night Wear</span></a> </li>
                                                        </ul>
                                                    </li>
                                                    <li class="level3 nav-6-1 parent item">
                                                        <a href="grid.html">
                                                            <span>Watches</span>
                                                        </a>
                                                        <ul class="level1">
                                                            <li class="level2 nav-6-1-1">
                                                                <a href="grid.html">
                                                                    <span>Fashion</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="nav-block nav-block-right std grid12-4">
                                                <div class="static-img-block">
                                                    <a href="">
                                                        <img src="images/nav-img1.jpg" alt="Responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-custom-link level0 level-top parent"> <a class="level-top" href=""><span>Custom</span></a>
                                    <div class="level0-wrapper custom-menu">
                                        <div class="header-nav-dropdown-wrapper clearer">

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <MenuLeftHome/>
            </div>
            
        )
    }
}
export default Header;