import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header';
import axios from 'axios';

function VendorStore() {

    const [data, setData] = useState();
    const API_URL = "http://127.0.0.1:8000/";

    const getusers = () => {
        axios.get("http://127.0.0.1:8000/api/v1/vendorstore")
            .then(response => setData(response))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getusers();
    }, []);



    return (
        <>
            <Header />
            <main className="main pages mb-80">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Vendors List
                        </div>
                    </div>
                </div>
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="archive-header-2 text-center">
                            <h1 className="display-2 mb-50">Vendors List</h1>

                        </div>
                        <div className="row mb-50">
                            {
                                data && data.data.data.map((item) => (
                                    // <div className="col-12 col-lg-8 mx-auto">
                                    //      <div className="product-img product-img-zoom">
                                    //             <a href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn">
                                    //                 <img className="default-img" src={`${API_URL + item.image}`}
                                    //                     alt="Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn" />
                                    //             </a>
                                    //         </div>
                                    //     <div className="shop-product-fillter">
                                    //         <div className="totall-product">
                                    //             <p>{item.year} <strong id="vendors-number" className="text-brand">{item.company}</strong> {item.address}</p>
                                    //         </div>

                                    //     </div>
                                    // </div>
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 popular">
                                    <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                        data-wow-delay=".0s">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn">
                                                    <img className="default-img" src={`${API_URL + item.image}`}
                                                        alt="Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="/shop/super/food-beverage">{item.year} </a>
                                            </div>
                                            <a href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn">{item.company}</a>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '50%' }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <a
                                                    href="/vendor-details/hambger">{item.address}</a>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>{item.contact}</span>
                                                   
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }

                        </div>
                        <div id="vendors-list" className="row vendor-grid">
                        </div>
                        <div className="pagination-area mt-20 mb-20">
                            <nav aria-label="Page navigation example">
                                <div id="spinner-box" className="not-visible text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                </div>
                                <div id="empty-box" className="not-visible  text-center">
                                </div>
                                <div id="loading-box" className="not-visible text-center">
                                    <button id="load-btn" type="button" className="btn btn-success">Load More</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default VendorStore;