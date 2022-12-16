import React from 'react'
import logo from "./skinlogo.png"

export default function VerificationCode() {
  return (
    <>

<div className="sign_in_up_bg">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">

          <div className="col-lg-6 col-md-8">
            <div className="sign_form">
              <img src={logo}width={"150px"} height={"80px"} alt="Tutor Learner"></img>

              <p className="mt-5">We have emailed a 5-digit confirmation code to your email, please enter the code in below box to verify your email.</p>
              <form>
                <div className="ui search focus mt-50">


                    <label className="label25 text-left">Varification Code<span className="text-danger">*</span></label>
                    <div className="ui left icon input swdh95">
                      <input  className="prompt srch_explore"  type="number" name="varification code"   placeholder="Enter varification Code" />
                      {/* <i className="uil uil-envelope icon icon2" /> */}
                    </div>


                </div>

                  <button   className="login-btn" type="button" >Confirmation</button>



              </form>

            </div>

          </div>
        </div>
      </div>

    </div>
    </>
  )
}
