import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const OfficeStationary = () => {
    return (
        <div>
            <Header/>
            <main class="main">
                <div class="page-header mt-30 mb-50">
                    <div class="container">
                        <div class="archive-header">
                            <div class="row align-items-center">
                                <div class="col-xl-3">
                                    <h1 class="mb-15">Office &amp; Stationery</h1>
                                    <div class="breadcrumb">
                                        <a href="/" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                                        <span></span> Shop <span></span> Office &amp; Stationery
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mb-30">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-4-5">
                            <div class="shop-product-fillter">
                                <div id="product-num" class="totall-product">
                                    <p>We found <strong class="text-brand">0</strong> items for you!</p>
                                </div>
                                <div class="sort-by-product-area">
                                    <div class="sort-by-cover">
                                        <div class="sort-by-product-wrap">
                                            <div class="sort-by">
                                                <span><i class="fi-rs-apps-sort"></i>Sort by:</span>
                                            </div>
                                            <div class="sort-by-dropdown-wrap">
                                                <select class="sorting mySelect" id="mySelect">
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
                            <div id="products-list" class="row product-grid">
                            </div>

                            <div class="pagination-area mt-20 mb-20">
                                <nav aria-label="Page navigation example">
                                    <div id="spinner-box" class="not-visible  text-center">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only"></span>
                                        </div>
                                    </div>
                                    <div id="empty-box" class="not-visible  text-center">
                                    </div>
                                    <div id="loading-box" class="text-center">
                                        <button id="load-btn" type="button" class="btn btn-success">Load More</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="categories-dropdown-wrap col-lg-1-5 primary-sidebar sticky-sidebar">
                            <div class="sidebar-widget widget-category-2 mb-30">
                                <h5 class="section-title style-1 mb-30">Main Category</h5>
                                <ul class="ul-category">
                                    <li value="26">
                                        <a href="/shop/main/books"> <img src="/media/categories/main/imgs/Books_c4668124e2.webp" alt="Books" />Books</a>
                                    </li>
                                </ul>
                            </div>


                            <div class="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                <h5 class="section-title style-1 mb-30">New products</h5>
                                <div class="single-post clearfix">
                                    <div class="image">
                                        <img src="/media/products/imgs/product-5-1.jpg" width="80" height="80" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div class="content pt-10">
                                        <h5><a href="/product-details/chobani-complete-vanilla-greek-yogurt">Chobani Compl…</a></h5>
                                        <p class="price mb-0 mt-5">$14.0</p>
                                        <div class="product-rate">
                                            <div class="product-rating" style={{width: "60%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-post clearfix">
                                    <div class="image">
                                        <img src="/media/products/imgs/product-6-1.jpg" width="80" height="80" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div class="content pt-10">
                                        <h5><a href="/product-details/blue-diamond-almonds-lightly-salted-vegetables">Blue Diamond …</a></h5>
                                        <p class="price mb-0 mt-5">$14.0</p>
                                        <div class="product-rate">
                                            <div class="product-rating" style={{width: "40%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-post clearfix">
                                    <div class="image">
                                        <img src="/media/products/imgs/product-4-1.jpg" width="80" height="80" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div class="content pt-10">
                                        <h5><a href="/product-details/canada-dry-ginger-ale-2-l-bottle-200ml-400g">Canada Dry Gi…</a></h5>
                                        <p class="price mb-0 mt-5">$15.0</p>
                                        <div class="product-rate">
                                            <div class="product-rating" style={{width: "80%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <img src="/media/ads/shop-ad/banner-11.png" alt="" /> </a>
                                <div class="banner-text">
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

export default OfficeStationary