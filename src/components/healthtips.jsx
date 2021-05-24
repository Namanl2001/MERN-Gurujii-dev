import React, { Component } from 'react';
import { Container, Row } from 'bootstrap-4-react';
import Navbar from '../components/navbar';
import './style.css';

const content = [
  {
    aboutNumber: 'EAT HEALTHY',
    aboutContent:
      'Eating well is vital for healthy living, but it’s not something that students are always good at. There’s a reason for all those cold beans and instant noodle stereotypes, after all. This is changing, though. But the most important thing is making time to eat proper, healthy meals on a regular basis.',
  },
  {
    aboutNumber: 'GOOD SLEEP',
    aboutContent:
      'Sleep is just as important as diet and exercise for a healthy lifestyle. Ideally, you should get between seven and nine hours every night. If this isn’t currently the case, cutting back on caffeine after 3pm and avoiding illuminated screens (phones, tablets, etc.) before bed could help.',
  },
  {
    aboutNumber: 'HEALTHY MIND',
    aboutContent:
      'There are simple ways you can help stay health:-Being aware of your own mental health and stress levels. Knowing your stress triggers. Taking time out to relax now and then. Meditation and some excercises.',
  },
];

class Card extends Component {
  render() {
    return (
      <div className='box-container'>
        <div className='box-item'>
          <div className='flip-box'>
            <div
              className='flip-box-front text-center'
              style={{
                backgroundImage: `url(https://i.pinimg.com/originals/7c/05/50/7c05508149920eba2d934c19ff83cbba.jpg)`,
              }}
            >
              <div className='inner color-white'>
                <br />
                <br />
                <h3
                  className='flip-box-header'
                  style={{ textTransform: 'uppercase' }}
                >
                  {this.props.content.aboutNumber}
                </h3>
                <br />
                <img
                  src='https://s25.postimg.cc/65hsttv9b/cta-arrow.png'
                  alt=''
                  className='flip-box-img'
                />
              </div>
            </div>
            <div
              className='flip-box-back text-center'
              style={{
                backgroundImage: `url(https://i.pinimg.com/736x/5e/e2/db/5ee2db0b6b3098b78812712d137c102d.jpg)`,
              }}
            >
              <div className='inner color-white'>
                {this.props.content.aboutContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class healthtips extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <Container className='alignment'>
            <Row>
              <Card content={content[0]} />
              <Card content={content[1]} />
              <Card content={content[2]} />
            </Row>
          </Container>
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default healthtips;
