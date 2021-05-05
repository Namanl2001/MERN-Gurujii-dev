import React from 'react';
import Img404 from '../assets/404.png';
import Navbar from '../components/navbar';
import Chatbot from '../components/chatbot';
import './style.css';

const E404 = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Chatbot />
      <h1 className='error_heading'>
        Oops &#44; the page you&apos;re looking for doesn&apos;t exist
      </h1>
      <img src={Img404} className='error_img' alt='Img404'></img>
    </div>
  );
};

export default E404;
