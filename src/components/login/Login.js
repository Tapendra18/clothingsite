import React, { useState } from 'react';
import Header from '../header/Header';
// import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../footer/Footer';
import { useDispatch } from 'react-redux';
// import { getUserAsync } from '../features/login/loginSlice';
import { getUserAsync } from '../../store/slices/LoginSlice';

const Login = () => {

    const dispatch = useDispatch();
    // const navigate= useNavigate();

    // const { error, userData } = useSelector(
    //     (state) => state.users
    // );

    // useEffect(()=>{

    //     if(userData){
    //         console.log(userData, 'loginDone');
    //         localStorage.setItem('loginUser', JSON.stringify(userData));
    //         localStorage.setItem('token', userData.token);
    //         // navigate("/dashboard");
    //     }
    // },[userData])
    // console.log(error, 'errrorororo');

    const [data, setData] = useState({
        email: "",
        password: ""
    });
    console.log(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = data;

        if (email === "") {
            toast.error("Enter Your Name");
        } else if (email === "") {
            toast.error("Enter Your Email");
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email");
        } else if (password === "") {
            toast.error("Enter Your Password");
        } else if (password.length < 6) {
            toast.error("password length minimum 6 character");
        } else {
            dispatch(getUserAsync(data));
            toast.success("login Done");
        }
    }

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
                                                    <p className="mb-30">Don't have an account? <a href="/register">Create here</a></p>
                                                </div>
                                                <form onSubmit={handleSubmit}>
                                                    <input type="hidden" name="csrfmiddlewaretoken" value="ht0CZvGH4f9HBk3D2RqdtLdMVc4FlJKNOfi4BBnXViQAkMP1mCQk3xLW95h8jlii" />
                                                    <div id="div_id_username" className="ctrlHolder">
                                                        <label htmlFor="id_username" className="requiredField">
                                                            Username or Email<span className="asteriskField">*</span>
                                                        </label>
                                                        <input type="text" name="email" className="textinput textInput" id="id_username" onChange={handleChange} />

                                                    </div>
                                                    <div id="div_id_password" className="ctrlHolder">
                                                        <label htmlFor="id_password" className="requiredField">
                                                            Password<span className="asteriskField">*</span>
                                                        </label>
                                                        <input type="password" name="password" className="textinput textInput" id="id_password" onChange={handleChange} />
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
                                                        <button className="btn btn-heading btn-block hover-up" name="login">Log in</button>
                                                    </div>
                                                    <ToastContainer />
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