import React from 'react';
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

            </div>
      );
};

export default Instructors;