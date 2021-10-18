import React from "react";
import logo from "../../../images/logo/logo2.png"
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
                                          <p>
                                                <span className="m-2 ">icon</span>
                                                <span className="m-2 ">icon</span>
                                                <span className="m-2 ">icon</span>
                                                <span className="m-2 ">icon</span>
                                          </p>
                                    </div>
                              </div>
                              <div className="col-md-3">
                                    <div className="third__part">
                                          <h1 className="fs-3">Useful Links</h1>
                                          <p className="mt-4">Privacy Policy</p>
                                          <p>Blog</p>
                                          <p>FAQ</p>
                                          <p>Contact</p>
                                    </div>
                              </div>
                              <div className="col-md-3">
                                    <div className="fourth__part">
                                          <h1 className="fs-3 mb-4">Contact Us</h1>
                                          <small className="mt-5">Office: 12 Fake Street,New York</small>
                                          <br />
                                          <small className="mt-3">Phone: (08) 8827 633354</small>
                                          <br />
                                          <small className="mt-3">Fax: 08) 08 4752 1499</small>
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