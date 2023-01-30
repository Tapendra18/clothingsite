import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Sidebar from '../InsideSidebar/Sidebar'

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
                                    <Sidebar/>
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