import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
      const [services, setServices] = useState([]);

      useEffect(() => {
            fetch('services.json')
                  .then(res => res.json())
                  .then(data => setServices(data));
      }, [])

      return (
           <div id="services" className="p-3">
                 <h2 className="text-danger mt-5">Our Services</h2>
                 <h5 className="text-light">Together – we can make healthy happen. That’s why we offer personal training and classes when you’re here, and the right tools to keep you on track when you’re not. Our friendly, professional staff is trained to help you along your fitness journey, no matter how much support you need.</h5>
                  <hr className="text-light"/>
                 <div className="service__div">
                 <div className="service__container">
                  {
                        services.map(service => <Service
                              key={service.id}
                              service={service}>

                        </Service>)
                  }

            </div>
                 </div>
           </div>
      );
};

export default Services;