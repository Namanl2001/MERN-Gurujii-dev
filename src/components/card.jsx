import React, { Component } from 'react';
import './style.css';
import ReadMoreReact from 'read-more-react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import { Button } from 'bootstrap-4-react';

class cards extends Component {
  state = {
    clicked: false,
    popularity: this.props.user.popularity,
  };
  handleClick = () => {
    console.log('current state is', this.state);
    axios
      .post(`/users/updatePopularity/${this.props.user._id}`, {
        popularity: this.state.popularity + 1,
      })
      .then(
        res => {
          console.log(res);
        },
        error => {
          console.log(`Error: ${error}`);
        }
      );

    this.setState({
      clicked: true,
    });
  };

  render() {
    var imageUrl = '';
    if (this.props.user.profilePic === '') {
      imageUrl = './photo.png';
    } else {
      imageUrl = `./uploads/${this.props.user.profilePic}`;
    }

    return (
      <div className='box-container'>
        <div className='box-item'>
          <div className='flip-box'>
            <div
              className='flip-box-front text-center card'
              style={{
                backgroundImage: `url(https://i.pinimg.com/originals/7c/05/50/7c05508149920eba2d934c19ff83cbba.jpg)`,
              }}
            >
              <img
                className='card-img-top'
                src={imageUrl}
                alt='Card image cap'
                onError={e => {
                  e.target.src = './photo.png';
                }}
              />

              <div className='front-face-card inner color-white'>
                <h3
                  className='flip-box-header'
                  style={{ textTransform: 'uppercase' }}
                >
                  {this.props.user.coaching}
                </h3>

                <h5 className='head'>
                  {this.props.user.title} {this.props.user.username}
                </h5>
                <h5>{this.props.user.tutor}</h5>
                <h4
                  className='flip-box-header'
                  style={{ textTransform: 'Capitalize' }}
                >
                  {this.props.user.subject} <br />
                </h4>
                <p style={{ marginBottom: '5px' }}>
                  ( {this.props.user.class1} {this.props.user.class2}{' '}
                  {this.props.user.class3} {this.props.user.class4} )
                </p>

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
              <Button
                info
                style={{ marginTop: '10px' }}
                onClick={this.state.clicked ? '' : this.handleClick}
              >
                Click here to know more!
              </Button>

              <div className='back-face-card inner color-white'>
                <h6>Profile Views : {this.state.popularity}</h6>
                <h4>{this.props.user.tutor}</h4>
                <div style={{ fontSize: 25 }}>
                  <StarRatingComponent
                    name='rate2'
                    editing={false}
                    starCount={5}
                    value={4}
                    emptyStarColor={'#FFFFFF'}
                  />
                </div>
                Qualification : {this.props.user.qualification}
                <ReadMoreReact
                  text={this.props.user.about}
                  min='60'
                  ideal='65'
                  max='80'
                  readMoreText='Click! to read more'
                />
                Address: {this.props.user.address} , {this.props.user.city}{' '}
                <br />
                {this.props.user.pin}
              </div>
              {/* will include absolute styles for this element */}
              <h6 style={{ color: 'white' }} className='contact'>
                Contact: {this.props.user.phone}
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
