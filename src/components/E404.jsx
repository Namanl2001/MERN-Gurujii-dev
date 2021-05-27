import React from 'react';
import Img404 from '../assets/404.png';
import Navbar from '../components/navbar';
import Chatbot from '../components/chatbot';
import './style.css';
import { Link } from 'react-router-dom';

const E404 = () => {
  return (
    <div>
      <Navbar />
      <Chatbot />
      <div className='not-found'>
        <div className='error'>
          <div>
            <img src={Img404} className='error-logo' alt='Img404'></img>
          </div>
          <div className='error-content'>
            Oops &#44; the page you&apos;re looking for doesn&apos;t exist
          </div>
          <Link to='/'>
            <button id='err_btn' type='submit'>
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default E404;
