import React, { useState, useEffect } from "react";
import axios from "axios";
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
        autoplaySpeed: 4000,
    };

    const [data, setData] = useState();
    console.log(data, "bannerr");
    const API_URL = "http://127.0.0.1:8000/";

    const getusers = () => {
        axios.get("http://127.0.0.1:8000/api/v1/banner")
            .then(response => setData(response))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getusers();
    }, []);

    return (
        <section className="home-slider position-relative mb-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 d-none d-lg-flex">
                        <div className="categories-dropdown-wrap style-2 font-heading mt-30">
                            <div className="d-flex categori-dropdown-inner">
                                <ul>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/food-beverage">
                                            <img src="media/categories/super/imgs/category-2_1.png " alt="" />Mens
                                            Wear's</a>
                                    </li>

                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/beauty-fragrances"> <img
                                            src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Women's wear's
                                        </a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/automotive"> <img
                                            src="media/categories/super/imgs/category-4.png "
                                            alt="" />Kids</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/consumer-electronics"> <img
                                            src="media/categories/super/imgs/category-4_brSMGKb.png "
                                            alt="" />Shirt</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/health-personal-care"> <img
                                            src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Health
                                            &amp; Kurti's</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/fashion-accessories"> <img
                                            src="media/categories/super/imgs/category-3.png " alt="" />Kid's
                                            T-shirt</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/office-stationery"> <img
                                            src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Women
                                            Suit's</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/construction-hardware"> <img
                                            src="media/categories/super/imgs/icon-4.png " alt="" />Men's
                                            Hoodies</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/home-furniture"> <img
                                            src="media/categories/super/imgs/category-10.png " alt="" />Men's
                                            Jean's</a>
                                    </li>
                                    <li style={{ paddingTop: '30px' }}>
                                        <a href="/shop/super/toys"> <img src="media/categories/super/imgs/icon-2.png "
                                            alt="" />Women's Top's</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more_slide_open" style={{ display: 'none' }}>
                                <div className="d-flex categori-dropdown-inner">
                                    <ul>
                                        <li style={{ paddingTop: '30px' }}>
                                            <a href="/shop/super/automotive"> <img
                                                src="media/categories/super/imgs/category-4.png "
                                                alt="" />Kid's Pant's</a>
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
                                    {data && data.data.data.map((item) => (
                                        <div>
                                            <div className="single-hero-slider single-animation-wrap"
                                                style={{ backgroundImage:`${API_URL + item.image}`, position: 'relative' }}>
                                                <div className="slider-content">
                                                    <a href="product-details.html" style={{ zIndex: "98988"}}>
                                                        <h1 className="display-2 mb-40" style={{ color: "white" }}>
                                                           {item.title}
                                                        </h1>
                                                    </a>
                                                    <p className="mb-65">Buy Now </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="slider-arrow hero-slider-1-arrow"></div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="banner-img style-4 mt-30">
                                    <img src="media/ads/sidebar/banner-14_NHnALKO.png" alt="" />
                                    <div className="banner-text">
                                        <h4 className="mb-30">
                                            Wear &amp; <br />
                                            With Offer's
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
                                            Products  <br />
                                            On Sale
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