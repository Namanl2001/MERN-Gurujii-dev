import React, { useEffect } from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Ourvision() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 1500,
    });
  }, []);

  return (
    <div className='container-fluid'>
      <br />
      <h1 className='text-center mb-3 headercontent' data-aos='fade-up'>
        Our <span>Vision</span>
      </h1>
      <br />
      <h5 data-aos='fade-up'>
        To connect you, with the best teacher for you, in your locality.{' '}
      </h5>
      <br />
      <br />
      <div className='row' style={{ justifyContent: 'space-evenly' }}>
        <div className='col-md-3 c2' data-aos='fade-up'>
          <div className='text-white mb-3 cards2'>
            <div className='card-body color4'>
              <img
                src={require('../assets/01.png')}
                alt=''
                className='mx-auto d-block'
              />
              <br />

              <h3>Share and Grow</h3>
              <br />
              <h5>
                As we grow, we will be able to provide more and more teachers,
                and have greater and greater impact on the world.
              </h5>
            </div>
          </div>
        </div>
        <div className='col-md-3' data-aos='fade-up'>
          <div className='text-white mb-3 cards2'>
            <div className='card-body color4'>
              <img
                src={require('../assets/02.png')}
                alt=''
                className='mx-auto d-block'
              />
              <br />
              <h3>Create Networks</h3>
              <br />
              <h5>
                We want you to build genuine relationships with your friends and
                communities close to home or around the world.
              </h5>
            </div>
          </div>
        </div>
        <div className='col-md-3' data-aos='fade-up'>
          <div className='text-white mb-3 cards2'>
            <div className='card-body color4'>
              <img
                src={require('../assets/03.png')}
                alt=''
                className='mx-auto d-block'
              />
              <br />
              <h3>Our Mission</h3>
              <br />
              <h5>
                Our mission is to create a thriving community of engaged people,
                who share their time, knowledge and influence to support the
                success of our students.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourvision;
