
import axios from "axios";
import React, { useEffect, useState } from "react";

function Banner() {

    const [data, setData] = useState();
    const API_URL = "http://127.0.0.1:8000/";

    const getusers = () => {
        axios.get("http://127.0.0.1:8000/api/v1/feabanner")
            .then(response => setData(response))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getusers();
    }, []);

    return (
        <section className="banners mb-25">
            <div className="container">
                <div className="row">
                    {data && data.data.data.map((item) => (
                        <div className="col-lg-4 col-md-6" >
                            <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <img style={{width:"500px" , height:"400px"}} src={`${API_URL + item.image}`} alt="" />
                                <div className="banner-text">
                                    <h4 style={{marginTop:"200px"}}>
                                       {item.title}
                                    </h4>
                                    <a href="product-details.html" className="btn btn-xs">Shop Now <i
                                        className="fi-rs-arrow-small-right"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Banner