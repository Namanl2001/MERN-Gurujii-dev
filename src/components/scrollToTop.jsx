import React, { Component } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

class scrollToTop extends Component {
  state = {
    opacity: '0',
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 50) {
          this.setState({ opacity: '1' });
        } else {
          this.setState({ opacity: '0' });
        }
      };
    }
  }

  render() {
    return (
      <div
        className='scrollButton'
        style={{ opacity: `${this.state.opacity}` }}
      >
        {
          <div
            className='back-to-top'
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <a href='/#'>
              <FaArrowUp
                size={24}
                style={{ fill: 'white', position: 'absolute', top: 7, left: 8 }}
              />
            </a>
          </div>
        }
      </div>
    );
  }
}

export default scrollToTop;
