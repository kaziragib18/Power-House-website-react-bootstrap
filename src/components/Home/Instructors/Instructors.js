import React from 'react';
import { Carousel } from 'react-bootstrap';
import instructor1 from '../../../images/instructors/instructor-img1.jpg'
import instructor2 from '../../../images/instructors/instructor-img2.jpg'
import instructor3 from '../../../images/instructors/instructor-img3.jpg'
import instructor4 from '../../../images/instructors/instructor-img4.jpg'
import Instructor from '../Instructor/Instructor';

const instructors = [
      {
            img: instructor1,
            name: 'Rock Jhonson',
            specialization: 'Weight lifting'
      },
      {
            img: instructor2,
            name: 'Shown Micheal',
            specialization: 'Body building'
      },
      {
            img: instructor3,
            name: 'Lisa Lionheart',
            specialization: 'Fitness'
      },
      {
            img: instructor4,
            name: 'Mia Rain',
            specialization: 'Nutritionist'
      },
]
const Instructors = () => {
      return (
            <div id="instructors" className="container">
                  <h2 className="text-danger mt-4 mb-3">Personal Instructors</h2>
                  <h5 className="text-light"> Personal Training is offered in a one-on-one format lead by a certified personal trainer, providing a very personalized experience. Small group training is similar to personal training, only it’s more fun as there are typically 2-4 people in a session. Team workouts include 5+ people and provide accountability and an energy-filled atmosphere that keeps you motivated.</h5>
                  <hr className="text-light"/>
                  <div className="row">
                        {
                              instructors.map(instructor =><Instructor
                              key ={instructor.name}
                              instructor={instructor}></Instructor>)
                        }

                  </div> 

                  <h2 className="text-danger mt-4 mb-3">Training & Supervision</h2>
                  <h5 className="text-light">Our instrauctors have  comprehensive knowledge of how to use all the equipment in gym safely and effectively. This will help them advise members on correct procedures and stop any unsafe practices. Our instructors always on hand to monitor the gym floor and advise members on the use of equipment to reduce the chance of injury.</h5>
                  <hr className="text-light"/>
            
                  <Carousel id="training" className="pt-1">
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/07/lifting_equipment_gym-7.jpg"
                                    alt="First slide"
                              />
                              <Carousel.Caption>
                                    <h3 className="text-light fs-5 fw-bold bg-dark p-2 rounded-pill">Always Monitoring For Safety</h3>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/02/Gym-Injury-1.png"
                                    alt="Second slide"
                              />

                              <Carousel.Caption>
                                    <h3 className="text-dark fs-5 fw-bold bg-light p-2 rounded-pill">Trained Medical Instructors</h3>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/02/Gym-Induction.jpg"
                                    alt="Third slide"
                              />

                              <Carousel.Caption>
                                    <h3 className="text-dark fs-5 fw-bold bg-light p-1 rounded-pill">Continuous Guidance Anytime</h3>
                              </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </div>
            
      );
};

export default Instructors;