import React from 'react';
import './Recipe.css'

const Recipe = ({ recipe }) => {
      const { name, img, desc, video } = recipe;
      
      return (
            <div className="recipe__card mb-3 col-lg-3 col-sm-6 col-12">
                  <div className="border border-dark rounded w-100 bg-light">
                        <img className="w-100" src={img} alt="" />
                        <h4 className="text-danger pt-3 fs-5 fw-bold" >{name}</h4>
                        <h5 className="text-dark fs-6  mb-3 p-1">{desc}</h5>
                        <hr />
                        <p className="fw-bold"><a href={video}>Recipe Link</a></p>
                  </div>
            </div>
      );
};

export default Recipe;