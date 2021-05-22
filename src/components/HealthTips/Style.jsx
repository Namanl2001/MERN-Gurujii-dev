import React, { Component } from 'react';
import '../style.css';

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
              <br />
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

export default Card;
