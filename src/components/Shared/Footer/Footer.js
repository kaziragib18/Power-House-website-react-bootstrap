import React from "react";
import logo from "../../../images/logo/logo.png";
import "./Footer.css";

const Footer = () => {
      return (
            <div className="mt-5 footer">
                  <div className="">
                        <div className="row">
                              <div className="col-md-3 ">
                                    <div className="first__part p-1">
                                          <img className="logo__img" src={logo} alt="" />
                                          <p className="pt-3">Join A Gym Where You’re More Than Just A Member. Powerhouse Gym is Family Owned and Operated.</p>
                                         
                                    </div>
                              </div>
                              <div className="col-md-3">
                                    <div className="second__part">
                                          <h1 className="fs-3 ">Subscribe to our Newsletter</h1>
                                          <input
                                                className="input-field rounded-pill mt-3 px-4"
                                                type="text"
                                                placeholder="Enter your email"
                                          />
                                          <br />
                                          <input className="input-button btn btn-danger rounded-pill px-3 py-1 mt-3 mb-4" type="submit" />
                                          <br />
                                          
                                    </div>
                              </div>
                              <div className="col-md-3">
                                    <div className="third__part">
                                          <h1 className="fs-3">Useful Links</h1>
                                          <p className="mt-4">Privacy Policy</p>
                                          <p>Blog</p>
                                          <p>FAQ</p>
                                          <p>Membership</p>
                                          <p>Contact</p>
                                    </div>
                              </div>
                              <div className="col-md-3">
                                    <div className="fourth__part">
                                          <h1 className="fs-3 mb-4">Contact Us</h1>
                                          <p>
                                                <span className="m-2"><img className="footer__icon" src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" /></span>

                                                <span className="m-2 "><img className="footer__icon" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /></span>

                                                <span className="m-2 "><img className="footer__icon" src="https://cdn-icons-png.flaticon.com/128/124/124021.png" alt="" /></span>

                                                <span className="m-2 "><img className="footer__icon" src="https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg" alt="" /></span>
                                          </p>
                                          <small className="mt-5">Address: Bashundhora R/A, Block A, Road 3, Henis more street, Dhaka</small>
                                          <hr />
                                          <small className="mt-3">Phone: +08801949434546</small>
                                          <br />
                                          <small className="mt-3">Mail: support.Powerhouse.com</small>
                                    </div>
                              </div>
                        </div>
                        <hr />
                        <div className="text-center">
                              <small>© Power House, @kaziragib 2021. All Rights Reserved.</small>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;