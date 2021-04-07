import React from 'react';
import './style.css';

function ContactUS() {
  return (
    <>
      <div class='container contct'>
        <div class='row contct'>
          <form id='contact-form' class='card'>
            <h1>
              <strong>Contact us</strong>
            </h1>
            <input type='text' name='user_name' placeholder='Name' />
            <input type='email' name='user_email' placeholder='Email' />
            <textarea name='message' placeholder='Massage'></textarea>
            <input type='submit' value='Send' id='form-submit' />
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
