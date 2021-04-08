import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer class='footer-section'>
      <div class='container'>
        <div class='footer-cta pt-5 pb-5'>
          <div class='row'>
            <div class='col-xl-4 col-md-4 mb-30'>
              <div class='single-cta'>
                <i class='fa fa-map-marker'></i>
                <div class='cta-text'>
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, Gwalior</span>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-md-4 mb-30'>
              <div class='single-cta'>
                <i class='fa fa-phone'></i>
                <div class='cta-text'>
                  <h4>Call us</h4>
                  <span>123456789</span>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-md-4 mb-30'>
              <div class='single-cta'>
                <i class='fa fa-envelope-open'></i>
                <div class='cta-text'>
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='footer-content pt-5 pb-5'>
          <div class='row'>
            <div class='col-xl-4 col-lg-4 mb-50'>
              <div class='footer-widget'>
                <div class='footer-logo'>
                  <a href='/#'>
                    <img src='faviconNew.png' class='img-fluid' alt='logo' />
                  </a>
                </div>
                <div class='footer-text'>
                  <p>
                    We have created this platform to help the students find best
                    tution teacher in their city easily.
                  </p>
                </div>
                <div class='footer-social-icon'>
                  <span>Follow us</span>
                  <a href='/#'>
                    <i class='fa fa-facebook-f facebook-bg'></i>
                  </a>
                  <a href='/#'>
                    <i class='fa fa-twitter twitter-bg'></i>
                  </a>
                  <a href='/#'>
                    <i class='fa fa-instagram instagram-bg'></i>
                  </a>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-4 col-md-6 mb-30'>
              <div class='footer-widget'>
                <div class='footer-widget-heading'>
                  <br />
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href='/#'>Home</a>
                  </li>
                  <li>
                    <a href='/#'>services</a>
                  </li>
                  <li>
                    <a href='/#'>About us</a>
                  </li>
                  <li>
                    <a href='/#'>Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-xl-4 col-lg-4 col-md-6 mb-50'>
              <div class='footer-widget'>
                <div class='footer-widget-heading'>
                  <br />
                  <h3>Subscribe</h3>
                </div>
                <div class='footer-text mb-25'>
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div class='subscribe-form'>
                  <form action='/#'>
                    <input type='text' placeholder='Email Address' />
                    <button>
                      <i class='fa fa-telegram fa-5x'></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='copyright-area'>
        <div class='container'>
          <div class='row'>
            <div class='col-xl-6 col-lg-6 text-center text-lg-left'>
              <div class='copyright-text'>
                <p>
                  &copy; 2021 GURUJI | All Right Reserved | Terms Of Service |
                  Privacy
                </p>
              </div>
            </div>
            <div class='col-xl-6 col-lg-6 d-none d-lg-block text-right'>
              <div class='footer-menu'>
                <ul>
                  <li>
                    <a href='/#'>Home</a>
                  </li>
                  <li>
                    <a href='/#'>Terms</a>
                  </li>
                  <li>
                    <a href='/#'>Privacy</a>
                  </li>
                  <li>
                    <a href='/#'>Policy</a>
                  </li>
                  <li>
                    <a href='/#'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
