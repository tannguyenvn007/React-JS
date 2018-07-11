import React,{Component} from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className="footer wow bounceInUp animated">
    <div className="brand-logo ">
      <div className="container">
        <div className="slider-items-products">
          <div id="brand-logo-slider" className="product-flexslider hidden-buttons">
            <div className="slider-items slider-width-col6"> 
              
              {/* <!-- Item --> */}
              <div className="item"> 
                <a href="#x">
                    <img src="images/b-logo1.png" alt=""/>
                </a> 
            </div>
              {/* <!-- End Item --> 
              
              <!-- Item --> */}
              <div className="item"> <a href="#x"><img src="images/b-logo2.png" alt=""/></a> </div>
              {/* <!-- End Item --> 
              
              <!-- Item --> */}
              <div className="item"> <a href="#x"><img src="images/b-logo3.png" alt=""/></a> </div>
              {/* <!-- End Item --> 
              
              <!-- Item --> */}
              <div className="item"> <a href="#x"><img src="images/b-logo4.png" alt=""/></a> </div>
              {/* <!-- End Item --> 
              
              <!-- Item --> */}
              <div className="item"> <a href="#x"><img src="images/b-logo5.png" alt=""/></a> </div>
              {/* <!-- End Item --> 
              
              <!-- Item --> */}
              <div className="item"> <a href="#x"><img src="images/b-logo6.png" alt=""/></a> </div>
              {/* <!-- End Item --> 
              
              <!-- Item --> */}
              <div className="item"> <a href="#x"><img src="images/b-logo1.png" alt=""/></a> </div>
              {/* <!-- End Item --> 
              
              <!-- Item --> */}
              <div className="item"> <a href="#x"><img src="images/b-logo4.png" alt=""/></a> </div>
              {/* <!-- End Item -->  */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-7">
            <div className="block-subscribe">
              <div className="newsletter">
                <form>
                  <h4>newsletter</h4>
                  <input 
                        type="text" 
                        placeholder="Enter your email address" 
                        className="input-text required-entry validate-email" 
                        title="Sign up for our newsletter" 
                        id="newsletter1" name="email"/>
                  <button className="subscribe" title="Subscribe" type="submit">
                    <span>Subscribe</span>
                </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-5">
            <div className="social">
              <ul>
                <li className="fb"></li>
                <li className="tw"></li>
                <li className="googleplus"></li>
                <li className="rss"></li>
                <li className="pintrest"></li>
                <li className="linkedin"></li>
                <li className="youtube"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-middle container">
      <div className="row">
        <div className="col-md-3 col-sm-4">
          <div className="footer-logo">
            <a href="index.html" title="Logo">
                <img src="images/logo.png" alt="logo"/>
            </a>
        </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam arcu. </p>
          <div className="payment-accept">
            <div>
                <img src="images/payment-1.png" alt="payment"/> 
                <img src="images/payment-2.png" alt="payment"/> 
                <img src="images/payment-3.png" alt="payment"/> 
                <img src="images/payment-4.png" alt="payment"/>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-4">
          <h4>Shopping Guide</h4>
          <ul className="links">
            <li className="first"><a href="" title="How to buy">How to buy</a></li>
            <li><a href="faq.html" title="FAQs">FAQs</a></li>
            <li><a href="" title="Payment">Payment</a></li>
            <li><a href="" title="Shipment&lt;/a&gt;">Shipment</a></li>
            <li><a href="" title="Where is my order?">Where is my order?</a></li>
            <li className="last"><a href="" title="Return policy">Return policy</a></li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-4">
          <h4>Style Advisor</h4>
          <ul className="links">
            <li className="first"><a title="Your Account" href="login.html">Your Account</a></li>
            <li><a title="Information" href="">Information</a></li>
            <li><a title="Addresses" href="">Addresses</a></li>
            <li><a title="Addresses" href="">Discount</a></li>
            <li><a title="Orders History" href="">Orders History</a></li>
            <li className="last"><a title=" Additional Information" href="">Additional Information</a></li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-4">
          <h4>Information</h4>
          <ul className="links">
            <li className="first"><a href="" title="privacy policy">Privacy policy</a></li>
            <li><a href="" title="Search Terms">Search Terms</a></li>
            <li><a href="" title="Advanced Search">Advanced Search</a></li>
            <li><a href="contact_us.html" title="Contact Us">Contact Us</a></li>
            <li><a href="" title="Suppliers">Suppliers</a></li>
            <li className=" last"><a href="" title="Our stores" className="link-rss">Our stores</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-4">
          <h4>Contact us</h4>
          <div className="contacts-info">
            <address>
            <i className="add-icon">&nbsp;</i>123 Main Street, Anytown, <br/>
            &nbsp;CA 12345  USA
            </address>
            <div className="phone-footer"><i className="phone-icon">&nbsp;</i> +1 800 123 1234</div>
            <div className="email-footer">
                <i className="email-icon">&nbsp;</i> 
                <a href="">support@magikcommerce.com</a>
             </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
      <div className="row">
        <div className="col-sm-5 col-xs-12 coppyright"> &copy; 2015. All Rights Reserved. Designed by <a href="">magikcommerce.com</a> </div>
        <div className="col-sm-7 col-xs-12 company-links">
          <ul className="links">
            <li><a href="" title="Magento Themes">Magento Themes</a></li>
            <li><a href="" title="Premium Themes">Premium Themes</a></li>
            <li><a href="" title="Responsive Themes">Responsive Themes</a></li>
            <li className="last"><a href="" title="Magento Extensions">Magento Extensions</a></li>
          </ul>
        </div></div>
      </div>
    </div>
  </footer>
        )
    }
}
export default Footer;