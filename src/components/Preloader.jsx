import React from 'react';
import './style.css';

function Preloader() {
  return (
    <div className='preloader'>
      <div className='updown'>
        <img src={require('../assets/faviconNew.png')} alt='gurujii Logo' />
        <h1>
          URUJII<span> .</span>
          <span> .</span>
          <span> .</span>
        </h1>
      </div>
    </div>
  );
}

export default Preloader;
