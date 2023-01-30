import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../InsideSidebar/Sidebar';

const RefundPolicy = () => {
    return (
        <div>
            <Header/>
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Pages <span></span> Refund Policy
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
                                                <h2>Refund Policy</h2>

                                            </div>
                                            <div className="single-content mb-50">
                                                <p>We make our themes with extreme care and launch them only after thorough-repeated testing, so we strongly believe that our products will work without any issue. If you find any issue, we are available to help you solve the issue resulting from any number of reasons.</p>
                                                <p>In the case the theme(s) you purchased didn&rsquo;t work properly as advertised and we couldn&rsquo;t resolve the issue, we, AliThemes, will offer a full refund within 15 days of the purchase. However, since the themes are digitally delivered and are non-tangible goods, we can offer refund full or partial only if the item(s) you purchased is broken, not working properly, or truly missing features as advertised on the sales page of the item(s) you purchased.</p>
                                                <p>Issues caused by third-party plugins, themes, or other software will not provide grounds for a refund.</p>
                                                <p>Refunds will be offered at our sole discretion.</p>
                                                <p>If the refund is for theme renewal and you are within first 30 days of the renewal, then please get in touch with our support team and our support team will issue the refund.</p>
                                                <p>Conditions for a refund for new purchase (not renewal)</p>
                                                <p>You must meet ALL of the following conditions:</p>
                                                <ul>
                                                    <li>You are within the first 15 days of the purchase of the item.</li>
                                                    <li>Your issue(s) comes from not being able to install the theme properly or get the theme to perform its basic functions.</li>
                                                    <li>You have attempted to resolve your issue(s) with our support team.</li>
                                                    <li>No refunds will be granted after the first 15 days of the original purchase whatsoever.</li>
                                                    <li>Issues caused by third party plugins, themes or other software will not provide grounds for a refund.</li>
                                                    <li>Issues related to Demo Import will not provide grounds for a refund because Demo Import depends on the hosting service.</li>
                                                </ul>
                                                <p>Refund will not be given for Theme Club purchase. If you&rsquo;re not sure whether a product is right for you, please contact us with your questions before making a purchase. We will be happy to assist you.</p>
                                                <p>Due to the nature of digital goods, we recognize that this policy can be abused, and reserve the right to refuse refunds if we determine the refund policy is being taken advantage of.</p>
                                                <p>By purchasing a theme(s) and/or a plugin(s) from our website, you agree to this refund policy and relinquish any rights to subject it to any questions, judgment, or legal actions.</p>
                                                <p><strong>- AliThemes -</strong></p>
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

export default RefundPolicy