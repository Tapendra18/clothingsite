import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';

const CategoryList = () => {

    const [data, setData] = useState();
    const [subcategories, setsubcategories] = useState();
    console.log(subcategories, "subbbbbbbb");

    const API_URL = "http://127.0.0.1:8000/"

    const category = () => {
        axios.get("http://127.0.0.1:8000/api/v1/category")
            .then(response => setData(response))
            .catch(err => console.log(err))
    }

    const subcategory = () => {
        axios.get("http://127.0.0.1:8000/api/v1/subcategory")
            .then(response => setsubcategories(response))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        category();
        subcategory();
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <div className="page-header mt-30 mb-50">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <h1 className="mb-15">Categories</h1>
                                    <div className="breadcrumb">
                                        <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                                        <span></span> All Categories
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4-5">
                            <div className="row product-grid">
                                {data && data.data.data.map((item) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp  mb-60" data-wow-delay="0" key={data.id}>
                                        <a href="/shop/super/food-beverage"><h4 className="section-title style-1 mb-30 animated animated">{item.title}</h4></a>
                                        <div className="product-list-small animated animated">
                                            {subcategories && subcategories.data.data.map((data) => (
                                                <article className="row align-items-center hover-up" key={data.id}>
                                                    <figure className="col-md-4 mb-0">
                                                        <a href=""><img src={`${API_URL + data.thumbnail}`} alt=" Custard apple" /></a>
                                                    </figure>
                                                    <div className="col-md-8 mb-0">
                                                        <h6>
                                                            <a href="/shop/main/custard-apple">{data.title}</a>
                                                        </h6>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default CategoryList 