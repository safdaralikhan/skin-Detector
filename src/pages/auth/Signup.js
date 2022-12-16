import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from "./skinlogo.png"


export default function SignUp() {
    return (
        <>
            <div className="sign_in_up_bg">
                <div className="container">
                    <div className="row justify-content-lg-center justify-content-md-center">
                        
                        <div className="col-lg-6 col-md-8">
                            <div className="sign_forms">


                                <img src={logo} width={"180px"} height={"90px"}  alt=""></img>
                                {/* <h3>SignUp </h3> */}
                                {/* <p>Enter your details below.</p> */}
                                <form>
                                <label className="label25 text-left">First Name<span className="text-danger">*</span></label>
                                    <div className="ui search focus mt-15 mb-3">
                                        <div className="ui left icon input swdh95 mb-2">
                                            <input className="prompt srch_explore" type="text"   placeholder="First Name" />
                                            {/* <i className="uil uil-envelope icon icon2" /> */}
                                        </div>
                                    </div>
                                <label className="label25 text-left">Last Name<span className="text-danger">*</span></label>
                                    <div className="ui search focus mt-15 mb-3">
                                        <div className="ui left icon input swdh95 mb-2">
                                            <input className="prompt srch_explore" type="text"   placeholder="Last Name" />
                                            {/* <i className="uil uil-envelope icon icon2" /> */}
                                        </div>
                                    </div>
                                    <label className="label25 text-left">Email<span className="text-danger">*</span></label>
                                    <div className="ui search focus mt-15 mb-3">
                                        <div className="ui left icon input swdh95 mb-2">
                                            <input className="prompt srch_explore" type="email"    placeholder="Email " />
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
                                            <span class="input-group-text" id="basic-addon2" ><i className=""></i></span>
                                        </div>
                                    </div>

                     

                                    <button className="login-btn mb-2" type="button">Sign Up</button>
                                    {/* <p className="mt-2"><i className="mx-2"><FaGoogle /></i> <i className=""> <FaFacebook /> </i></p> */}

                                    {/* <p className="sgntrm145"></p> */}



                                </form>



                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
