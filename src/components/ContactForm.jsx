import React, { useState } from 'react';
import './style.css';

const ContactUsComponent = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    let details = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    const response = await fetch('http://localhost:5000/contactus/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    const result = await response.json();
    alert(result.message);
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className='contactus-mainContainer'>
      <div>
        <div className='topic-text'>Send us a message</div>
        <p>
          Whether you are curoius about features or even free trial - we are
          ready to answer all your questions.
        </p>
      </div>
      <form className='contactus-form' onSubmit={handleSubmit}>
        <div className='input-box'>
          <input
            onChange={e => setName(e.target.value)}
            type='text'
            id='name'
            placeholder='Enter your Name'
          />
        </div>
        <div className='input-box'>
          <input
            type='text'
            onChange={e => setEmail(e.target.value)}
            id='email'
            placeholder='Enter your Email'
          />
        </div>
        <div className='input-box'>
          <input
            onChange={e => setSubject(e.target.value)}
            type='text'
            id='subject'
            placeholder='Enter your Subject'
          />
        </div>
        <div className='input-box message-box'>
          <textarea
            onChange={e => setMessage(e.target.value)}
            rows='3'
            id='message'
            type='text'
            placeholder='Enter your Message'
          />
        </div>

        <button className='btn' type='submit'>
          Send Now
        </button>
      </form>
    </div>
  );
};

export default ContactUsComponent;
