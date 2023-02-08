import React, { useState, useEffect } from "react";
import './products.css';
import axios from "axios";

function Products() {

    const [data, setData] = useState();
    console.log(data, "prodddducc");
    const API_URL = "http://127.0.0.1:8000/"
    console.log(data);

    const getusers = () => {
        axios.get("http://127.0.0.1:8000/api/v1/bestsell")
            .then(response => setData(response))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getusers();
    }, []);

    return (
        <section className="product-tabs section-padding position-relative">
            <div className="container">
                <div className="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>Popular Products</h3>
                </div>

                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div className="row product-grid-4">
                            {data && data.data.data.map((item) => (
                                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 popular">
                                    <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                        data-wow-delay=".0s">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn">
                                                    <img className="default-img" src={`${API_URL + item.bestsell}`}
                                                        alt="Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn" />
                                                    <img className="hover-img" src={`${API_URL + item.bestsell}`}
                                                        alt="Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Hot</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="/shop/super/food-beverage">{item.title}</a>
                                            </div>
                                            <a href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn">{item.subtitle}</a>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '50%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (2)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a
                                                    href="/vendor-details/hambger">Hambger Hel</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>{item.price}</span>
                                                    <span className="old-price">USD16.0</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className="add"
                                                        href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn"><i
                                                            className="fi-rs-eye mr-5"></i>View </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;