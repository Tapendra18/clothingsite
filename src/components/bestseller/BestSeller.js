import React from "react";
import Slider from "react-slick";
import './BestSeller.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{ ...style, display: "block",  top: 200,
        right: 0  ,width:'40px' ,height : '40px' , fontSize:'40px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" ,  top: 200, left: 30 ,
         width:'40px' ,height : '40px' , zIndex:'10' }}
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
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 1222200,
    autoplay: true,

  };

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="banner-img style-6 wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <img src="media/ads/suppliers/banner-17.png" alt="" />
                <div className="banner-text">
                  <a href="product-details.html">
                    <h6 className="mb-10 mt-30">
                      100% guaranteed
                      <br /> all Fresh items
                    </h6>
                  </a>
                  <a href="product-details.html">
                    <p>Go to supplier</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="banner-img style-6 wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
              >
                <img src="media/ads/suppliers/banner-19.png" alt="" />
                <div className="banner-text">
                  <a href="product-details.html">
                    <h6 className="mb-10 mt-30">
                      Enjoy 15% OFF f<br />
                      or all vegetable
                    </h6>
                  </a>
                  <a href="product-details.html">
                    <p>Go to supplier</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="banner-img style-6 wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="media/ads/suppliers/banner-16.png" alt="" />
                <div className="banner-text">
                  <a href="product-details.html">
                    <h6 className="mb-10 mt-30">
                      Everyday Fresh <br />
                      with Our Products
                    </h6>
                  </a>
                  <a href="product-details.html">
                    <p>Go to supplier</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="banner-img style-6 wow animate__animated animate__fadeInUp"
                data-wow-delay=".4s"
              >
                <img src="media/ads/suppliers/banner-18.png" alt="" />
                <div className="banner-text">
                  <a href="product-details.html">
                    <h6 className="mb-10 mt-30">
                      Special grocery
                      <br /> sale off this month
                    </h6>
                  </a>
                  <a href="product-details.html">
                    <p>Go to supplier</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/test-1">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-8-1_rqJCr3m.jpg"
                          alt="test 1"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-8-1_rqJCr3m.jpg"
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
                        Food &amp; Beverage
                      </a>
                    </div>
                    <h2>
                      <a href="/product-details/test-1">test 1</a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$1.0 </span>
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
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-1-1_mVTpJyf.jpg"
                          alt="Haagen-Dazs Caramel Cone Ice Cream Ketchup"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-1-1_mVTpJyf.jpg"
                          alt="Haagen-Dazs Caramel Cone Ice Cream Ketchup"
                        />
                      </a>
                    </div>
                    <div className="product-action-1"></div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="/shop/super/automotive">Automotive</a>
                    </div>
                    <h2>
                      <a href="/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup">
                        Haagen-Dazs Caramel Cone Ice Cream Ketchup
                      </a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$13.0 </span>
                      <span className="old-price">USD15.0</span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-10-1.jpg"
                          alt="Seeds of Change Organic Quinoa, Brown, &amp; Red Rice"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-10-1.jpg"
                          alt="Seeds of Change Organic Quinoa, Brown, &amp; Red Rice"
                        />
                      </a>
                    </div>
                    <div className="product-action-1"></div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="/shop/super/food-beverage">
                        Food &amp; Beverage
                      </a>
                    </div>
                    <h2>
                      <a href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice">
                        Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                      </a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$12.0 </span>
                      <span className="old-price">USD15.0</span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/test-2">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-10-1_qcoPzVu.jpg"
                          alt="test 2"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-10-1_qcoPzVu.jpg"
                          alt="test 2"
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
                        Food &amp; Beverage
                      </a>
                    </div>
                    <h2>
                      <a href="/product-details/test-2">test 2</a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$2.0 </span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/test-2"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/canada-dry-ginger-ale-2-l-bottle-200ml-400g">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-4-1.jpg"
                          alt="Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-4-1.jpg"
                          alt="Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g"
                        />
                      </a>
                    </div>
                    <div className="product-action-1"></div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="/shop/super/office-stationery">
                        Office &amp; Stationery
                      </a>
                    </div>
                    <h2>
                      <a href="/product-details/canada-dry-ginger-ale-2-l-bottle-200ml-400g">
                        Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                      </a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$15.0 </span>
                      <span className="old-price">USD19.0</span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/canada-dry-ginger-ale-2-l-bottle-200ml-400g"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/foster-farms-takeout-crispy-classic-buffalo-wings">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-7-1.jpg"
                          alt="Foster Farms Takeout Crispy Classic Buffalo Wings"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-7-1.jpg"
                          alt="Foster Farms Takeout Crispy Classic Buffalo Wings"
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
                        Food &amp; Beverage
                      </a>
                    </div>
                    <h2>
                      <a href="/product-details/foster-farms-takeout-crispy-classic-buffalo-wings">
                        Foster Farms Takeout Crispy Classic Buffalo Wings
                      </a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "67%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$14.0 </span>
                      <span className="old-price">USD17.0</span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/foster-farms-takeout-crispy-classic-buffalo-wings"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice-myixb">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-9-1.jpg"
                          alt="All Natural Italian-Style Chicken Meatballs"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-9-1.jpg"
                          alt="All Natural Italian-Style Chicken Meatballs"
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
                        Food &amp; Beverage
                      </a>
                    </div>
                    <h2>
                      <a href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice-myixb">
                        All Natural Italian-Style Chicken Meatballs
                      </a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$12.0 </span>
                      <span className="old-price">USD32.0</span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/seeds-of-change-organic-quinoa-brown-red-rice-myixb"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/chobani-complete-vanilla-greek-yogurt">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-5-1.jpg"
                          alt="Chobani Complete Vanilla Greek Yogurt"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-5-1.jpg"
                          alt="Chobani Complete Vanilla Greek Yogurt"
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
                      <a href="/shop/super/consumer-electronics">
                        Consumer Electronics
                      </a>
                    </div>
                    <h2>
                      <a href="/product-details/chobani-complete-vanilla-greek-yogurt">
                        Chobani Complete Vanilla Greek Yogurt
                      </a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$14.0 </span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/chobani-complete-vanilla-greek-yogurt"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/blue-diamond-almonds-lightly-salted-vegetables">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-6-1.jpg"
                          alt="Blue Diamond Almonds Lightly Salted Vegetables"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-6-1.jpg"
                          alt="Blue Diamond Almonds Lightly Salted Vegetables"
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
                      <a href="/shop/super/fashion-accessories">
                        Fashion &amp; Accessories
                      </a>
                    </div>
                    <h2>
                      <a href="/product-details/blue-diamond-almonds-lightly-salted-vegetables">
                        Blue Diamond Almonds Lightly Salted Vegetables
                      </a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$14.0 </span>
                      <span className="old-price">USD18.0</span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/blue-diamond-almonds-lightly-salted-vegetables"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="/product-details/gortons-beer-battered-fish-fillets-with-soft-paper">
                        <img
                          className="default-img"
                          src="media/products/imgs/product-2-1.jpg"
                          alt="Gorton’s Beer Battered Fish Fillets with soft paper"
                        />
                        <img
                          className="hover-img"
                          src="media/products/imgs/product-2-1.jpg"
                          alt="Gorton’s Beer Battered Fish Fillets with soft paper"
                        />
                      </a>
                    </div>
                    <div className="product-action-1"></div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="/shop/super/toys">Toys</a>
                    </div>
                    <h2>
                      <a href="/product-details/gortons-beer-battered-fish-fillets-with-soft-paper">
                        Gorton’s Beer Battered Fish Fillets with soft paper
                      </a>
                    </h2>
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <div className="product-price mt-10">
                      <span>$16.0 </span>
                      <span className="old-price">USD19.0</span>
                    </div>
                    <div className="sold mt-15 mb-15"></div>
                    <a
                      href="/product-details/gortons-beer-battered-fish-fillets-with-soft-paper"
                      className="btn w-100 hover-up"
                    >
                      <i className="fi-rs-eye"></i> View
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSeller;
