import React, { useEffect, useState } from "react";
import "./PopularCategory.css";
import Slider from "react-slick";
import axios from "axios";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", top: -50,
        right: 0, width: '40px', height: '40px', fontSize: '30px'
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
        display: "block", top: -50,
        right: 10, width: '40px', height: '40px',
      }}
      onClick={onClick}
    />
  );
}


function PopularCategory() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [data, setData] = useState();
  const API_URL = "http://127.0.0.1:8000/"

  const getusers = () => {
    axios.get("http://127.0.0.1:8000/api/v1/categoryfeature")
      .then(response => setData(response))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getusers();
  }, []);

  
  return (
    <section className="popular-categories section-padding">
      <div className="container wow animate__animated animate__fadeIn">
        <div className="hello position-relative">
          <div className="title mb-5">
            <h3 className="d-inline me-5">Featured Categories</h3>
            <ul className="list-inline nav nav-tabs links d-inline">
              <li className="list-inline-item nav-item">
                <a className="nav-link" href="/shop/super/automotive">
                  Automotive
                </a>
              </li>
              <li className="list-inline-item nav-item">
                <a className="nav-link" href="/shop/super/office-stationery">
                  Office &amp; Stationery
                </a>
              </li>
              <li className="list-inline-item nav-item">
                <a className="nav-link" href="/shop/super/health-personal-care">
                  Health &amp; Personal Care
                </a>
              </li>
              <li className="list-inline-item nav-item">
                <a className="nav-link" href="/shop/super/fashion-accessories">
                  Fashion &amp; Accessories
                </a>
              </li>
              <li className="list-inline-item nav-item">
                <a className="nav-link" href="/shop/super/sports-fitness">
                  Sports &amp; Fitness
                </a>
              </li>
            </ul>
          </div>

          <Slider {...settings}>
            {data && data.data.data.map((datas) => (
              <div
                className="card-2 bg-1 wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <a href="/productdetail">
                    <img
                      src={`${API_URL + datas.image}`}
                      width="80"
                      height="80"
                      alt="Household Supplies"
                    />
                  </a>
                </figure>
                <h6>
                  <a href="/productdetail">{datas.title}</a>
                </h6>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PopularCategory;
