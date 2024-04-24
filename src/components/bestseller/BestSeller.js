import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './BestSeller.css'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", top: 230,
        right: 0, width: '40px', height: '40px', fontSize: '40px'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", top: 230, left: 10,
        width: '40px', height: '40px', zIndex: '10'
      }}
      onClick={onClick}
    />
  );
}


function BestSeller() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 1222200,
    autoplay: true,

  };

  const [data, setData] = useState();
  const [item, setitem] = useState();
  const API_URL = "http://127.0.0.1:8000/"

  const getusers = () => {
    axios.get("http://127.0.0.1:8000/api/v1/bestsell")
      .then(response => setData(response))
      .catch(err => console.log(err))
  }

  const supplierusers = () => {
    axios.get("http://127.0.0.1:8000/api/v1/supplier")
      .then(response => setitem(response))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getusers();
    supplierusers();
  }, []);

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {item && item.data.data.map((data) => (
              <div className="col-lg-3 col-md-6" key={data.slug} >
                <div
                  className="banner-img style-6 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <img style={{ width: "400px", height: "180px" }} src={`${API_URL + data.image}`} alt="" />
                  <div className="banner-text">
                    <a href="product-details.html">
                      <h6 className="mb-10 mt-30">
                        {data.title}
                      </h6>
                    </a>
                    <a href="product-details.html">
                      <p>Go to supplier</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 
      <section className="section-padding pb-5">
        <div className="container">
          <div className="section-title wow animate__animated animate__fadeIn">
            <h3 className="">Daily Best Sells</h3>
          </div>
          <div className="row" style={{

            height: "520px",

          }}>
            <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
              <div
                className="banner-img style-2"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  height: "520px",
                  background: `url(media/ads/daily/banner-4.png) no-repeat center bottom`,
                  backgroundSize: "cover",
                  width: "100%",
                }}
              >
                <div className="banner-text">
                  <h2 className="mb-100">Bring nature into your home</h2>
                  <a href="product-details.html" className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-9 slider-2 col-md-12 wow animate__animated animate__fadeIn position-relative"
              data-wow-delay=".4s"
            >
              <Slider {...settings}>
                {data && data.data.data.map((item) => (
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <a href="/product-details/test-1">
                          <img
                            className="default-img"
                            src={`${API_URL + item.bestsell}`}
                            alt="test 1"
                          />
                          <img
                            className="hover-img"
                            src={`${API_URL + item.bestsell}`}
                            alt="test 1"
                          />
                        </a>
                      </div>
                      <div className="product-action-1"></div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="/shop/super/food-beverage">
                          {item.title}
                        </a>
                      </div>
                      <h2>
                        <a href="/product-details/test-1">{item.subtitle}</a>
                      </h2>
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <div className="product-price mt-10">
                        <span>₹ {item.price}</span>
                      </div>
                      <div className="sold mt-15 mb-15"></div>
                      <a
                        href="/product-details/test-1"
                        className="btn w-100 hover-up"
                      >
                        <i className="fi-rs-eye"></i> View
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default BestSeller;
