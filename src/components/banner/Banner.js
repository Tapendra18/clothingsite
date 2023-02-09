
import React from "react";

function Banner() {

    return (
        <section className="banners mb-25">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <img src="media/ads/middlebar/banner-3.png" alt="" />
                            <div className="banner-text">
                                <h4>
                                    The best Offers Are Here
                                </h4>
                                <a href="product-details.html" className="btn btn-xs">Shop Now <i
                                    className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <img src="media/ads/middlebar/banner-1.png" alt="" />
                            <div className="banner-text">
                                <h4>
                                    New Cloth for all
                                </h4>
                                <a href="product-details.html" className="btn btn-xs">Shop Now <i
                                    className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <img src="media/ads/middlebar/banner-2.png" alt="" />
                            <div className="banner-text">
                                <h4>
                                    Make your day <br /> stylist
                                </h4>
                                <a href="product-details.html" className="btn btn-xs">Shop Now <i
                                    className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner