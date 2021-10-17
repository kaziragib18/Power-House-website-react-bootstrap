import React from 'react';
import Banner from '../Banner/Banner';
import Instructors from '../Instructors/Instructors';
import Services from '../Services/Services';

const Home = () => {
      return (
            <div id="home">
                  <Banner></Banner>
                  <Services></Services>
                  <Instructors></Instructors>
            </div>
      );
};

export default Home;