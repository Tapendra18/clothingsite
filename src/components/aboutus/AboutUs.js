import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const AboutUs = () => {
    return (
        <div>
            <Header/>
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Pages <span></span> About Us
                        </div>
                    </div>
                </div>
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                                            <div className="single-header style-2">
                                                <h2>About Us</h2>

                                            </div>
                                            <div className="single-content mb-50">
                                                <p>We are a team of enthusiastic entrepreneurs who decided to convert their common experience into this web store.<br />
                                                    <br />
                                                    We hope you&rsquo;ll like it as much as we do and have a great shopping experience here.<br />
                                                    <br />
                                                    Our prime goal is to create a shop in which you can easily find whatever product you need.<br />
                                                    <br />
                                                    You can always contact us for any return question at <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c8a1a6aea788bcadbbbce6aba7a5">[email&#160;protected]</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                        <div className="widget-area">

                                            <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                                <h5 className="section-title style-1 mb-30">New products</h5>
                                                <div className="single-post clearfix">
                                                    <div className="image">
                                                        <img src="media/products/imgs/product-5-1.jpg" width="80" height="80" style={{width:"80px",height:"80px"}} alt="Chobani Complete Vanilla Greek Yogurt" />
                                                    </div>
                                                    <div className="content pt-10">
                                                        <h6><a href="product-details/chobani-complete-vanilla-greek-yogurt">Chobani Compl…</a></h6>
                                                        <p className="price mb-0 mt-5">$14.0</p>
                                                        <div className="product-rate">
                                                            <div className="product-rating" style={{width: "60%"}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post clearfix">
                                                    <div className="image">
                                                        <img src="media/products/imgs/product-4-1.jpg" width="80" height="80" style={{width:"80px",height:"80px"}} alt="Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g" />
                                                    </div>
                                                    <div className="content pt-10">
                                                        <h6><a href="product-details/canada-dry-ginger-ale-2-l-bottle-200ml-400g">Canada Dry Gi…</a></h6>
                                                        <p className="price mb-0 mt-5">$15.0</p>
                                                        <div className="product-rate">
                                                            <div className="product-rating" style={{width: "80%"}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post clearfix">
                                                    <div className="image">
                                                        <img src="media/products/imgs/product-7-1.jpg" width="80" height="80" style={{width:"80px",height:"80px"}} alt="Foster Farms Takeout Crispy classNameic Buffalo Wings" />
                                                    </div>
                                                    <div className="content pt-10">
                                                        <h6><a href="product-details/foster-farms-takeout-crispy-classNameic-buffalo-wings">Foster Farms …</a></h6>
                                                        <p className="price mb-0 mt-5">$14.0</p>
                                                        <div className="product-rate">
                                                            <div className="product-rating" style={{width: "67%"}}></div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutUs