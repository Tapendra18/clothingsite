import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import axios from 'axios';

const Kidtshirt = () => {

    const [data, setData] = useState();
    const API_URL = "http://127.0.0.1:8000/";

    const getitem = () => {
        axios.get("http://127.0.0.1:8000/api/v1/kid/tshirt/:slug")
            .then(response => setData(response))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getitem();
    }, []);

    return (
        <div>
            <Header />
            <main className="main">
                <div className="page-header mt-30 mb-50">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <h1 className="mb-15">Custard apple</h1>
                                    <div className="breadcrumb">
                                        <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                                        <span></span> Shop <span></span> Custard apple
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4-5">
                            <div className="shop-product-fillter">
                                <div id="product-num" className="totall-product">
                                    <p>We found <strong className="text-brand">0</strong> items for you!</p>
                                </div>
                                <div className="sort-by-product-area">
                                    <div className="sort-by-cover">
                                        <div className="sort-by-product-wrap">
                                            <div className="sort-by">
                                                <span><i className="fi-rs-apps-sort"></i>Sort by:</span>
                                            </div>
                                            <div className="sort-by-dropdown-wrap">
                                                <select className="sorting mySelect" id="mySelect">
                                                    <option value="-date" selected>Date, new to old</option>
                                                    <option value="date">Date, old to new</option>
                                                    <option value="PRDPrice">Price, low to high</option>
                                                    <option value="-PRDPrice">Price, high to low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="products-list" className="row product-grid">
                            </div>

                            <div className="pagination-area mt-20 mb-20">
                                <nav aria-label="Page navigation example">
                                    <div id="spinner-box" className="not-visible  text-center">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only"></span>
                                        </div>
                                    </div>
                                    <div id="empty-box" className="not-visible  text-center">
                                    </div>
                                    <div id="loading-box" className="text-center">
                                        <button id="load-btn" type="button" className="btn btn-success">Load More</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                                <div className="row product-grid-4">
                                    {data && data.data.data.map((item) => (
                                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 popular">
                                            <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                                data-wow-delay=".0s">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href={item.slug}>
                                                            <img className="default-img" src={`${API_URL + item.image}`}
                                                                alt="Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn" />

                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Hot</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    {/* <div className="product-category">
                                                        <a href={item.slug}>{item.title} </a>
                                                    </div> */}
                                                    <a href={item.slug}>{item.title}</a>
                                                    <div className="product-rate-cover">
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: '50%' }}></div>
                                                        </div>
                                                        <span className="font-small ml-5 text-muted"> (2.5)</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-small text-muted">By <a
                                                            href="/vendor-details/hambger">dhaman dokhla</a></span>
                                                    </div>
                                                    <div className="product-card-bottom">
                                                        <div className="product-price">
                                                            <span>{item.price}</span>
                                                            <span className="old-price">{item.discount}</span>
                                                        </div>
                                                        {/* <div className="add-cart">
                                                    <button className="add"
                                                        onClick={handleAddToCart}
                                                        type="button"
                                                        key={item._id}

                                                    ><i
                                                        className="fi-rs-eye mr-5"></i>{added ? 'Add to cart ' : 'view'} </button>
                                                </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="categories-dropdown-wrap col-lg-1-5 primary-sidebar sticky-sidebar">
                            {/* <div className="sidebar-widget widget-category-2 mb-30">
                                <h5 className="section-title style-1 mb-30">Sub Category</h5>
                                <ul className="ul-category">
                                    <li value="7">
                                        <a href="/shop/sub/fruits"> <img src=" /static/assets/imgs/theme/icons/category-1.svg " alt="Fruits" />Fruits</a>
                                    </li>
                                </ul>
                            </div> */}


                            {/* <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                <h5 className="section-title style-1 mb-30">New products</h5>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="/media/products/imgs/product-5-1.jpg" style={{ width: "80px", height: "80px" }} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/chobani-complete-vanilla-greek-yogurt">Chobani Compl…</a></h5>
                                        <p className="price mb-0 mt-5">$14.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: "60%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="/media/products/imgs/product-4-1.jpg" style={{ width: "80px", height: "80px" }} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/canada-dry-ginger-ale-2-l-bottle-200ml-400g">Canada Dry Gi…</a></h5>
                                        <p className="price mb-0 mt-5">$15.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: "80%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="/media/products/imgs/product-8-1.jpg" style={{ width: "80px", height: "80px" }} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn">Angie’s Boomc…</a></h5>
                                        <p className="price mb-0 mt-5">$15.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: "50%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <img src="/media/ads/shop-ad/banner-11.png" alt="" /> </a>
                                <div className="banner-text">
                                    <span>selem</span>
                                    <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <h4>
                                        Save 17% on Oganic Juice
                                    </h4></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Kidtshirt;