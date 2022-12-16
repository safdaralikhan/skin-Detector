import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from "./skinlogo.png"

export default function ForgetPassword() {
  return (
    <div>

<div className="sign_in_up_bg">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <div className="col-lg-12">

          </div>
          <div className="col-lg-6 col-md-8">
            <div className="sign_form">
              <img src={logo} width={"150px"} height={"80px"} alt="Tutor Learner"></img>

              <h3>Forgot your password?</h3>
              <p className="mt-5">Please enter the email address associated with your account and We will email you a link to reset your password. </p>

              <form>
                <div className="ui search focus mt-50">
                  <label className="label25 text-left">Email<span className="text-danger">*</span></label>
                  <div className="ui left icon input swdh95 mb-3">
                    <input className="prompt srch_explore"    id="id_email"  placeholder="Email Address" />
                    {/* <i className="uil uil-envelope icon icon2" /> */}
                  </div>


                </div>



                  <button  className="login-btn" type="button">Send Email</button>

              </form>
             {/* <p className="mb-0 mt-30 sgntrm145">Go Back <a href="/">Sign In</a></p> */}


            </div>

          </div>
        </div>
      </div>

    </div>
    </div>
  )
}
