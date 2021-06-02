import React, { Component } from 'react';
import './style.css';
import CountUp from 'react-countup';
import AOS from 'aos';
import VisibilitySensor from 'react-visibility-sensor';
import 'aos/dist/aos.css';

class cards extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      delay: 1500,
    });
  }
  render() {
    return (
      <div className='container-fluid'>
        <br />
        <h1 className='text-center mb-3 headercontent' data-aos='fade-up'>
          Our <span>Reach</span>
        </h1>
        <br />
        <div className='row' style={{ justifyContent: 'space-evenly' }}>
          <div className='col-md-3' data-aos='fade-up'>
            <div className='text-white mb-3 cards2'>
              <div className='card-body color1'>
                <img
                  src={require('../assets/student.png')}
                  alt='student'
                  className='mx-auto d-block'
                />
                <br />
                <br />
                <h2 className='card-title text-center black'>
                  <CountUp end={30} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <br />
                <h5 className='text-center'>CONTRIBUTORS</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3' data-aos='fade-up'>
            <div className='text-white mb-3 cards2'>
              <div className='card-body color2'>
                <img
                  src={require('../assets/calendar.png')}
                  alt='calender'
                  className='mx-auto d-block'
                />
                <br />
                <br />
                <h2 className='card-title text-center black'>
                  <CountUp end={90} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <br />
                <h5 className='text-center'>FORKS</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3' data-aos='fade-up'>
            <div className='text-white mb-3 cards2 media'>
              <div className='card-body color3'>
                <img
                  src={require('../assets/leadership.png')}
                  alt='leadership'
                  className='mx-auto d-block'
                />
                <br />
                <br />
                <h2 className='card-title text-center yellow'>
                  <CountUp end={30} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <br />
                <h5 className='text-center'>STARS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
