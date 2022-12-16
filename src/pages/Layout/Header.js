import React from 'react'

export default function Header() {
  return (
    <>
        
        <header className="header clearfix" style={{ backgroundColor: "#03bafe" }}>
                <button onClick={() => sidebarToggle("smallScreen")} type="button" id="toggleMenu" className="toggle_menu">
                    <i className='uil uil-bars'></i>
                </button>
                <button onClick={() => sidebarToggle("largeScreen")} className="collapse_menu">
                    <i className="uil uil-bars collapse_menu--icon "></i>
                    <span className="collapse_menu--label"></span>
                </button>
                <div className="main_logo" id="logo">
                    <Link to="#"><a href="#"><img src={logo} width={"55px"} alt="" /></a></Link>
                    {/* <Link to="#"><a href="#"><img className="logo-inverse" src={logo} width={"190px"} alt="" /></a></Link> */}
                </div>

                {/* <div className="top-category">
                    <div className="ui compact menu cate-dpdwn">
                        <div className="ui simple dropdown item">
                            <a href="#" className="option_links p-0" title="categories"><i className="uil uil-apps"></i></a>
                            <div className="menu dropdown_category5">
                                <a href="#" className="item channel_item">Development</a>
                                <a href="#" className="item channel_item">Business</a>
                                <a href="#" className="item channel_item">Finance & Accounting</a>
                                <a href="#" className="item channel_item">IT & Software</a>
                                <a href="#" className="item channel_item">Office Productivity</a>
                                <a href="#" className="item channel_item">Personal Development</a>
                                <a href="#" className="item channel_item">Design</a>
                                <a href="#" className="item channel_item">Marketing</a>
                                <a href="#" className="item channel_item">Lifestyle</a>
                                <a href="#" className="item channel_item">Photography</a>
                                <a href="#" className="item channel_item">Health & Fitness</a>
                                <a href="#" className="item channel_item">Music</a>
                                <a href="#" className="item channel_item">Teaching & Academics</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="search120">
                    <div className="ui search">
                        <div className="ui left icon input swdh10">
                            <input className="prompt srch10" type="text"
                                placeholder="Search here.." />
                            <i className='uil uil-search-alt icon icon1'></i>
                        </div>
                    </div>
                </div> */}
                <div className="header_right">



                    <ul>
                        {/* <li onClick={() => profiledropdown("messages")} className={profileDrop == "messages" ? "ui dropdown active visible" : "ui dropdown"}>
                            <a href="#" className="option_links" title="Messages"><i className='uil uil-envelope-alt' style={{ color: "white" }}></i><span
                                className="noti_count">3</span></a>
                            <div className={profileDrop == "messages" ? "menu dropdown_ms left transition visible d-block" : "menu dropdown_ms"}>
                                <a href="#" className="channel_my item">
                                    <div className="profile_link">
                                        <img src="/assets/images/person_1.jpg" alt="" />
                                        <div className="pd_content">
                                            <h6>Zoena Singh</h6>
                                            <p>Hi! Sir, How are you. I ask you one thing please explain it this video price.</p>
                                            <span className="nm_time">2 min ago</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="channel_my item">
                                    <div className="profile_link">
                                        <img src="/assets/images/person_1.jpg" alt="" />
                                        <div className="pd_content">
                                            <h6>Joy Dua</h6>
                                            <p>Hello, I paid you video tutorial but did not play error 404.</p>
                                            <span className="nm_time">10 min ago</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="channel_my item">
                                    <div className="profile_link">
                                        <img src="/assets/images/person_1.jpg" alt="" />
                                        <div className="pd_content">
                                            <h6>Jass</h6>
                                            <p>Thanks Sir, Such a nice video.</p>
                                            <span className="nm_time">25 min ago</span>
                                        </div>
                                    </div>
                                </a>
                                <a className="vbm_btn" href="instructor_messages.html">View All <i
                                    className='uil uil-arrow-right'></i></a>
                            </div>
                        </li> */}
                        <li onClick={() => profiledropdown("notifications")} className={profileDrop == "notifications" ? "ui dropdown active visible" : "ui dropdown"} >
                            <a href="#" className="option_links" title="Notifications"  ><i onClick={()=>GetNotifyread()} className='uil uil-bell' style={{ color: "white" }}></i><span
                                className="noti_count">{read}</span></a>
                            <div className={profileDrop == "notifications" ? "menu dropdown_mn left transition visible d-block" : "menu dropdown_mn"} style={{height:"350px" , overflow:"scroll"}}>
                                {notif.map((v,i)=>{

                                   return  <a href="#" className="channel_my item">
                                     <div className="profile_link">
                                         <img src={v.img} alt="" />
                                         <div className="pd_content">
                                             <h6>{v.fname + " " + v.lname}</h6>
                                             <p>{v.message}</p>
                                             {/* <span className="nm_time">2 min ago</span> */}
                                         </div>
                                     </div>
                                 </a>


                                })}
                               
{/*                               
                                <a className="vbm_btn" href="instructor_notifications.html">View All <i
                                    className='uil uil-arrow-right'></i></a> */}
                            </div>
                        </li>
                        <li className="ui dropdown">
                            <a href="#" className="option_links"><i className="fas fa-user-friends" style={{ color: "white", fontSize: "18px" }}></i></a></li>



                        <li onClick={() => { profiledropdown("profile") }} className={profileDrop == "profile" ? "ui dropdown active visible" : "ui dropdown"}>

                            <a href="#" className="opts_account" title="Account Information">

                            </a>
                            <img className="rounded-circle" id="profileid" src={Avator} alt="" width="40px" height="40px" />
                            <div className={profileDrop == "profile" ? "menu dropdown_account left transition visible d-block" : "menu dropdown_account"}>
                                <div className="channel_my">
                                    <div className="profile_link">
                                        <img src={profileimg == null ? Avator : profileimg} alt="" />
                                        <div className="pd_content">
                                            <div className="rhte85">
                                                <h6 className="text-capitalize">{profileData.fname + " " + profileData.lname}</h6>
                                                <div className="mef78" title="Verify">
                                                    <i className='uil uil-check-circle'></i>
                                                </div>
                                            </div>
                                            <span>
                                                <a href="#"
                                                    className="__cf_email__  text-capitalize"
                                                ></a>
                                            </span>
                                        </div>
                                    </div>
                                    <Link to="/Profile"> <a href="#" className="item channel_item " >View Profile</a></Link>
                                </div>

                                <a href="#" onClick={() => toggle2()} className="item channel_item">Change Password</a>

                                <a onClick={logout} href="#" className="item channel_item">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>


            <nav style={{ backgroundColor: "#03bafe" }} className={Sidebar == "largeScreen" ? "vertical_nav vertical_nav__minify" : (Sidebar == "smallScreen" ? "vertical_nav vertical_nav__opened" : "vertical_nav")}>
                <div className="left_section menu_left" id="js-menu" >

                    <div className="sidebar-user">

                        <div className='row ' style={{ backgroundColor: "white" }} >
                            <div className='col safdar' >
                                <img className="rounded-circle" src={profileimg == null ? Avator : profileimg} width={"60px"} />

                            </div>
                            <div className='col ahmed' style={{ alignItems: "center" }}>
                            <h6 className="text-capitalize">{profileData.fname }</h6>
                                <p>Admin</p>
                            </div>


                        </div>
                        {/* <div className="text-center mt-3" style={{ backgroundColor: "white", height: "80px" }}>
                            <img className="rounded-circle" src="assets/images/person_1.jpg" width={"60px"} />
                            <p>Admin</p>
                        </div> */}



                        <ul>










                            <li className="menu--item">
                                <Link to="/dashboard">   <a href="#" className={active == "/dashboard" ? "menu--link  navActive":"menu--link "} title="Dashboard">
                                    {/* <i className='uil uil-home-alt menu--icon'></i> */}
                                    <i className="fa fa-desktop menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Dashboard</span>
                                </a></Link>
                            </li>

                            {/* <li className="menu--item">
                                <Link to="/chartjs"> <a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="Dashboard">
                                
                                    <i className="fa fa-home menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Dashboard</span>
                                </a></Link>
                            </li> */}

                            <li className="menu--item">
                                <Link to="/categories">   <a href="#" className={active == "/categories" ? "menu--link  navActive":"menu--link "} title="Categories">
                                    {/* <i className='uil uil-home-alt menu--icon'></i> */}
                                    <i className="fa fa-tasks menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Categories</span>
                                </a></Link>
                            </li>


                            <li className="menu--item">

                                <Link to="/Services">  <a href="#" className={active == "/Services" ? "menu--link  navActive":"menu--link "} title="Services">
                                    {/* <i className='uil uil-home-alt menu--icon'></i> */}
                                    <i className="fa fa-wrench menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Services</span>
                                </a></Link>

                            </li>

                            <li className="menu--item">

                                <Link to="/Manager">   <a href="#" className={active == "/Manager" ? "menu--link  navActive":"menu--link "} title="Manager">
                                    {/* <i className='uil uil-kayak menu--icon'></i> */}
                                    <i className=" fas fa-user-tie  menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Manager</span>
                                </a></Link>

                            </li>

                            <li className="menu--item">

                                <Link to="/AdminCardDetails">   <a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="CardDetails">
                                    {/* <i className='uil uil-kayak menu--icon'></i> */}
                                    <i className=" fa fa-credit-card menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Card Details</span>
                                </a></Link>

                            </li>

                            <li className="menu--item">


                                <Link to="/RiderRegistration">  <a href="#" className={active == "/RiderRegistration" ? "menu--link  navActive":"menu--link "}title="Rider Management">
                                    <i className=" fa fa-motorcycle  menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Rider Management</span>
                                </a></Link>

                            </li>

                            <li className="menu--item">


                                <Link to="/EmployeeAdmin">  <a href="#" className={active == "/EmployeeAdmin" ? "menu--link  navActive":"menu--link "} title="EmployeeAdmin">
                                    <i className="fas fa-user  menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Employee Management</span>
                                </a></Link>

                            </li>

                            <li className="menu--item">

                                <Link to="/AdminBooking"> <a href="#" className={active == "/AdminBooking" ? "menu--link  navActive":"menu--link "} title="AdminBooking">
                                    {/* <i className="uil uil-heart-alt menu--icon"></i> */}
                                    <i className="fa fa-book menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Booking</span>
                                </a></Link>

                            </li>

                            <li className="menu--item">

                                <Link to="/AdminCarWash">  <a href="#" className={active == "/AdminCarWash" ? "menu--link  navActive":"menu--link "} title="Car Wash">

                                    <i className="	fas fa-car menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Car Wash</span>
                                </a></Link>

                            </li>


                            {/* <Link to="/Trackcar">      <li className="menu--item">

                                <a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="Track Car">

                                    <i className="fa fa-map-marker menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Track Car</span>
                                </a>

                            </li></Link> */}

                            <li className="menu--item">

                                <Link to="/Pricing"><a href="#" className={active == "/Pricing" ? "menu--link  navActive":"menu--link "} title="Pricing">
                                    {/* <i className="uil uil-heart-alt menu--icon"></i> */}
                                    <i className="fas fa-dollar-sign menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Pricing</span>
                                </a></Link>

                            </li>
                            <li className="menu--item">

                                <Link to="/PaymentAdmin"><a href="#" className={active == "/PaymentAdmin" ? "menu--link  navActive":"menu--link "} title="Payment">
                                    {/* <i className="uil uil-heart-alt menu--icon"></i> */}
                                    <i className="fas fa-money-bill-alt menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Payment</span>
                                </a></Link>

                            </li>




                            <li onClick={() => profiledropdown("dropdown")} className={profileDrop == "dropdown" ? " menu--item menu--item__has_sub_menu menu--subitens__opened" : "menu--item menu--item__has_sub_menu"}>
                                <i className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="Reservations">
                                    <i className="uil uil-clipboard-alt menu--icon" />
                                    <span className="menu--label">Reservations</span>
                                </i>
                                <ul className="sub_menu">


                                    <li className="sub_menu--item">
                                        <Link to="/AcceptReservation">  <a href="#" className="sub_menu--link">
                                            New reservation
                                        </a></Link>
                                    </li>

                                    <li className="sub_menu--item">
                                        <Link to="/TodayReturn">  <a href="#" className="sub_menu--link">
                                            Todays Return
                                        </a></Link>
                                    </li>



                                    <li className="sub_menu--item">
                                        <Link to="/UpcominReservation">  <a href="#" className="sub_menu--link">
                                            upcoming return
                                        </a></Link>
                                    </li>

                                    <li className="sub_menu--item">
                                        <Link to="/ActiveReservations">   <a href="#" className="sub_menu--link">
                                            Active Reservation
                                        </a></Link>

                                    </li>
                                    <li className="sub_menu--item">
                                        <Link to="/RepeatReservations">   <a href="#" className="sub_menu--link">
                                            Repeat Reservation
                                        </a></Link>

                                    </li>
                                    <li className="sub_menu--item">
                                        <Link to="/AdminParked">   <a href="#" className="sub_menu--link">
                                          Parked
                                        </a></Link>

                                    </li>

                                    <li className="sub_menu--item">
                                        <Link to="/AdminPickup">   <a href="#" className="sub_menu--link">
                                            Picked
                                        </a></Link>

                                    </li>
                                    <li className="sub_menu--item">
                                        <Link to="/AdminComplete">   <a href="#" className="sub_menu--link">
                                            Completed
                                        </a></Link>

                                    </li>
                                    <li className="sub_menu--item">
                                        <Link to="/Return">   <a href="#" className="sub_menu--link">
                                            Returns
                                        </a></Link>

                                    </li>


                                </ul>
                            </li>


                            {/* <li className="menu--item">

                                <Link to="/PendingReservations"><a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="Pending">

                                    <i className="fas fa-hourglass menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Pending Reservations</span>
                                </a></Link>

                            </li> */}
                            {/* 
                            <li className="menu--item">

                                <Link to="/AcceptReservation"><a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="accept">

                                    <i className="far fa-check-circle menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Accept Reservations</span>
                                </a></Link>

                            </li> */}

                            {/* <li className="menu--item">

                                <Link to="/AdminRejection"><a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="Reject">

                                    <i className="fa fa-window-close menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Reject Reservation</span>
                                </a></Link>

                            </li> */}
                            <li className="menu--item">

                                <Link to="/UserAdmin">   <a href="#" className={active == "/UserAdmin" ? "menu--link  navActive":"menu--link "} title="Customers">

                                    <i className="	fas fa-user-friends menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Customers</span>
                                </a></Link>

                            </li>

                            {/* <li className="menu--item">

                                <Link to="/AdminPickup"><a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="accept">

                                    <i className="	fas fa-car-side menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Pickup</span>
                                </a></Link>

                            </li> */}

                            {/* <li className="menu--item">

                                <Link to="/AdminComplete"><a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="accept">

                                    <i className="fa fa-check-square menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Complete</span>
                                </a></Link>

                            </li> */}

                            <li className="menu--item">

                                <Link to="/Tracking"><a href="#" className={active == "/Tracking" ? "menu--link  navActive":"menu--link "} title="accept">
                                    {/* <i className="uil uil-heart-alt menu--icon"></i> */}
                                    <i className="fa fa-map-marker menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Tracking</span>
                                </a></Link>

                            </li>
                            <li className="menu--item">

                                <Link to="/Profile">  <a href="#" className={active == "/Profile" ? "menu--link  navActive":"menu--link "} title="Profile">
                                    <i className="fas fa-user menu--icon d-flex justify-content-center align-items-center"></i>
                                    {/* <i className="uil uil-heart-alt menu--icon"></i> */}
                                    <span className="menu--label">Profile</span>
                                </a></Link>

                            </li>

                            <li className="menu--item">

                                <a onClick={logout} href="#" className="menu--link " title="Logout">
                                    <i className="fas fa-sign-out-alt menu--icon d-flex justify-content-center align-items-center"></i>
                                    {/* <i className="uil uil-heart-alt menu--icon"></i> */}
                                    <span className=" menu--label">Logout</span>
                                </a>

                            </li>






                        </ul>
                    </div>

                    {/* <div className="left_section pt-2">
                        <ul>
                            <li className="menu--item">

                                    <a href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "}  title="Profile">

                                        <i className="fas fa-user menu--icon d-flex justify-content-center align-items-center"></i>
                                        <span className="menu--label">Profile</span>
                                    </a>

                            </li>
                            <li className="menu--item">
                                <a  href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="website">

                                    <i className="fas fa-globe menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Website</span>
                                </a>
                            </li>
                            <li className="menu--item">
                                <a  href="#" className={active == "/AdminCardDetails" ? "menu--link  navActive":"menu--link "} title="Logout">

                                    <i className="fas fa-sign-out-alt menu--icon d-flex justify-content-center align-items-center"></i>
                                    <span className="menu--label">Logout</span>
                                </a>
                            </li>

                        </ul>
                    </div> */}
                    <div className="left_footer">



                        <div className="left_footer_content" style={{ paddingTop: "20vh" }}>
                            {/* <img src={logo} width={"100px"} /> */}
                        </div>
                    </div>
                </div>
            </nav>
    </>
  )
}
