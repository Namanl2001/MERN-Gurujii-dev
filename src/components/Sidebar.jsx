import React, { Component } from 'react';
import './style.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

class Sidebar extends Component {
  render() {
    return (
      <div className='social'>
        <ul>
          <li>
            <a href='/#'>
              <span>WhatsApp</span>
              <WhatsAppIcon />
            </a>
          </li>
          <li>
            <a href='/#'>
              <span>Facebook</span>
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href='https://github.com/Namanl2001/MERN-Gurujii-dev'>
              <span>Github</span>
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href='/#'>
              <span>Instagram</span>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href='/#'>
              <span>LinkedIn</span>
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
