import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="offer-banner-section wow bounceInUp animated">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xs-12 col-sm-4 wow bounceInLeft animated animated">
                            <a href="">
                                <img src="images/offer-banner1.jpg" alt="offer banner1" />
                            </a>
                        </div>
                        <div className="col-lg-4 col-xs-12 col-sm-4 wow bounceInUp animated animated">
                            <a href="">
                                <img src="images/offer-banner1.jpg" alt="offer banner2" />
                            </a>
                        </div>
                        <div className="col-lg-4 col-xs-12 col-sm-4 wow bounceInRight animated animated">
                            <a href="">
                                <img src="images/offer-banner1.jpg" alt="offer banner3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner;