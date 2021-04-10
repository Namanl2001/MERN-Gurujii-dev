import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReadMoreReact from 'read-more-react';
import StarRatingComponent from 'react-star-rating-component';

class cards extends Component {
  render() {
    return (
      <div class='box-container'>
        <div class='box-item'>
          <div class='flip-box'>
            <div
              class='flip-box-front text-center'
              style={{
                backgroundImage: `url(https://i.pinimg.com/originals/7c/05/50/7c05508149920eba2d934c19ff83cbba.jpg)`,
              }}
            >
              <div class='inner color-white'>
                <br />
                <br />
                <h3
                  class='flip-box-header'
                  style={{ textTransform: 'uppercase' }}
                >
                  {this.props.user.coaching}
                </h3>
                <br />
                <h5>
                  {this.props.user.title} {this.props.user.username}
                </h5>
                <h3 class='flip-box-header'>
                  {this.props.user.subject} <br />
                </h3>
                <p>
                  ( {this.props.user.class1} {this.props.user.class2}{' '}
                  {this.props.user.class3} {this.props.user.class4} )
                </p>
                <img
                  src='https://s25.postimg.cc/65hsttv9b/cta-arrow.png'
                  alt=''
                  class='flip-box-img'
                />
              </div>
            </div>
            <div
              class='flip-box-back text-center'
              style={{
                backgroundImage: `url(https://i.pinimg.com/736x/5e/e2/db/5ee2db0b6b3098b78812712d137c102d.jpg)`,
              }}
            >
              <div class='inner color-white'>
                <h4 style={{ marginTop: '50%' }}>{this.props.user.tutor}</h4>
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
                <br />
                Address: {this.props.user.address} , {this.props.user.city}{' '}
                <br />
                {this.props.user.pin}
                <br />
                <p
                  style={{
                    marginTop: '70%',
                    textAlign: 'center',
                    fontSize: '15px',
                  }}
                >
                  Contact: {this.props.user.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
