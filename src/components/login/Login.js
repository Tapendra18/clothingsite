import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Login = () => {
    return (
        <div>
            <Header />
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="../index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Pages <span></span> My Account
                        </div>
                    </div>
                </div>
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                                        <img className="border-radius-15" src="media/site_logo/imgs/login.png" alt="Nest" />
                                    </div>
                                    <div className="col-lg-6 col-md-8">
                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h1 className="mb-5">Login</h1>
                                                    <p className="mb-30">Don't have an account? <a href="../register/index.html">Create here</a></p>
                                                </div>
                                                <form method="post">
                                                    <input type="hidden" name="csrfmiddlewaretoken" value="ht0CZvGH4f9HBk3D2RqdtLdMVc4FlJKNOfi4BBnXViQAkMP1mCQk3xLW95h8jlii" />
                                                    <div id="div_id_username" className="ctrlHolder">
                                                        <label htmlFor="id_username" className="requiredField">
                                                            Username or Email<span className="asteriskField">*</span>
                                                        </label>
                                                        <input type="text" name="username" value="selem" className="textinput textInput" required id="id_username" />
                                                    </div>
                                                    <div id="div_id_password" className="ctrlHolder">
                                                        <label htmlFor="id_password" className="requiredField">
                                                            Password<span className="asteriskField">*</span>
                                                        </label>
                                                        <input type="password" name="password" value="Test123456!@#" className="textinput textInput" required id="id_password" />
                                                    </div>
                                                    <div className="login_footer form-group mb-50">
                                                        <div className="chek-form">
                                                            <div className="custome-checkbox">
                                                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                                <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                                            </div>
                                                        </div>
                                                        <a className="text-muted" href="../password-reset/index.html">Forgot password?</a>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-heading btn-block hover-up" name="login">Log in</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Login