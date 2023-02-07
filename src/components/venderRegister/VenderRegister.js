import React, { useState } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { vendorAPI } from '../../store/slices/vendorRegister';

const VenderRegister = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, phone, password } = data;

        if (username === "") {
            toast.error("Enter the username");
        } else if (email === "") {
            toast.error("Enter the email");
        } else if (phone === "") {
            toast.error("Enter the phone");
        } else if (password === "") {
            toast.error("Enter the password");
        } else if (!email.includes("@")) {
            toast.error("Enter valid Email");
        } else if (password.length < 6) {
            toast.error("password length min 6 character");
        } else {
            dispatch(vendorAPI(data));
            toast.success("register done");
        }
    }
    return (
        <>
            <Header />
            <main>
                <header className="main-header style-2 navbar">
                    <div className="col-nav">
                        <ul className="nav">

                            <li className="nav-item">
                                <a className="nav-link btn-icon darkmode" href="#"> <i className="material-icons md-nights_stay"></i> </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="requestfullscreen nav-link btn-icon"><i className="material-icons md-cast"></i></a>
                            </li>

                        </ul>
                    </div>
                </header>
                <section className="content-main mt-80 mb-80">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 m-auto text-center">
                        </div>
                    </div>
                    <div className="card mx-auto card-login">
                        <div className="card-body">
                            <h4 className="card-title mb-4">Create an Account</h4>
                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="csrfmiddlewaretoken" value="sd9T2JzkI3mJyZeXAzxreA3rKNUW8y1cEGRJ2r9EZ8PAG4NpxEYndXRFBP6rlDss" />
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input className="form-control" placeholder="Your Username" name="username" maxlength="149" type="text" onChange={handleChange} />
                                    <small id="hint_id_username" className="form-text text-muted">usernames can't contain spaces, only letters, numbers and @/./+/-/_ characters.</small>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" placeholder="Your email" name="email" type="text" onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <div className="row gx-2">

                                        <div className="col-12"><input className="form-control" placeholder="Phone" name="phone" type="number" onChange={handleChange} /></div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Create password</label>
                                    <input className="form-control" placeholder="Password" name="password" type="password" onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <p className="small text-center text-muted">By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
                                </div>

                                <div className="mb-4">
                                    <button type="submit" className="btn btn-primary w-100" style={{ paddingLeft: "124px" }}>Register</button>
                                </div>

                            </form>
                            <p className="text-center mb-2">Already have an account? <a href="/supplier-login">Sign in now</a></p>
                        </div>
                    </div>
                    <ToastContainer />
                </section>
                <footer className="main-footer text-center">
                    <p className="font-xs">
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        &copy; Nest - All rights reserved .
                    </p>

                </footer>
            </main>
            <Footer />
        </>
    )
}

export default VenderRegister