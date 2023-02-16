import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';

const CategoryList = () => {

    // const [data, setData] = useState();
    // const [women, setwomen] = useState();
    // const [kid, setKid] = useState();


    // const API_URL = "http://127.0.0.1:8000/"
    // const API_URL2 = "http://127.0.0.1:8000/"


    // const kidusers = () => {
    //     axios.get("http://127.0.0.1:8000/api/v1/kid/:slug")
    //         .then(response => setKid(response))
    //         .catch(err => console.log(err))
    // }

    // const womenusers = () => {
    //     axios.get("http://127.0.0.1:8000/api/v1/women/:slug")
    //         .then(response => setwomen(response))
    //         .catch(err => console.log(err));
    // }

    // const getusers = () => {
    //     axios.get("http://127.0.0.1:8000/api/v1/mens")
    //         .then(response => setData(response))
    //         .catch(err => console.log(err));
    // }

    // useEffect(() => {
    //     getusers();
    //     womenusers();
    //     kidusers();
    // }, []);
    return (
        <>
            <Header />
            <main className="main">
                <div className="page-header mt-30 mb-50">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <h1 className="mb-15">Categories</h1>
                                    <div className="breadcrumb">
                                        <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                                        <span></span> All Categories
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4-5">
                            <div className="row product-grid">
                                <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp  mb-60" data-wow-delay="0">
                                    <a href="/shop/super/food-beverage"><h4 className="section-title style-1 mb-30 animated animated">men's clothing</h4></a>
                                    <div className="product-list-small animated animated">
                                        {/* {data && data.data.data.map((item) => ( */}
                                            <article className="row align-items-center hover-up">
                                                <figure className="col-md-4 mb-0">
                                                    <a href=""><img  alt=" Custard apple" />ertr</a>
                                                </figure>
                                                <div className="col-md-8 mb-0">
                                                    <h6>
                                                        <a href="/shop/main/custard-apple">fdfgfg</a>
                                                    </h6>
                                                </div>
                                            </article>
                                        {/* ))} */}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp  mb-60" data-wow-delay="0">
                                    <a href="/shop/super/beauty-fragrances"><h4 className="section-title style-1 mb-30 animated animated">Women</h4></a>
                                    <div className="product-list-small animated animated">
                                        {/* {women && women.data.data.map((item) => ( */}
                                            <article className="row align-items-center hover-up">
                                                <figure className="col-md-4 mb-0">
                                                    <a href="/shop/main/makeup"><img  alt=" Makeup" /></a>
                                                </figure>
                                                <div className="col-md-8 mb-0">
                                                    <h6>
                                                        <a > fghhg</a>
                                                    </h6>
                                                </div>
                                            </article>
                                        {/* ))} */}

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp  mb-60" data-wow-delay="0">
                                    <a href="/shop/super/consumer-electronics"><h4 className="section-title style-1 mb-30 animated animated">Kid's</h4></a>
                                    <div className="product-list-small animated animated">
                                        {/* {kid && kid.data.data.map((item) => ( */}
                                            <article className="row align-items-center hover-up">
                                                <figure className="col-md-4 mb-0">
                                                    <a href="/shop/main/mobile-phones-tablets"><img src alt=" Mobile Phones &amp; Tablets" /></a>
                                                </figure>
                                                <div className="col-md-8 mb-0">
                                                    <h6>
                                                        <a href> ghfhn</a>
                                                    </h6>
                                                </div>
                                            </article>
                                        {/* ))} */}

                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div className="categories-dropdown-wrap col-lg-1-5 primary-sidebar sticky-sidebar" style={{width :"300px" , marginLeft:"-0px"}}>
                            <div className="sidebar-widget widget-category-2 mb-30">
                                <h5 className="section-title style-1 mb-30">Category</h5>
                                <ul>
                                    <li>
                                        <a href="/shop/super/food-beverage"> <img src="media/categories/super/imgs/category-2_1.png " alt="" />Food &amp; Beverage</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/beauty-fragrances"> <img src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Beauty &amp; Fragrances</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/office-stationery"> <img src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Office &amp; Stationery</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/consumer-electronics"> <img src="media/categories/super/imgs/category-4_brSMGKb.png " alt="" />Consumer Electronics</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/fashion-accessories"> <img src="media/categories/super/imgs/category-3.png " alt="" />Fashion &amp; Accessories</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/home-furniture"> <img src="media/categories/super/imgs/category-10.png " alt="" />Home &amp; Furniture</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/health-personal-care"> <img src="static/assets/imgs/theme/icons/category-1.svg " alt="" />Health &amp; Personal Care</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/construction-hardware"> <img src="media/categories/super/imgs/icon-4.png " alt="" />Construction &amp; Hardware</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/sports-fitness"> <img src="media/categories/super/imgs/icon-3.png " alt="" />Sports &amp; Fitness</a>
                                    </li>
                                    <li>
                                        <a href="/shop/super/toys"> <img src="media/categories/super/imgs/icon-2.png " alt="" />Toys</a>
                                    </li>
                                </ul>
                                <ul className="more_slide_open mt-20" style={{ display: "none" }}>
                                    <li>
                                        <a href="/shop/super/automotive"> <img src="media/categories/super/imgs/category-4.png " alt="" />Automotive</a>
                                    </li>
                                </ul>
                                <div className="more_categories show"><span className="icon"></span> <span className="heading-sm-1">Show more...</span></div>
                            </div>

                            <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                <h5 className="section-title style-1 mb-30">New products</h5>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="/media/products/imgs/product-2-1.jpg" style={{ width: "80px", height: "80px" }} alt="Gorton’s Beer Battered Fish Fillets with soft paper" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/gortons-beer-battered-fish-fillets-with-soft-paper">Gorton’s Beer…</a></h5>
                                        <p className="price mb-0 mt-5">$16.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: "60%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="/media/products/imgs/product-3-1.jpg" style={{ width: "80px", height: "80px" }} alt="Encore Seafoods Stuffed Alaskan Salmon" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/encore-seafoods-stuffed-alaskan-salmon">Encore Seafoo…</a></h5>
                                        <p className="price mb-0 mt-5">$17.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: "50%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="media/products/imgs/product-6-1.jpg" style={{ width: "80px", height: "80px" }} alt="Blue Diamond Almonds Lightly Salted Vegetables" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/blue-diamond-almonds-lightly-salted-vegetables">Blue Diamond …</a></h5>
                                        <p className="price mb-0 mt-5">$14.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: "40%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <img src="media/ads/shop-ad/banner-11.png" style={{ width: "400px", height: "400px" }} alt="" /> </a>
                                <div className="banner-text">
                                    <span>selem</span>
                                    <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <h4>
                                        Save 17% on Oganic Juice
                                    </h4></a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default CategoryList 