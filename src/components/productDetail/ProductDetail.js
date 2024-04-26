import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { _id } = useParams();
    const [post, SetPost] = useState({});
    console.log(post , "post")
    console.log(_id , "Product");
    useEffect(() => {
        const fetch = async () => {
          try {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/v1/productdetail/662a33ee510699291f946b78`);
            SetPost(data?.data);
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, []);
    
    return (
        <>
            <Header />
            <main className="main">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> <a href="/shop/super/automotive">Automotive</a> <span></span> {post?.title}
                        </div>
                    </div>
                </div>
                <div className="container mb-30">
                    <div className="row">
                        <div className="col-xl-11 col-lg-12 m-auto">
                            <div className="row">
                                <div className="col-xl-9">
                                    <div className="product-detail accordion-detail">
                                        <div className="row mb-50 mt-30">
                                            <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                                <div className="detail-gallery">
                                                    <span className="zoom-icon"><i className="fi-rs-search"></i></span>

                                                    <div className="product-image-slider">
                                                        <figure className="border-radius-10">
                                                            <img src="media/products/imgs/product-1-1_mVTpJyf.jpg" alt="product image" />
                                                        </figure>
                                                        <figure className="border-radius-10">
                                                            <img src="media/products/imgs/product_imgs/product-2-2_8bh9sIN.jpg" alt="product image 2" />
                                                        </figure>
                                                    </div>

                                                    <div className="slider-nav-thumbnails">
                                                        <div>
                                                            <img src="media/products/imgs/product-1-1_mVTpJyf.jpg" alt="product image" />
                                                        </div>
                                                        <div><img src="media/products/imgs/product_imgs/product-2-2_8bh9sIN.jpg" alt="product image" /></div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <div className="detail-info pr-30 pl-30">
                                                    <h3 className="title-detail">{post?.title}</h3>
                                                    <div className="product-detail-rating">
                                                        <div className="product-rate-cover text-end">
                                                            <div className="product-rate d-inline-block">
                                                                <div className="product-rating" style={{ width: "0%" }}></div>

                                                            </div>
                                                            <span className="font-small ml-5 text-muted"> {post?.bestsell}</span>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix product-price-cover">
                                                        <div className="product-price primary-color float-left">
                                                            <span className="current-price text-brand">{post?.price}</span>
                                                            <span>
                                                                <span className="old-price font-md ml-15">USD15.0</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="short-desc mb-30">
                                                        <p className="font-lg"><p>toyota</p>.</p>
                                                    </div>
                                                    <div className="detail-extralink mb-50">
                                                        <div className="detail-qty border radius">
                                                            <a href="#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                                            <span className="qty-val">1</span>
                                                            <a href="#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                                        </div>
                                                        <form action="/add_to_cart/" method="POST">
                                                            <div className="product-extra-link2">
                                                                <input type="hidden" name="csrfmiddlewaretoken" value="IoyH67lc3G2I1jjU2KjR7hAkxA8NnltDgehUT04vxi7CD4oHsaFdFHw8NOLXOIFw" />
                                                                <input type="hidden" id="qty-input" name="qyt" />
                                                                <input type="hidden" value="90" name="product_id" />
                                                                <input type="hidden" value="13.0" name="product_Price" />
                                                                <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart"></i>Add to cart</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="font-xs">
                                                        <ul className="mr-50 float-start">
                                                            <li className="mb-5">Category: <span className="text-brand">Automotive</span></li>
                                                            <li className="mb-5">Date:<span className="text-brand"> Apr 25 2022</span></li>
                                                            <li>PIECE: <span className="text-brand">5 pieces</span></li>
                                                        </ul>
                                                        <ul className="float-start">
                                                            <li className="mb-5">SKU: <span className="in-stock text-brand ml-5">4455</span></li>
                                                            <li className="mb-5">Tags: <span className="in-stock text-brand ml-5">None</span> </li>
                                                            <li>Stock:<span className="in-stock text-brand ml-5">63 Items In Stock</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="tab-style3">
                                                <ul className="nav nav-tabs text-uppercase">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">Description</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link " id="Additional-info-tab" data-bs-toggle="tab" href="#Additional-info">Additional info</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">Vendor</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews">Reviews (0)</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content shop_info_tab entry-main-content">
                                                    <div className="tab-pane fade show active" id="Description">
                                                        <div className="">
                                                            <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p><p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p><ul><li>Type Of PackingBottle</li><li>ColorGreen, Pink, Powder Blue, Purple</li><li>Quantity Per Case100ml</li><li>Ethyl Alcohol70%</li><li>Piece In OneCarton</li></ul><p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p><p>Packaging &amp; Delivery</p><p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p><p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p><p>Suggested Use</p><ul><li>Refrigeration not necessary.</li><li>Stir before serving</li></ul><p>Other Ingredients</p><ul><li>Organic raw pecans, organic raw cashews.</li><li>This butter was produced using a LTG (Low Temperature Grinding) process</li><li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li></ul><p>Warnings</p><ul><li>Oil separation occurs naturally. May contain pieces of shell</li></ul>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade " id="Additional-info">
                                                        <table className="font-md">
                                                            <tbody>
                                                                <tr className="stand-up">
                                                                    <th>Price</th>
                                                                    <td>
                                                                        <p>USD 13.0</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="folded-wo-wheels">
                                                                    <th>AVAILABILITY</th>
                                                                    <td>
                                                                        <p>63 in stock</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="folded-w-wheels">
                                                                    <th>PIECES PER SET</th>
                                                                    <td>
                                                                        <p>5 pieces</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="door-pass-through">
                                                                    <th>WEIGHT PER SET</th>
                                                                    <td>
                                                                        <p>0.5 KG</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="weight-wo-wheels">
                                                                    <th>Super Category</th>
                                                                    <td>
                                                                        <p>Automotive</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="weight-capacity">
                                                                    <th>Main Category</th>
                                                                    <td>
                                                                        <p>Motorcycles</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="width">
                                                                    <th>Sub Category</th>
                                                                    <td>
                                                                        <p>Motorcycle Parts</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="handle-height-ground-to-handle">
                                                                    <th>Mini Category</th>
                                                                    <td>
                                                                        <p>Motorcycle Accessories</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="frame">
                                                                    <th>SKU</th>
                                                                    <td>
                                                                        <p>4455 </p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="tab-pane fade" id="Vendor-info">
                                                        <div className="vendor-logo d-flex mb-30">
                                                            <img src="media/profile_pic/vendor-8_tnY9gFy.png" width="64" height="50" alt="Totino&#x27;s Pizza" />
                                                            <div className="vendor-name ml-15">
                                                                <h6>
                                                                    <a href="/vendor-details/pizza">Totino&#x27;s Pizza</a>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <ul className="contact-infor mb-20">
                                                            <li><img src="static/assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave cairo,Utah 53127 United States</span></li>
                                                            <li><img src="static/assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Contact Seller:</strong><span>3432432423</span></li>
                                                        </ul>
                                                        <p>Got a smooth, buttery spread in your fridge? Chances are good that it&#x27;s Good Chef. This brand made Lionto&#x27;s list of the most popular grocery brands across the country. </p>
                                                    </div>
                                                    <div className="tab-pane fade" id="Reviews">

                                                        <div className="comments-area">
                                                            <div className="row">
                                                                <div className="col-lg-8">
                                                                    <p>No reviews!</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="comment-form">
                                                            <h4 className="mb-15">Add a review</h4>
                                                            <div className="product-rate d-inline-block mb-30"></div>
                                                            <div id="message-rate">
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Quality</label>
                                                                <div className="rate">
                                                                    <input type="radio" id="first" name="star" value="1" /><label for="first" title="text">1 star</label>
                                                                    <input type="radio" id="second" name="star" value="2" /> <label for="second" title="text">2 star</label>
                                                                    <input type="radio" id="third" name="star" value="3" /> <label for="third" title="text">3 star</label>
                                                                    <input type="radio" id="fourth" name="star" value="4" /> <label for="fourth" title="text">4 star</label>
                                                                    <input type="radio" id="fifth" name="star" value="5" checked="checked" /><label for="fifth" title="text">5 star</label>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-8 col-md-12">
                                                                    <form className="form-contact comment_form form-rating" id="90">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="form-group">
                                                                                    <textarea className="form-control w-100" name="client_message" id="client-message" cols="30" rows="9" placeholder="Write Comment" required></textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <button type="submit" className="button button-contactForm">Submit Review</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-60">
                                            <div className="col-12">
                                                <h2 className="section-title style-1 mb-30">Related products</h2>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products">
                                                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                        <div className="product-cart-wrap hover-up">
                                                            <div className="product-img-action-wrap">
                                                                <div className="product-img product-img-zoom">
                                                                    <a href="/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup">
                                                                        <img className="default-img" src="/media/products/imgs/product-1-1_mVTpJyf.jpg" alt="" />
                                                                        <img className="hover-img" src="/media/products/imgs/product-1-1_mVTpJyf.jpg" alt="" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                                    <span className="hot">Hot</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-wrap">
                                                                {/* <h2><a href="/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup" >{slug}</a></h2> */}
                                                                <div className="rating-result" title="0%">
                                                                    <span> </span>
                                                                </div>
                                                                <div className="product-price">
                                                                    <span>USD13.0 </span>
                                                                    <span className="old-price">USD15.0</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-60">
                                            <div className="col-12">
                                                <h2 className="section-title style-1 mb-30">More from this seller</h2>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products">
                                                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                        <div className="product-cart-wrap hover-up">
                                                            <div className="product-img-action-wrap">
                                                                <div className="product-img product-img-zoom">
                                                                    <a href="/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup">
                                                                        <img className="default-img" src="/media/products/imgs/product-1-1_mVTpJyf.jpg" alt="" />
                                                                        <img className="hover-img" src="/media/products/imgs/product-1-1_mVTpJyf.jpg" alt="" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                                    <span className="hot">Hot</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-wrap">
                                                                <h2><a href="product-details/haagen-dazs-caramel-cone-ice-cream-ketchup" >Haagen-Dazs Caramel Cone Ice Cream Ketc…</a></h2>
                                                                <div className="rating-result" title="0%">
                                                                    <span> </span>
                                                                </div>
                                                                <div className="product-price">
                                                                    <span>USD13.0</span>
                                                                    <span className="old-price">USD15.0</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-3 primary-sidebar sticky-sidebar mt-30">
                                    <div className="sidebar-widget widget-vendor mb-30 bg-grey-9 box-shadow-none">
                                        <h5 className="section-title style-3 mb-20">Vendor</h5>
                                        <div className="vendor-logo d-flex mb-30">
                                            <img src="media/profile_pic/vendor-8_tnY9gFy.png" width="64" height="50" alt="Totino&#x27;s Pizza" />
                                            <div className="vendor-name ml-15">
                                                <h6>
                                                    <a href="/vendor-details/pizza">Totino&#x27;s Pizza</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <ul className="contact-infor">
                                            <li><img src="static/assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave cairo, Utah 53127 United States</span></li>
                                            <li><img src="static/assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Contact Seller:</strong><span>3432432423</span></li>
                                            <li className="hr"><span></span></li>
                                        </ul>
                                        <ul>
                                        </ul>
                                        <p>Become a Vendor? <a href="/supplier-register"> Register now</a></p>
                                    </div>

                                    <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                        <h5 className="section-title style-1 mb-30">New products</h5>
                                        <div className="single-post clearfix">
                                            <div className="image">
                                                <img src="media/products/imgs/product-1-1_mVTpJyf.jpg" style={{ width: "80px", height: "80px" }} alt="Haagen-Dazs Caramel Cone Ice Cream Ketchup" />
                                            </div>
                                            <div className="content pt-10">
                                                <h6><a href="/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup">Haagen-Dazs C…</a></h6>
                                                <p className="price mb-0 mt-5">USD 13.0</p>
                                                <div className="product-rate">
                                                    <div className="product-rating" style={{ width: "0%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-post clearfix">
                                            <div className="image">
                                                <img src="media/products/imgs/product-7-1.jpg" style={{ width: "80px", height: "80px" }} alt="Foster Farms Takeout Crispy classNameic Buffalo Wings" />
                                            </div>
                                            <div className="content pt-10">
                                                <h6><a href="/product-details/foster-farms-takeout-crispy-classNameic-buffalo-wings">Foster Farms …</a></h6>
                                                <p className="price mb-0 mt-5">USD 14.0</p>
                                                <div className="product-rate">
                                                    <div className="product-rating" style={{ width: "67%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-post clearfix">
                                            <div className="image">
                                                <img src="media/products/imgs/product-8-1.jpg" style={{ width: "80px", height: "80px" }} alt="Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn" />
                                            </div>
                                            <div className="content pt-10">
                                                <h6><a href="/product-details/angies-boomchickapop-sweet-salty-kettle-corn">Angie’s Boomc…</a></h6>
                                                <p className="price mb-0 mt-5">USD 15.0</p>
                                                <div className="product-rate">
                                                    <div className="product-rating" style={{ width: "50%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                        <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <img src="/media/ads/shop-ad/banner-11.png" alt="" /> </a>
                                        <div className="banner-text">
                                            <span>selem</span>
                                            <a href="https://nest.apexcode.info/product-details/haagen-dazs-caramel-cone-ice-cream-ketchup "> <h4>
                                                Save 17% on Oganic Juice
                                            </h4></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default ProductDetail