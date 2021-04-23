import React from 'react';
import Img404 from './404.png';
import Navbar from '../components/navbar';
import Chatbot from '../components/chatbot';
import './style.css';

const E404 = () => {
  return (
    <div>
      <Navbar />
      <Chatbot />
      <h1 className='error_heading'>
        Oops &#44; the page you&apos;re looking for doesn&apos;t exist
      </h1>
      <img src={Img404} className='error_img'></img>
    </div>
  );
};

export default E404;
