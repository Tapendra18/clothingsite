import React from "react";
import './homeSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeSlider() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="home-slider position-relative mb-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 d-none d-lg-flex">
                        <div className="categories-dropdown-wrap style-2 font-heading mt-30">
                            <div className="d-flex categori-dropdown-inner">
                                <ul>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/food-beverage"> <img
                                            src="media/categories/super/imgs/category-2_1.png " alt="" />Food &amp;
                                            Beverage</a>
                                    </li>

                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/beauty-fragrances"> <img
                                            src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Beauty
                                            &amp; Fragrances</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/automotive"> <img
                                            src="media/categories/super/imgs/category-4.png "
                                            alt="" />Automotive</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/consumer-electronics"> <img
                                            src="media/categories/super/imgs/category-4_brSMGKb.png "
                                            alt="" />Consumer Electronics</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/health-personal-care"> <img
                                            src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Health
                                            &amp; Personal Care</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/fashion-accessories"> <img
                                            src="media/categories/super/imgs/category-3.png " alt="" />Fashion &amp;
                                            Accessories</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/office-stationery"> <img
                                            src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Office
                                            &amp; Stationery</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/construction-hardware"> <img
                                            src="media/categories/super/imgs/icon-4.png " alt="" />Construction
                                            &amp; Hardware</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/home-furniture"> <img
                                            src="media/categories/super/imgs/category-10.png " alt="" />Home &amp;
                                            Furniture</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/toys"> <img src="media/categories/super/imgs/icon-2.png "
                                            alt="" />Toys</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more_slide_open" style={{ display: 'none' }}>
                                <div className="d-flex categori-dropdown-inner">
                                    <ul>
                                        <li style={{ paddingTop: '30px' }}>
                                            <a href="/shop/super/automotive"> <img
                                                src="media/categories/super/imgs/category-4.png "
                                                alt="" />Automotive</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="more_categories"><span className="icon"></span> <span className="heading-sm-1">Show
                                more...</span></div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="home-slide-cover mt-30">

                            <div className="hero-slider-1 style-5 dot-style-1 dot-style-1-position-2">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="single-hero-slider single-animation-wrap"
                                                style={{ backgroundImage: `url(media/carousel/slider-8.png)` , position:'relative', }}>
                                                <div className="slider-content">
                                                    <a href="product-details.html" style={{zIndex:"98988"}}>
                                                        <h1 className="display-2 mb-40">
                                                            Don’t miss amazing <br />
                                                            grocery deals
                                                        </h1>
                                                    </a>
                                                    <p className="mb-65">Sign up for the daily newsletter</p>
                                                    <form method="POST" className="form-subcriber d-flex selector-1">
                                                        <input type="hidden" name="csrfmiddlewaretoken"
                                                            value="ybcHhIxigLu3GxPKry6eKHTWkWAMYiw0LEuKuoBalMF1AYpnFCl2ryWAjqfZI8AP" />
                                                        <input id="subscribe-input-1" className="form-none" type="email"
                                                            placeholder="Your emaill address" required />
                                                        <button className="btn form-none" type="submit">Subscribe</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="single-hero-slider single-animation-wrap"
                                                style={{ backgroundImage: `url(media/carousel/slider-7.png)` ,position:'relative',}}>
                                                <div className="slider-content">
                                                    <a href="product-details.html">
                                                        <h1 className="display-2 mb-40">
                                                            Fresh Vegetables <br/>Big discount
                                                        </h1>
                                                    </a>
                                                    <p className="mb-65">Sign up for the daily newsletter</p>
                                                    <form method="POST" className="form-subcriber d-flex selector-1">
                                                        <input type="hidden" name="csrfmiddlewaretoken"
                                                            value="ybcHhIxigLu3GxPKry6eKHTWkWAMYiw0LEuKuoBalMF1AYpnFCl2ryWAjqfZI8AP" />
                                                        <input id="subscribe-input-1" className="form-none" type="email"
                                                            placeholder="Your emaill address" required />
                                                        <button className="btn form-none" type="submit">Subscribe</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                               
                            </div>
                            <div className="slider-arrow hero-slider-1-arrow"></div>
                        </div>



                        {/* <Carousel>
                            <div>
                                <img style={{backgroundImage: `url(media/carousel/slider-7.png)`}} alt="slider-7" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img style={{backgroundImage: `url(media/carousel/slider-7.png)`}} alt="slider-7" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img style={{backgroundImage: `url(media/carousel/slider-7.png)`}} alt="slider-7" />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel> */}
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="banner-img style-4 mt-30">
                                    <img src="media/ads/sidebar/banner-14_NHnALKO.png" alt="" />
                                    <div className="banner-text">
                                        <h4 className="mb-30">
                                            Everyday Fresh &amp; <br />
                                            Clean with Our Products
                                        </h4>
                                        <a href="product-details.html" className="btn btn-xs mb-50">Shop Now <i
                                            className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12">
                                <div className="banner-img style-5 mt-5 mt-md-30">
                                    <img src="media/ads/sidebar/banner-15_wiwgjI6.png" alt="" />
                                    <div className="banner-text">
                                        <h5 className="mb-20">
                                            The best Organic <br />
                                            Products Online
                                        </h5>
                                        <a href="product-details.html" className="btn btn-xs">Shop Now <i
                                            className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomeSlider