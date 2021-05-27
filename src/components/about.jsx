import React, { Component } from 'react';
import Chatbot from '../components/chatbot';
import Sidebar from './Sidebar';
import Board from '../assets/board.jpg';
import Navbar from '../components/navbar';
import AOS from 'aos';
import Reach from '../components/Reach';
import Vision from '../components/ourvision';
import ScrollToTop from './scrollToTop';
import Contributors from './contributors';
import 'aos/dist/aos.css';
class about extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      delay: 1000,
    });
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
          <div className='center'>
            <img data-aos='fade-up' src={Board} alt='' />
          </div>
          <br />
          <br />
          <br />
        </div>
        <Chatbot />
        <Sidebar />
        <ScrollToTop />
        <br />
        <div className='bigbtn-container' data-aos='fade-up'>
          <a href='/home'>
            <button className='bigbtn hvr-bounce-to-top'>
              <h2>Find Tutors in your locality!</h2>
            </button>
          </a>
        </div>
        <Vision />
        <Reach />
        <Contributors />
        <br />
      </>
    );
  }
}

export default about;
