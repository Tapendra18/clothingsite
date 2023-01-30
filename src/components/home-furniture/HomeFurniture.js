import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const HomeFurniture = () => {
    return (
        <div>
            <Header/>
            <main className="main">
                <div className="page-header mt-30 mb-50">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <h1 className="mb-15">Home &amp; Furniture</h1>
                                    <div className="breadcrumb">
                                        <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                                        <span></span> Shop <span></span> Home &amp; Furniture
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
                                    <li value="29">
                                        <a href="/shop/main/household-supplies"> <img src="media/categories/main/imgs/3e50c6fd349f94d6fd41961681e84725.webp" alt="Household Supplies" />Household Supplies</a>
                                    </li>
                                </ul>
                            </div>


                            <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                <h5 className="section-title style-1 mb-30">New products</h5>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="media/products/imgs/product-9-1.jpg" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice-myixb">All Natural I…</a></h5>
                                        <p className="price mb-0 mt-5">$12.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{width: "80%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="media/products/imgs/product-4-1.jpg" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="product-details/canada-dry-ginger-ale-2-l-bottle-200ml-400g">Canada Dry Gi…</a></h5>
                                        <p className="price mb-0 mt-5">$15.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{width: "80%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="media/products/imgs/product-1-1_mVTpJyf.jpg" style={{width:"80px",height:"80px"}} alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup">Haagen-Dazs C…</a></h5>
                                        <p className="price mb-0 mt-5">$13.0</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{width: "0%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <img src="/media/ads/shop-ad/banner-11.png" alt="" /> </a>
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

export default HomeFurniture