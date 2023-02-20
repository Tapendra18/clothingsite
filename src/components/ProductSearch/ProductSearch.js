import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const ProductSearch = () => {
    return (
        <div>
            <Header/>
            <main className="main pages mb-80">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Products List
                        </div>
                    </div>
                </div>
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="archive-header-2 text-center">
                            <h1 className="display-2 mb-50">Products List</h1>
                            <div className="row">
                                <div className="col-lg-5 mx-auto">
                                    <div className="sidebar-widget-2 widget_search mb-50">
                                        <div className="search-form">
                                            <form action="/product-search/" method="post">
                                                <input type="hidden" name="csrfmiddlewaretoken" value="ZNNQQUpA9JBhcXZXgyaHBvn2P38J9XIbxDw3DN8TDlGbOI4KGYw39VjQ5hLTAkU4"/>
                                                    <input name="search-product" type="text" placeholder="Search Items (by name)..." autocomplete="off" required />
                                                    <button type="submit"><i className="fi-rs-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-50">
                            <div className="col-12 col-lg-8 mx-auto">
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>We have <strong id="vendors-number" className="text-brand">0</strong> items now for <strong id="vendors-number" className="text-brand">"shirt"</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="vendors-list" className="row vendor-grid">
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductSearch