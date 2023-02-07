import React, { useState } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
// import { registerfunction } from '../../services/Apis';
import { getRegister } from '../../store/slices/RegisterSlice';

const Register = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });
    // console.log(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { fname, email, password, cpassword } = data;

        if (email === "") {
            toast.error("Enter Your Name");
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email");
        } else if (fname === "") {
            toast.error("Enter Your Username");
        } else if (password === "") {
            toast.error("Enter Your Password");
        } else if (password.length < 6) {
            toast.error("Password length minimum 6 character");
        } else if (cpassword === "") {
            toast.error("Enter Confirm Password");
        } else if (cpassword.length < 6) {
            toast.error("Confirm password length minimum 6 character");
        }else if (password!==cpassword){
            toast.error("Password are not match");
        }
         else {
            dispatch(getRegister(data));
            // const response = await registerfunction(data);
            // console.log(response ,'resssssss');
            toast.success("Register Success");
        }
    }

    return (
        <div>
            <Header />
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Pages <span></span> My Account
                        </div>
                    </div>
                </div>
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-6 col-md-8">
                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h1 className="mb-5">Create an Account</h1>
                                                    <p className="mb-30">Already have an account? <a href="/login/">Login</a></p>
                                                </div>
                                                <form onSubmit={handleSubmit}>
                                                    <input type="hidden" name="csrfmiddlewaretoken" value="PYgIim5z3aB1PPjFlT3Sgon9CPA2fmr01rYyi4FTkf4SXUS7iYuOfLbntRMxsrSg" />
                                                    <div id="div_id_username" className="ctrlHolder">
                                                        <label for="id_username" className="requiredField">
                                                            Username<span className="asteriskField">*</span>
                                                        </label>
                                                        <input type="text" name="fname" className="form-control textinput textInput" id="id_username" onChange={handleChange} />
                                                        <div id="hint_id_username" className="formHint">usernames can't contain spaces or @/./+/-/_ characters .</div>
                                                    </div>
                                                    <div id="div_id_email" className="ctrlHolder">
                                                        <label for="id_email">
                                                            Email address
                                                        </label>
                                                        <input type="email" name="email" className="emailinput" id="id_email" onChange={handleChange} />
                                                    </div>
                                                    <div id="div_id_password1" className="ctrlHolder">
                                                        <label for="id_password1" className="requiredField">
                                                            password<span className="asteriskField">*</span>
                                                        </label>
                                                        <input type="password" name="password" className="textinput textInput" id="id_password1" onChange={handleChange} />
                                                    </div>
                                                    <div id="div_id_password2" className="ctrlHolder">
                                                        <label for="id_password2" className="requiredField">
                                                            password confirmation<span className="asteriskField">*</span>
                                                        </label>
                                                        <input type="password" name="cpassword" className="textinput textInput" id="id_password2" onChange={handleChange} />
                                                    </div>
                                                    <div className="login_footer form-group mb-50">
                                                        <div className="chek-form">
                                                            <div className="custome-checkbox">
                                                                <div className="mb-3">
                                                                    <p className="small text-center text-muted">By signing up, you confirm that you’ve read and accepted our Terms.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="form-group mb-30">
                                                        <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit &amp; Register</button>
                                                    </div>
                                                    <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                                    <ToastContainer />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                                        <img className="border-radius-15" src="media/site_logo/imgs/login.png" alt="Nest" />
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

export default Register