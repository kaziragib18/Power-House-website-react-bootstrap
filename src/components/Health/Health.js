import React from 'react';
import { Link } from 'react-router-dom';
import './Health.css'
import Recipes from './Recipes/Recipes';

const Health = () => {
      return (
            <>
                  <div>
                        <div className="health__banner d-flex  align-items-center ">
                              <div className="row container">
                                    <div className="col-md-10">
                                          <h1 className="title">NUTRITION & DIET</h1>
                                          <h2 className="title-sm"> Healthy living at your fingertips.</h2>
                                          <Link to='/login'>
                                          <button className="btn btn-danger rounded-pill m-3 py-3 px-4">Signup Now!</button>
                                          </Link>
                                    </div>
                                    <div className="col-md-2"></div>
                              </div>
                        </div>
                  </div>
                  <Recipes></Recipes>



            </>
      );
};

export default Health;