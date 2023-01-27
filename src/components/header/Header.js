import React from "react";


function Header() {

    return (
        <>
            <header className="header-area header-style-1 header-style-5 header-height-2">
                <div className="mobile-promotion">
                    <span>You will get 25% discount <a className="active d-inline-block" style={{Color:'#090101'}}
                        href="product-details.html">Shop now</a></span>
                </div>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info">
                                    <ul>
                                        <li><a href="/pages/about-us">About Us</a></li>
                                        <li><a href="/dashboard/">My Account</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div id="news-flash" className="d-inline-block"
                                        style={{overflow: 'hidden', position: 'relative', height: '15px'}}>
                                        <ul style={{position: 'absolute', margin: '0px', padding: '0px', top: '0px'}}>
                                            <li style={{margin: '0px', padding: '0px', height: '15px'}}>
                                                <i className="fi-rs-bell d-inline-block mr-5"></i>
                                                <span className="d-inline-block">
                                                    <b className="text-success"> Ads</b> You will get 25% discount</span>
                                                <a className="active d-inline-block" href="product-details.html">Shop now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li>Need help? Call Us: <strong className="text-brand"> + 1800 900</strong></li>
                                        <form action="/set_currency/" method="post" style={{marginRight: '10px'}}>
                                            <input type="hidden" name="csrfmiddlewaretoken"
                                                defaultValue="ybcHhIxigLu3GxPKry6eKHTWkWAMYiw0LEuKuoBalMF1AYpnFCl2ryWAjqfZI8AP" />
                                            <select name="currency">
                                                <option value="EUR">
                                                    €
                                                    EUR
                                                </option>
                                                <option value="USD">
                                                    $
                                                    USD
                                                </option>
                                            </select>
                                        </form>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <a href="/"><img src="media/site_logo/imgs/logo_VKBBW51_1.png" alt="Nest" /></a>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <form action="product-search/" method="post">
                                        <input type="hidden" name="csrfmiddlewaretoken"
                                            value="ybcHhIxigLu3GxPKry6eKHTWkWAMYiw0LEuKuoBalMF1AYpnFCl2ryWAjqfZI8AP" />
                                        <select name="category-select" className="select-active  category-search"
                                            id="category-search">
                                            <option>All Categories</option>
                                            <option>Food &amp; Beverage</option>
                                            <option>Beauty &amp; Fragrances</option>
                                            <option>Office &amp; Stationery</option>
                                            <option>Consumer Electronics</option>
                                            <option>Fashion &amp; Accessories</option>
                                            <option>Home &amp; Furniture</option>
                                            <option>Health &amp; Personal Care</option>
                                            <option>Construction &amp; Hardware</option>
                                            <option>Sports &amp; Fitness</option>
                                            <option>Toys</option>
                                            <option>Automotive</option>
                                        </select>

                                        <input type="text" name="search-product" placeholder="Search for items..."
                                            autoComplete="off" required />
                                        <button type="submit"><i className="fi-rs-search"></i></button>
                                    </form>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <a className="mini-cart-icon" href="/cart/">
                                                <img alt="Nest" src="static/assets/imgs/theme/icons/icon-cart.svg" />
                                                <span className="pro-count blue">0</span>
                                            </a>
                                            <a href="/cart/"><span className="lable">Cart</span></a>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <a href="/dashboard/">
                                                <img className="svgInject" alt="Nest"
                                                    src="static/assets/imgs/theme/icons/icon-user.svg" />
                                            </a>
                                            <a href="/dashboard/"><span className="lable ml-0">Account</span></a>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li><a href="/login/"><i className="fi fi-rs-user mr-10"></i>Login</a></li>
                                                    <li><a href="/register/"><i className="fi fi-rs-user-add mr-10"></i>Register</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom header-bottom-bg-color sticky-bar">
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <a href="/"><img src="media/site_logo/imgs/logo_VKBBW51_1.png" alt="Nest" /></a>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a className="categories-button-active" href="#">
                                        <span className="fi-rs-apps"></span> <span className="et">Trending</span> Categories
                                        <i className="fi-rs-angle-down"></i>
                                    </a>
                                    <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                        <div className="d-flex categori-dropdown-inner">
                                            <ul>
                                                <li>
                                                    <a href="/shop/super/food-beverage"> <img
                                                        src="media/categories/super/imgs/category-2_1.png "
                                                        alt="Food &amp; Beverage" />Food &amp; Beverage</a>
                                                </li>
                                                <li>
                                                    <a href="/shop/super/beauty-fragrances"> <img
                                                        src="static/assets/imgs/theme/icons/category-1.svg "
                                                        alt="Beauty &amp; Fragrances" />Beauty &amp; Fragrances</a>
                                                </li>
                                                <li>
                                                    <a href="/shop/super/office-stationery"> <img
                                                        src="static/assets/imgs/theme/icons/category-1.svg "
                                                        alt="Office &amp; Stationery" />Office &amp; Stationery</a>
                                                </li>
                                                <li>
                                                    <a href="/shop/super/consumer-electronics"> <img
                                                        src="media/categories/super/imgs/category-4_brSMGKb.png "
                                                        alt="Consumer Electronics" />Consumer Electronics</a>
                                                </li>
                                                <li>
                                                    <a href="/shop/super/fashion-accessories"> <img
                                                        src="media/categories/super/imgs/category-3.png "
                                                        alt="Fashion &amp; Accessories" />Fashion &amp; Accessories</a>
                                                </li>
                                            </ul>
                                            <ul className="end">
                                                <li>
                                                    <a href="/shop/super/home-furniture"> <img
                                                        src="media/categories/super/imgs/category-10.png "
                                                        alt="Home &amp; Furniture" />Home &amp; Furniture</a>
                                                </li>
                                                <li>
                                                    <a href="/shop/super/health-personal-care"> <img
                                                        src="static/assets/imgs/theme/icons/category-1.svg "
                                                        alt="Health &amp; Personal Care" />Health &amp; Personal Care</a>
                                                </li>
                                                <li>
                                                    <a href="/shop/super/construction-hardware"> <img
                                                        src="media/categories/super/imgs/icon-4.png "
                                                        alt="Construction &amp; Hardware" />Construction &amp; Hardware</a>
                                                </li>
                                                <li>
                                                    <a href="/shop/super/sports-fitness"> <img
                                                        src="media/categories/super/imgs/icon-3.png "
                                                        alt="Sports &amp; Fitness" />Sports &amp; Fitness</a>
                                                </li>
                                                <li>
                                                    <a href="/shop/super/toys"> <img
                                                        src="media/categories/super/imgs/icon-2.png " alt="Toys" />Toys</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more_categories"> <a href="category-list.html"><span
                                            className="fi-rs-apps"></span> <span className="heading-sm-1"> All
                                                Categories...</span> </a></div>
                                    </div>
                                </div>
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a className="active" href="index.html">Home <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="home-2.html">Home 2</a></li>
                                                    <li><a href="/home-3/">Home 3</a></li>
                                                    <li><a href="/home-4/">Home 4</a></li>
                                                </ul>
                                            </li>
                                            <li className="position-static hot-deals">
                                                <img src="static/assets/imgs/theme/icons/icon-hot-white.svg"
                                                    alt="hot deals" /><a href="shop.html">Shop <i
                                                        className="fi-rs-angle-down"></i></a>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu" style={{width: '33%'}}>
                                                        <div className="menu-banner-wrap">
                                                            <a href="product-details.html">
                                                                <img src="media/ads/hot-deal-ad/banner-menu_UgjJTIO_6KQjjyu.png"
                                                                    alt="Nest" /></a>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>
                                                                    Don't miss<br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">Save to 25%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="product-details.html">Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>25%</span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mega-menu" style={{width: '33%'}}>
                                                        <div className="menu-banner-wrap">
                                                            <a href="product-details.html">
                                                                <img src="media/ads/hot-deal-ad/banner-menu_khJ9a6v.png"
                                                                    alt="Nest" /></a>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>
                                                                    Don't miss<br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">Save to 50%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="product-details.html">Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>50%</span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mega-menu" style={{width: "33%"}}>
                                                        <div className="menu-banner-wrap">
                                                            <a href="product-details.html">
                                                                <img src="media/ads/hot-deal-ad/banner-menu_UgjJTIO.png"
                                                                    alt="Nest" /></a>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>
                                                                    Don't miss<br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">Save to 30%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="product-details.html">Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>30%</span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="position-static">
                                                <a href="category-list.html">Categories </a>
                                            </li>
                                            <li>
                                                <a href="/supplier-list/">Stores</a>
                                            </li>
                                            <li>
                                                <a href="/blog/">Blog</a>
                                            </li>
                                            <li>
                                                <a href="/contact/">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-flex">
                                <img src="static/assets/imgs/theme/icons/icon-headphone-white.svg" alt="hotline" />
                                <p>1900 - 8888<span>24/7 Support Center</span></p>
                            </div>
                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <a href="/dashboard/">
                                            <img alt="Nest" src="static/assets/imgs/theme/icons/icon-user.svg" />
                                        </a>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <a className="mini-cart-icon" href="/cart/">
                                            <img alt="Nest" src="static/assets/imgs/theme/icons/icon-cart.svg" />
                                            <span className="pro-count white">0</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mobile-header-active mobile-header-wrapper-style">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <a href="/"><img src="media/site_logo/imgs/logo_VKBBW51_1.png" alt="Nest" /></a>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button className="close-style search-close">
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="/product-search/" method="post">
                                <input type="hidden" name="csrfmiddlewaretoken"
                                    value="ybcHhIxigLu3GxPKry6eKHTWkWAMYiw0LEuKuoBalMF1AYpnFCl2ryWAjqfZI8AP" />
                                <input type="text" placeholder="Search for items…" autoComplete="off" required />
                                <button type="submit"><i className="fi-rs-search"></i></button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">

                            <nav>
                                <ul className="mobile-menu font-heading">
                                    <li className="menu-item-has-children"><span className="menu-expand"><i
                                        className="fi-rs-angle-small-down"></i></span>
                                        <a href="index.html">Home</a>
                                        <ul className="dropdown" style={{display: 'none'}}>
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="/home-2/">Home 2</a></li>
                                            <li><a href="/home-3/">Home 3</a></li>
                                            <li><a href="/home-4/">Home 4</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="shop.html">shop</a>
                                    </li>

                                    <li className="menu-item-has-children">
                                        <a href="category-list.html">Categoreis</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/food-beverage">Food &amp; Beverage</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/custard-apple">Custard apple</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/main/coffe-tea">Coffe &amp; Tea</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/main/cake-milk">Cake &amp; Milk</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/main/oganic-kiwi">Oganic Kiwi</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/main/red-apple">Red Apple</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/main/snack">Snack</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/main/vegetables">Vegetables</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/main/strawberry">Strawberry</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/main/black-plum">Black plum</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/beauty-fragrances">Beauty &amp; Fragrances</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/makeup">Makeup</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/office-stationery">Office &amp; Stationery</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/books">Books</a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/consumer-electronics">Consumer Electronics</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/mobile-phones-tablets">Mobile Phones &amp;
                                                            Tablets</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/fashion-accessories">Fashion &amp; Accessories</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/clothing">Clothing</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/home-furniture">Home &amp; Furniture</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/household-supplies">Household Supplies</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/health-personal-care">Health &amp; Personal Care</a>
                                                <ul className="dropdown">

                                                    <li>
                                                        <a href="/shop/main/health">Health</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/construction-hardware">Construction &amp; Hardware</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/tools-home-improvements">Tools &amp; Home
                                                            Improvements</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/sports-fitness">Sports &amp; Fitness</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/fitness-training">Fitness &amp; Training</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/toys">Toys</a>
                                                <ul className="dropdown">

                                                    <li>
                                                        <a href="/shop/main/arts-crafts">Arts &amp; Crafts</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/shop/super/automotive">Automotive</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop/main/motorcycles">Motorcycles</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="/supplier-list/">Stores</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="/blog/">Blog</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="mobile-header-info-wrap">
                            <div className="single-mobile-header-info">
                                <a href="/contact/"><i className="fi-rs-marker"></i>Contact</a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="/login/"><i className="fi-rs-user"></i>Log In / Sign Up </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div className="mobile-social-icon mb-50">
                            <h6 className="mb-15">Follow Us</h6>
                            <a href="https://www.facebook.com/"><img
                                src="static/assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="https://twitter.com/"><img src="static/assets/imgs/theme/icons/icon-twitter-white.svg"
                                alt="" /></a>
                            <a href="https://www.instagram.com/"><img
                                src="static/assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="https://www.pinterest.com/"><img
                                src="static/assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="https://www.youtube.com/"><img src="static/assets/imgs/theme/icons/icon-youtube-white.svg"
                                alt="" /></a>
                        </div>
                        <div className="site-copyright">Copyright 2022 © store. All rights reserved. Powered by apexcode.info.</div>
                    </div>
                </div>
            </div>
            <div id="alert-container" className="not-visible">
            </div>
        </>
    )
}

export default Header