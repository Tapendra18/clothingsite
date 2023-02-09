import React, { useState, useEffect } from "react";
import axios from "axios";

function DayDeal() {

    const [data, setData] = useState();
    const [item, setItem] = useState();
    const API_URL = "http://127.0.0.1:8000/";
    const API_URL2 = "http://127.0.0.1:8000/";

    const getTopsell = () => {
        axios.get("http://127.0.0.1:8000/api/v1/topsell")
            .then(response => setItem(response))
            .catch(err => console.log(err))
    }

    const getusers = () => {
        axios.get("http://127.0.0.1:8000/api/v1/daydeal")
            .then(response => setData(response))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getusers();
        getTopsell();
    }, []);
    return (
        <>
            <section className="section-padding pb-5">
                <div className="container">
                    <div className="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                        <h3 className="">Deals Of The Day</h3>
                        <a className="show-all" href="/shop/">
                            All Deals
                            <i className="fi-rs-angle-right"></i>
                        </a>
                    </div>

                    <div className="row">
                        {data && data.data.data.map((item) => (
                            <div className=" col-xl-3 col-lg-4 col-md-6">
                                <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img src={`${API_URL + item.image}`} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="deals-countdown-wrap">
                                            <div className="deals-countdown" data-countdown="2022/08/31 00:45:04"></div>
                                        </div>
                                        <div className="deals-content">
                                            <h2><a href="product-details.html">{item.title}</a></h2>

                                            <div>
                                                <span className="font-small text-muted">By <a
                                                    href=" /vendor-details/selem">{item.company}</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>{item.price}</span>
                                                    <span className="old-price">{item.discount}</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className="add" href="product-details.html"><i
                                                        className="fi-rs-shopping-cart mr-5"></i>View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            </section>

            <section className="section-padding mb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
                            data-wow-delay="0">
                            <h4 className="section-title style-1 mb-30 animated animated">Top Selling</h4>

                            <div className="product-list-small animated animated">
                                {item && item.data.data.map((datas) => (
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="/product-details/test-1"><img
                                                src={`${API_URL2 + datas.image}`} alt="test 1" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="/product-details/test-1">{datas.title}</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '40%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (1)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>{datas.price}</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp"
                            data-wow-delay=".1s">
                            <h4 className="section-title style-1 mb-30 animated animated">Trending Products</h4>
                            <div className="product-list-small animated animated">
                                {item && item.data.data.map((datae) => (
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="/product-details/gortons-beer-battered-fish-fillets-with-soft-paper"><img
                                                src={`${API_URL2 + datae.image}`}
                                                alt="Gorton’s Beer Battered Fish Fillets with soft paper" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="/product-details/gortons-beer-battered-fish-fillets-with-soft-paper">Gorton’s
                                                    {datae.title}</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '60%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (1)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>{datae.price}</span>
                                                <span className="old-price">USD19.0</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp"
                            data-wow-delay=".2s">
                            <h4 className="section-title style-1 mb-30 animated animated">Recently added</h4>
                            <div className="product-list-small animated animated">
                                {item && item.data.data.map((datae) => (
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="/product-details/test-1"><img
                                                src={`${API_URL2 + datae.image}`} alt="test 1" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="/product-details/test-1">{datae.title}</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '40%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (1)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>{datae.price}</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp"
                            data-wow-delay=".3s">
                            <h4 className="section-title style-1 mb-30 animated animated">Top Rated</h4>
                            <div className="product-list-small animated animated">
                                {item && item.data.data.map((datae) => (
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="/product-details/test-1"><img
                                                src={`${API_URL2 + datae.image}`} alt="test 1" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="/product-details/test-1">{datae.title}</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '40%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (1)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>{datae.price}</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DayDeal