import React from 'react'
import logo from "./skinlogo.png"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <div className="sign_in_up_bg">
                <div className="container">
                    <div className="row justify-content-lg-center justify-content-md-center">
                        {/* <div className="col-lg-12">
                        <div className="main_logo26" id="logo">

              <img className="logo-inverse" src={logo} width={"450px"} height={'120px'} alt="Tutor Learner" />
            </div>
                    </div> */}
                        <div className="col-lg-6 col-md-8">
                            <div className="sign_forms">

                                {/* <h1>Screen Detection</h1> */}
                                <img src={logo} width={"180px"} height={"100px"} alt=""></img>
                                <h3>Login </h3>
                                <p>Enter your details below.</p>
                                <form>
                                    <label className="label25 text-left">Email<span className="text-danger">*</span></label>
                                    <div className="ui search focus mt-15 mb-3">
                                        <div className="ui left icon input swdh95 mb-2">
                                            <input className="prompt srch_explore" type="email" name="email" id="id_email" required maxLength={64} placeholder="Email Address" />
                                            {/* <i className="uil uil-envelope icon icon2" /> */}
                                        </div>
                                    </div>

                                    <label className="label25 text-left">Password<span className="text-danger">*</span></label>

                                    <div class="input-group mb-3">
                                        <input
                                            class="form-control"

                                            placeholder="Password"
                                            aria-describedby="basic-addon2"
                                        />
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon2"    ><i className=""></i></span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">

                                            {/* <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" style={{ width: "auto", height: "auto", visibility: "visible", left: "63px" }} />
                    <label class="checkbox">
                      Remember me
                    </label> */}
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="/ForgetPassword"> <p><a href="">Forget Password</a></p></Link>
                                            <p className="sgntrm145"></p>

                                        </div>

                                    </div>

                                    <button className="login-btn mb-2" type="button">Sign In</button>
                                    {/* <p className="mt-2"><i className="mx-2"><FaGoogle /></i> <i className=""> <FaFacebook /> </i></p> */}

                                    <p className="sgntrm145">Dont have account ? <Link to="/SignUp">SignUp</Link></p>

                                

                                </form>


                                {/* <p className="sgntrm145">or <a href="#">Forget Password</a>.</p> */}

                            </div>
                            {/* <div className="sign_footer">© 2022 <strong>Tutor Book</strong>. All
              Rights Reserved.</div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
