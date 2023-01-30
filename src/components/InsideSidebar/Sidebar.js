import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="col-lg-3 primary-sidebar sticky-sidebar" style={{ position: "sticky" }}>
                <div className="widget-area">

                    <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                        <h5 className="section-title style-1 mb-30">New products</h5>
                        <div className="single-post clearfix">
                            <div className="image">
                                <img src="media/products/imgs/product-9-1.jpg" width="80" height="80" style={{ width: "80px", height: "80px" }} alt="All Natural Italian-Style Chicken Meatballs" />
                            </div>
                            <div className="content pt-10">
                                <h6><a href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice-myixb">All Natural I…</a></h6>
                                <p className="price mb-0 mt-5">$12.0</p>
                                <div className="product-rate">
                                    <div className="product-rating" style={{ width: "80%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="single-post clearfix">
                            <div className="image">
                                <img src="media/products/imgs/product-6-1.jpg" width="80" height="80" style={{ width: "80px", height: "80px" }} alt="Blue Diamond Almonds Lightly Salted Vegetables" />
                            </div>
                            <div className="content pt-10">
                                <h6><a href="/product-details/blue-diamond-almonds-lightly-salted-vegetables">Blue Diamond …</a></h6>
                                <p className="price mb-0 mt-5">$14.0</p>
                                <div className="product-rate">
                                    <div className="product-rating" style={{ width: "40px" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="single-post clearfix">
                            <div className="image">
                                <img src="media/products/imgs/product-7-1.jpg" width="80" height="80" style={{ width: "80px", height: "80px" }} alt="Foster Farms Takeout Crispy classNameic Buffalo Wings" />
                            </div>
                            <div className="content pt-10">
                                <h6><a href="/product-details/foster-farms-takeout-crispy-classNameic-buffalo-wings">Foster Farms …</a></h6>
                                <p className="price mb-0 mt-5">$14.0</p>
                                <div className="product-rate">
                                    <div className="product-rating" style={{ width: "67%" }}></div>
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
        </>
    )
}

export default Sidebar