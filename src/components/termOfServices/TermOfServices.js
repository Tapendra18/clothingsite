import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../InsideSidebar/Sidebar';

const TermOfServices = () => {
    return (
        <div>
            <Header />
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Pages <span></span> Terms Of Service
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
                                                <h2>Terms Of Service</h2>

                                            </div>
                                            <div className="single-content mb-50">
                                                <p>Terms &amp; Conditions</p>
                                                <p><strong>Limitation of Liability</strong></p>
                                                <p>Under no circumstances shall AliThemes be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if AliThemes or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.</p>
                                                <p><strong>Licensing Policy</strong></p>
                                                <p>AliThemes WordPress plugins and themes are released under the GNU General Public License v2 or later.</p>
                                                <p>Please refer to licensing policy page for licensing details.</p>
                                                <p><strong>Product Compatibility</strong></p>
                                                <p>The products are developed to be compatible with the latest version of WordPress because we always strive to stay up-to-date with the latest version of WordPress. You might experience certain performance or functionality glitches with the products if you use any version prior to that.</p>
                                                <p><strong>Delivery</strong></p>
                                                <p>Your purchased product(s) information will be emailed to the email address (that you will provide) once we receive your payment. Even though this usually takes a few minutes, it may also take up to 24 hours. You can contact us through our contact page if you do not receive your email after waiting for this time period. You will also have access to your purchased products from your account in AliThemes after logging in.</p>
                                                <p><strong>Ownership</strong></p>
                                                <p>All the products are the property of AliThemes. So you may not claim ownership (intellectual or exclusive) over any of our products, modified or unmodified. Our products come &lsquo;as is&rsquo;, without any kind of warranty, either expressed or implied. Under no circumstances can our juridical person be accountable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses originating from the employment of or incapacity to use our products.</p>
                                                <p><strong>Browser Compatibility</strong></p>
                                                <p>We consider it our duty to offer a great experience across most major browsers, which is why our products support the latest modern web browsers including (but not limited to) Firefox, Safari, Chrome &amp; Internet Explorer 9+. However, the performance may vary between different browsers, versions, and operating systems.</p>
                                                <p><strong>Updates</strong></p>
                                                <p>Our themes are constantly updated to be compatible with the latest stable version of WordPress. Please ensure that you always use the most current version of our themes.</p>
                                                <p><strong>Theme Support</strong></p>
                                                <p>Please refer to Help and Support Policy page for details.</p>
                                                <p><strong>Price Changes</strong></p>
                                                <p>AliThemes reserves the right to modify or suspend (temporarily or permanently) a subscription at any point of time and from time to time with or without any notice.</p>
                                                <p><strong>Refund Policy</strong></p>
                                                <p>Please refer to Refund Policy page for details.</p>
                                                <p><strong>Email</strong></p>
                                                <p>AliThemes may occasionally send you emails related to the purchase of product(s) from our company. We may also send you occasional email newsletters relating to AliThemes updates and promotions. We will never sell or release your email to any third party vendors. You may opt out of these emails at any time without penalty.</p>
                                                <p><strong>License Agreement</strong></p>
                                                <p>By purchasing our product(s), you indicate and consent that you have read and agree to the Terms &amp; Conditions listed and detailed on this page. We reserve the right to change or modify the current Terms and Conditions without prior notice or consent.</p>
                                                <p><strong>Severability</strong></p>
                                                <p>If any part of this agreement is declared unenforceable or invalid, all remaining clauses in this agreement shall remain binding on the customer.</p>
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
            <Footer />
        </div>
    )
}

export default TermOfServices