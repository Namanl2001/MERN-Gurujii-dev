import React, { Component } from 'react';
import { getInitalData } from '../../store/reducer/user';
import { connect } from 'react-redux';
import { Container, Row } from 'bootstrap-4-react';
import Navbar from '../navbar';
import Card from './Style';

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

class healthtips extends Component {
  componentDidMount() {
    this.props.getInitalData();
  }

  render() {
    return (
      <>
        <div className='parallax'>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Container
            style={{
              marginTop: '5em',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Row>
              <Card content={content[0]} />
              <Card content={content[1]} />
              <Card content={content[2]} />
            </Row>
          </Container>
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default connect(state => state, { getInitalData })(healthtips);
