import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Health = () => {
    return (
        <div>
            <Header/>
            <main className="main">
                <div className="page-header mt-30 mb-50">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <h1 className="mb-15">Health &amp; Personal Care</h1>
                                    <div className="breadcrumb">
                                        <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                                        <span></span> Shop <span></span> Health &amp; Personal Care
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
                        <div className="categories-dropdown-wrap col-lg-1-5 primary-sidebar sticky-sidebar">
                            <div className="sidebar-widget widget-category-2 mb-30">
                                <h5 className="section-title style-1 mb-30">Main Category</h5>
                                <ul className="ul-category">
                                    <li value="30">
                                        <a href="/shop/main/health"> <img src="media/categories/main/imgs/58f64b7c18e374c8405b98d6972a7b75.webp" alt="Health" />Health</a>
                                    </li>
                                </ul>
                            </div>


                            <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                <h5 className="section-title style-1 mb-30">New products</h5>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="media/products/imgs/product-10-1.jpg" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice">Seeds of Chan…</a></h5>
                                        <p className="price mb-0 mt-5">$12.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{width: "0%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="media/products/imgs/product-6-1.jpg" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/blue-diamond-almonds-lightly-salted-vegetables">Blue Diamond …</a></h5>
                                        <p className="price mb-0 mt-5">$14.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{width: "40%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="media/products/imgs/product-5-1.jpg" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/chobani-complete-vanilla-greek-yogurt">Chobani Compl…</a></h5>
                                        <p className="price mb-0 mt-5">$14.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{width: "60%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <img src="media/ads/shop-ad/banner-11.png" alt="" /> </a>
                                <div className="banner-text">
                                    <span>selem</span>
                                    <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <h4>
                                        Save 17% on Oganic Juice
                                    </h4></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Health