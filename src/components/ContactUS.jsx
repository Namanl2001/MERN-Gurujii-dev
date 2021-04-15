import React from 'react';
import './style.css';

function ContactUS() {
  return (
    <>
      <div class='container contct'>
        <div class='row contct'>
          <form id='contact-form' class='card'>
            <div id='sec1'>
              <h1>
                <strong>Contact us</strong>
              </h1>
            </div>
            <div id='sec2'>
              <input type='text' name='user_name' placeholder='Name' />
              <input type='email' name='user_email' placeholder='Email' />
              <textarea name='message' placeholder='Massage'></textarea>
              <input type='submit' value='Send' id='form-submit' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
