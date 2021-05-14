import React from 'react';
import './style.css';

const ourvision = () => {
  return (
    <div className='container-fluid'>
      <br />
      <h1 className='text-center mb-3 headercontent'>
        Our <span>Vision</span>
      </h1>
      <br />
      <h5>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi
        ipsum{' '}
      </h5>
      <br />
      <br />
      <div className='row' style={{ justifyContent: 'space-evenly' }}>
        <div className='col-md-3 c2'>
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
        <div className='col-md-3'>
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
        <div className='col-md-3'>
          <div className='text-white mb-3 cards2'>
            <div className='card-body color4'>
              <img
                src={require('../assets/03.png')}
                alt=''
                className='mx-auto d-block'
              />
              <br />
              <h3>Everything in One</h3>
              <br />
              <h5>
                Original, reliable, playful, and relatable. These are the values
                that connect our users and our employees at Discord.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourvision;
