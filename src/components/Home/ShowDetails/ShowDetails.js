import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ShowDetails = () => {
      let { id } = useParams();

      const [serviceData, setServiceData] = useState([]);

      const [singleService, setSingleService] = useState({});

      //call when data is loaded and set
      useEffect(() => {
           fetch('/serviceDetails.json')
           .then(res=> res.json())
           .then(data =>setServiceData(data.service))
      }, [])

      //call when all data set
      useEffect(()=>{
           const foundService = serviceData.find(service => service.id === id)
           console.log(foundService);
           setSingleService(foundService);
      },[serviceData])

      return (
            <div>
                  <h3 className="text-danger mt-3 p-3">With Powerhouse Gyms all over the world, each facility offers services unique to the area & needs of its members.</h3>
                  <h5 className="text-light p-1">Below are some of the services & features found at Powerhouse Gyms worldwide. For services available in your area, please contact us to find your gym’s unique offerings.</h5>
                  <hr className="text-light" />

                  <h2 className="text-danger">Service Id: {id}</h2>
                  
                  <div className="container">
                        <div className="about__section">
                              <div className="row">
                                    <div className="col-md-6">
                                          <div className="about__right__section text-start p-4 text-light">
                                                <h1 className="text-light mt-3">show name</h1>
                                                <p className="text-danger">
                                                      show description
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-md-6">
                                          <div className="about__image">
                                                <img className="w-100 pt-5 rounded" src="https://images.unsplash.com/photo-1617634188234-a449146e911e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" alt="" />
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>

      );
};

export default ShowDetails;