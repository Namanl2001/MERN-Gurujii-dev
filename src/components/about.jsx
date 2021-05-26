import React, { Component } from 'react';
import './style.css';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section class='text-center about'>
        <h1>WHO ARE WE ?</h1>
        <div class='container'>
          <div class='row'>
            <div
              class='col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn'
              data-wow-offset='200'
            >
              <span class='fa fa-group'></span>
              <h2>Grow Together</h2>
              <p class='lead'>
                A world of pleasure and pain. Something to share with everyone
                around. Its a big growing family with the moto to shine and
                improve together.
              </p>
            </div>
            <div
              class='col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn'
              data-wow-offset='200'
            >
              <span class='fa fa-bullseye'></span>
              <h2>Our Aim</h2>
              <p class='lead'>
                {' '}
                To turn visitors into prospects, and to improve and grow
                everyday.
              </p>
            </div>
            <div class='clearfix visible-md-block visible-sm-block'></div>
            <div
              class='col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn'
              data-wow-offset='200'
            >
              <span class='fa fa-info'></span>
              <h2>Everything in One</h2>
              <p class='lead'>
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
