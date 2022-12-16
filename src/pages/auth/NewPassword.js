import React from 'react'
import logo from "./skinlogo.png"


export default function NewPassword() {
    return (
        <>
            <div className="sign_in_up_bg">
                <div className="container">
                    <div className="row justify-content-lg-center justify-content-md-center">

                        <div className="col-lg-6 col-md-8">
                            <div className="sign_form">

                                <img src={logo} width={"150px"} height={"80px"} alt="Tutor Learner"></img>

                                <form>
                                    <label className="label25 text-left">New Password<span className="text-danger">*</span></label>
                                    <div className="ui search focus mt-15 mb-3">

                                        <div className="ui left icon input swdh95 mb-2">
                                            <input  className="prompt srch_explore" type="password" name="password" id="id_password" required maxLength={64} placeholder="New Password" />
                                            {/* <i className="uil uil-key-skeleton-alt icon icon2" /> */}
                                        </div>
                                    </div>

                                    <label className="label25 text-left">Confirm New Password<span className="text-danger">*</span></label>
                                    <div className="ui search focus mt-15 mb-3">

                                        <div className="ui left icon input swdh95 mb-2">
                                            <input className="prompt srch_explore" type="password" name="password" id="id_password" required maxLength={64} placeholder="Confirm New Password" />
                                            {/* <i className="uil uil-key-skeleton-alt icon icon2" /> */}
                                        </div>
                                    </div>


                                    <button  className="login-btn" type="button">Confirm</button>
                                </form>
                                {/* <Link href={"/superAdmin/auth/login"} passHref><p className="mb-0 mt-30 sgntrm145">Go Back <a href="#">Sign In</a></p></Link> */}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
