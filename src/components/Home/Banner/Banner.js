import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
      return (
            <>
                  <div>
                  <div className="banner d-flex  align-items-center ">
                        <div className="row container">
                              <div className="col-md-10">
                                    <h1 className="title">Serious Results. Period.</h1>
                                    <h2 className="title-sm"> No matter your fitness level, our gyms are equipped to get the results you want.</h2>
                                    <Link to='/about'>
                                    <button className="btn btn-danger rounded-pill m-3 py-3 px-4">About us</button>
                                    </Link>
                              </div>
                              <div className="col-md-2"></div>
                        </div>
                  </div>
            </div>

            </>
      );
};

export default Banner;