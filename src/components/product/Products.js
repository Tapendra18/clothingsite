import React, { useState, useEffect } from "react";
import './products.css';
import axios from "axios";
import { additem } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

function Products(props) {
    const [data, setData] = useState();
    const [addtoCart, setAddtoCart] = useState({});
    const API_URL = "http://127.0.0.1:8000/"

    const getusers = () => {
        axios.get("http://127.0.0.1:8000/api/v1/bestsell")
            .then(response => setData(response?.data?.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getusers();
    }, []);

    const [added, isAdded] = useState(false);
    console.log(added , "added")
    const dispatch = useDispatch();
    // const { img, rating, title, price } = props;


    const handleAddToCart = async (items) => {
        console.log(items, "addto Cart")
        const item = {...props}
        try{
           await dispatch(additem(item));
           setAddtoCart(items);
           isAdded(true);
          
        }catch{
            isAdded(false);
        }
        console.log("ssddjdjdjdfjskfffffffffff")
        setTimeout(() => {
        console.log("ssddjdjdjdfjskfffffffffff")
            isAdded(false);
        }, 3000);
    }

    return (
        <section className="product-tabs section-padding position-relative">
            <div className="container">
                <div className="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>Popular Products</h3>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div className="row product-grid-4">
                            {data && data?.map((item) => (
                                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 popular">
                                    <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                        data-wow-delay=".0s">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn">
                                                    <img className="default-img" src={`${API_URL + item.bestsell}`}
                                                        alt={`${item.title}`} />
                                                    <img className="hover-img" src={`${API_URL + item.bestsell}`}
                                                        alt={`${item.title}`} />
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
                                                <a href="/productdetail">{item.title} </a>
                                            </div>
                                            <a href="/productdetail">{item.subtitle}</a>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '50%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (2.5)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a
                                                    href="/vendor-details/hambger">dhaman dokhla</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>{item.price}</span>
                                                    <span className="old-price">150</span>
                                                </div>
                                                <div className="add-cart">
                                                    <button className="add"
                                                        onClick={(e)=> handleAddToCart(item)}
                                                        type="button"
                                                        key={item._id}

                                                    ><i
                                                        className="fi-rs-eye mr-5"></i>{item?._id === addtoCart?._id ? 'Add to cart ' : 'view'} </button>
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