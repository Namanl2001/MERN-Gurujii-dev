import React from 'react';
import './style.css';

function ContactUS() {
  return (
    <>
      <div class='container contct'>
        <h1>Contact Us</h1>
        <div class='row contct'>
          <form id='contact-form' class='card'>
            <input type='hidden' name='contact_number' />
            <label>Name</label>
            <input type='text' name='user_name' />
            <label>Email</label>
            <input type='email' name='user_email' />
            <label>Message</label>
            <textarea name='message'></textarea>
            <input type='submit' value='Send' />
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
