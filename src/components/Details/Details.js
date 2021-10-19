import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
      const { serviceId } = useParams();

      const [services, setServices] = useState([]);

      useEffect(() => {
            fetch('./services.json')
                  .then(res => res.json())
                  .then(data => setServices(data));
      }, [])

      const serviceDetails = services.filter(detail=> serviceId == detail.id);
      console.log(serviceDetails);

      return (
            <div>
                  <h3 className="text-danger mt-3 p-3">With Powerhouse Gyms all over the world, each facility offers services unique to the area & needs of its members.</h3>
                  <h5 className="text-light p-1">Below are some of the services & features found at Powerhouse Gyms worldwide. For services available in your area, please contact us to find your gym’s unique offerings.</h5>
                  <hr className="text-light" />
                  <h2>Service Id: {serviceId}</h2>
                  <h2>sdasd</h2>
                  <div className="container">
                        <div className="about__section">
                             
                              <div className="row">
                                    <div className="col-md-6">
                                          <div className="about__right__section text-start p-4 text-light">
                                                <h1 className="text-light mt-3">asdad</h1>
                                                <p className="text-danger">
                                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ratione veritatis blanditiis, repudiandae corporis distinctio rerum? Voluptatem at corporis reiciendis?
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

export default Details;