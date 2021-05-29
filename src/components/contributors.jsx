import React, { Component } from 'react';
import './style.css';
import GitHubIcon from '@material-ui/icons/GitHub';

class contributors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://api.github.com/repos/Namanl2001/MERN-Gurujii-dev/contributors?per_page=1000'
    )
      .then(res => res.json())
      .then(data => {
        console.log(typeof data);
        this.setState({
          contributors: data,
        });
      });
  }

  render() {
    return (
      <div className='container-fluid contributor-div'>
        <br />
        <h1 className='text-center mb-3 headercontent'>
          Our <span>Contributors</span>
        </h1>
        <br />
        <br />
        <div className='badges_container'>
          {this.state.contributors.map(item => (
            <div
              className='badge hvr-bounce-to-top hvr-icon-grow'
              key={item.id}
            >
              <img src={item.avatar_url} alt='Avatar' className='badge_img' />
              <div className='badge_text'>
                <h5>
                  <b>{item.login}</b>
                </h5>
                <p>
                  <a href={item.html_url}>
                    <GitHubIcon
                      style={{ color: 'black', fontSize: 30 }}
                      className='hvr-icon'
                    />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default contributors;
