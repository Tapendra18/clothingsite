import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { vendorLoginAPI } from '../../store/slices/vendorloginSlice';
const VendorLogin = () => {

    const dispatch = useDispatch();
    const [data , setData ] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setData({...data , [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {email , password} = data;

        if(email === ""){
            toast.error("Enter the username");
        } else if(password === ""){
            toast.error("Enter the password");
        }else if(!email.includes("@")){
            toast.error("Enter valid Email");
        }else if(password.length < 6){
            toast.error("password length min 6 character");
        }else{
            dispatch(vendorLoginAPI(data));
            toast.success("login done");
        }
    }


    return (
        <>
            <main>
                <header className="main-header style-2 navbar">
                    <div className="col-brand">
                        <a href="/" className="brand-wrap">
                            <img src="media/site_logo/imgs/logo_VKBBW51_1.png" className="logo" alt="Nest Dashboard" />
                        </a>
                    </div>
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
                            <h4 className="card-title mb-4">Sign in</h4>
                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="csrfmiddlewaretoken" value="E4h7lHACclI1BpqM45vIr7HmUdaG2vWXQxZXlpaWtqbSJuZe1aWEquvALfmbfAnd"/>
                                    <div className="mb-3">
                                        <input className="form-control" name="email" placeholder="Username or email" type="text" onChange={handleChange}/>
                                    </div>

                                    <div className="mb-3">
                                        <input className="form-control" name="password" placeholder="Password" type="password" onChange={handleChange} />
                                    </div>

                                    <div className="mb-3">
                                        <a href="/password-reset/" className="float-end font-sm text-muted">Forgot password?</a>
                                        <label className="form-check">
                                            <input type="checkbox" className="form-check-input" checked="" />
                                            <span className="form-check-label">Remember</span>
                                        </label>
                                    </div>

                                    <div className="mb-4">
                                        <button type="submit" style={{paddingLeft: "124px"}} className="btn btn-primary w-100">Login</button>
                                    </div>

                            </form>
                            <p className="text-center mb-4">Don't have account? <a href="/supplier-register">Sign up</a></p>
                        </div>
                    </div>
                </section>
                <footer className="main-footer text-center">
                    <p className="font-xs">
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        &copy; Nest - All rights reserved.
                    </p>

                </footer>
            </main>
        </>
    )
}

export default VendorLogin