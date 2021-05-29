import React, { Component } from 'react';
import './style.css';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='text-center about'>
        <h1>WHO ARE WE ?</h1>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn'
              data-wow-offset='200'
            >
              <span className='fa fa-group'></span>
              <h2>Grow Together</h2>
              <p className='lead'>
                A world of pleasure and pain. Something to share with everyone
                around. Its a big growing family with the moto to shine and
                improve together.
              </p>
            </div>
            <div
              className='col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn'
              data-wow-offset='200'
            >
              <span className='fa fa-bullseye'></span>
              <h2>Our Aim</h2>
              <p className='lead'>
                {' '}
                To turn visitors into prospects, and to improve and grow
                everyday.
              </p>
            </div>
            <div className='clearfix visible-md-block visible-sm-block'></div>
            <div
              className='col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn'
              data-wow-offset='200'
            >
              <span className='fa fa-info'></span>
              <h2>Everything in One</h2>
              <p className='lead'>
                We have created this platform to help students find the best
                tution teacher in their city easily. You just have to enter the
                pincode of your city.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
