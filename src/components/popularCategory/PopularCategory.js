import React from "react";
import './PopularCategory.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PopularCategory() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 6,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <section className="popular-categories section-padding">
            <div className="container wow animate__animated animate__fadeIn">
                <div className="section-title">
                    <div className="title">
                        <h3>Featured Categories</h3>
                        <ul className="list-inline nav nav-tabs links">

                            <li className="list-inline-item nav-item"><a className="nav-link"
                                href="/shop/super/automotive">Automotive</a></li>
                            <li className="list-inline-item nav-item"><a className="nav-link"
                                href="/shop/super/office-stationery">Office &amp; Stationery</a></li>
                            <li className="list-inline-item nav-item"><a className="nav-link"
                                href="/shop/super/health-personal-care">Health &amp; Personal Care</a></li>
                            <li className="list-inline-item nav-item"><a className="nav-link"
                                href="/shop/super/fashion-accessories">Fashion &amp; Accessories</a></li>
                            <li className="list-inline-item nav-item"><a className="nav-link"
                                href="/shop/super/sports-fitness">Sports &amp; Fitness</a></li>
                        </ul>
                    </div>
                    <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                        id="carausel-10-columns-arrows">
                        <span className="slider-btn slider-prev slick-arrow" style={{}}><i className="fi-rs-arrow-small-left"></i></span>
                        <span className="slider-btn slider-next slick-arrow" style={{}}><i className="fi-rs-arrow-small-right"></i></span>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className="carausel-10-columns-cover position-relative">
                        <div className="carausel-10-columns slick-initialized slick-slider" id="carausel-10-columns">
                            <div className="slick-list draggable">
                                <div className="slick-track setcarousel" style={{ opacity: '1', width: '7728px', marginTop: "-80px" }}>
                                    <div className="card-2 bg-1 wow animate__animated animate__fadeInUp" data-wow-delay=".1s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/household-supplies"><img
                                                src="media/categories/main/imgs/3e50c6fd349f94d6fd41961681e84725.webp"
                                                width="80" height="80" alt="Household Supplies" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/household-supplies">Household Supplies</a></h6>
                                    </div>
                                    <div className="card-2 bg-2 wow animate__animated animate__fadeInUp slick-slide slick-cloned" data-wow-delay=".2s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/oganic-kiwi"><img
                                                src="media/categories/main/imgs/cat-12_SwJb7aF.png" width="80" height="80"
                                                alt="Oganic Kiwi" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/oganic-kiwi">Oganic Kiwi</a></h6>
                                    </div>
                                    <div className="card-2 bg-3 wow animate__animated animate__fadeInUp slick-slide slick-cloned" data-wow-delay=".3s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/black-plum"><img src="media/categories/main/imgs/cat-4.png"
                                                width="80" height="80" alt="Black plum" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/black-plum">Black plum</a></h6>
                                    </div>
                                    <div className="card-2 bg-4 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".4s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/arts-crafts"><img
                                                src="media/categories/main/imgs/a6ed534511ece8690935680b9d6ad25e.webp"
                                                width="80" height="80" alt="Arts &amp; Crafts" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/arts-crafts">Arts &amp; Crafts</a></h6>
                                    </div>
                                    <div className="card-2 bg-5 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".5s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/makeup"><img
                                                src="media/categories/main/imgs/5060346f5bb533952f5b493fce8ef8d6.webp"
                                                width="80" height="80" alt="Makeup" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/makeup">Makeup</a></h6>
                                    </div>
                                    <div className="card-2 bg-6 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".6s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/tools-home-improvements"><img
                                                src="media/categories/main/imgs/3cfc55facd517d041fb7256c8f751fd5.webp"
                                                width="80" height="80" alt="Tools &amp; Home Improvements" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/tools-home-improvements">Tools &amp; Home Improvements</a></h6>
                                    </div>
                                    <div className="card-2 bg-7 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".7s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/cake-milk"><img src="media/categories/main/imgs/cat-13_AYk2np9.png"
                                                width="80" height="80" alt="Cake &amp; Milk" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/cake-milk">Cake &amp; Milk</a></h6>
                                    </div>
                                    <div className="card-2 bg-8 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".8s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/coffe-tea"><img src="media/categories/main/imgs/cat-14.png"
                                                width="80" height="80" alt="Coffe &amp; Tea" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/coffe-tea">Coffe &amp; Tea</a></h6>
                                    </div>
                                    <div className="card-2 bg-9 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".9s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/custard-apple"><img src="media/categories/main/imgs/cat-5.png"
                                                width="80" height="80" alt="Custard apple" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/custard-apple">Custard apple</a></h6>
                                    </div>
                                    <div className="card-2 bg-10 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".10s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/strawberry"><img src="media/categories/main/imgs/cat-2_gcBQ13i.png"
                                                width="80" height="80" alt="Strawberry" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/strawberry">Strawberry</a></h6>
                                    </div>
                                    <div className="card-2 bg-11 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".11s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/vegetables"><img src="media/categories/main/imgs/cat-1_aibGMBs.png"
                                                width="80" height="80" alt="Vegetables" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/vegetables">Vegetables</a></h6>
                                    </div>
                                    <div className="card-2 bg-12 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".12s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/books"><img src="media/categories/main/imgs/Books_c4668124e2.webp"
                                                width="80" height="80" alt="Books" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/books">Books</a></h6>
                                    </div>
                                    <div className="card-2 bg-13 wow animate__animated animate__fadeInUp slick-slide slick-active" data-wow-delay=".13s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/motorcycles"><img
                                                src="media/categories/main/imgs/71d3c3fba2e3a827377be873ccbd06ea.webp"
                                                width="80" height="80" alt="Motorcycles" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/motorcycles">Motorcycles</a></h6>
                                    </div>
                                    <div className="card-2 bg-14 wow animate__animated animate__fadeInUp slick-slide slick-cloned" data-wow-delay=".14s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/health"><img
                                                src="media/categories/main/imgs/58f64b7c18e374c8405b98d6972a7b75.webp"
                                                width="80" height="80" alt="Health" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/health">Health</a></h6>
                                    </div>
                                    <div className="card-2 bg-15 wow animate__animated animate__fadeInUp slick-slide slick-cloned" data-wow-delay=".15s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/snack"><img src="media/categories/main/imgs/cat-3_1.png" width="80"
                                                height="80" alt="Snack" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/snack">Snack</a></h6>
                                    </div>
                                    <div className="card-2 bg-16 wow animate__animated animate__fadeInUp slick-slide slick-cloned" data-wow-delay=".16s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/clothing"><img
                                                src="media/categories/main/imgs/Books_c4668124e2_1.webp" width="80" height="80"
                                                alt="Clothing" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/clothing">Clothing</a></h6>
                                    </div>
                                    <div className="card-2 bg-17 wow animate__animated animate__fadeInUp slick-slide slick-cloned" data-wow-delay=".17s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/mobile-phones-tablets"><img
                                                src="media/categories/main/imgs/034fdb3fb17a294dfe7bf82b50877fac.webp"
                                                width="80" height="80" alt="Mobile Phones &amp; Tablets" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/mobile-phones-tablets">Mobile Phones &amp; Tablets</a></h6>
                                    </div>
                                    <div className="card-2 bg-18 wow animate__animated animate__fadeInUp slick-slide slick-cloned" data-wow-delay=".18s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/red-apple"><img src="media/categories/main/imgs/cat-9_Ks6xB71.png"
                                                width="80" height="80" alt="Red Apple" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/red-apple">Red Apple</a></h6>
                                    </div>
                                    <div className="card-2 bg-19 wow animate__animated animate__fadeInUp slick-slide slick-cloned" data-wow-delay=".19s" style={{ width: '137px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href="/shop/main/fitness-training"><img
                                                src="media/categories/main/imgs/6545d863ea55fbd4863b2c4087825c64_1.webp"
                                                width="80" height="80" alt="Fitness &amp; Training" /></a>
                                        </figure>
                                        <h6><a href="/shop/main/fitness-training">Fitness &amp; Training</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default PopularCategory