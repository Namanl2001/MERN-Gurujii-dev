import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import ReadMoreReact from 'read-more-react';
import StarRatingComponent from 'react-star-rating-component';

class cards extends Component {
  state={
    clicked:false,
    popularity:this.props.popularity
  }
  handleClick = () => {
    axios
      .patch(`/users/update/${this.props.data._id}`, {
        popularity: this.state.popularity+1
      })
      .then(response => {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      clicked:true
    })
  };

  render() {
    return (
      <div className='box-container'>
        <div className='box-item'>
          <div className='flip-box' onClick={this.state.clicked?'':this.handleClick}>
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
                  {this.props.user.coaching}
                </h3>
                <br />
                <h5 className='head'>
                  {this.props.user.title} {this.props.user.username}
                </h5>
                <h4 style={{ marginTop: '1.5rem' }}>{this.props.user.tutor}</h4>
                <h3
                  className='flip-box-header'
                  style={{ textTransform: 'Capitalize' }}
                >
                  {this.props.user.subject} <br />
                </h3>
                <p>
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
              <br />
              <div className='inner color-white' style={{ marginTop: '7%' }}>
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
                <p className='cont'>Contact: {this.props.user.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
