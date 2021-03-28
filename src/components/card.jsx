import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReadMoreReact from 'read-more-react';
import StarRatingComponent from 'react-star-rating-component';
import { Card } from 'bootstrap-4-react';
import Photo from './photo.png';

const img_src = Photo;

class cards extends Component {
  render() {
    return (
      <div class='card'>
        <Card.Text className='text4'>{this.props.user.coaching}</Card.Text>
        <Card.Image
          src={
            'https://i.pinimg.com/originals/54/62/5e/54625e30c68d92754683ce56c2b4e5cc.gif'
          }
          className='card_image'
        ></Card.Image>

        <Card.Body>
          <Card.Title>
            {this.props.user.title} {this.props.user.username}
          </Card.Title>
          <Card.Subtitle mb='2' text='muted'>
            {this.props.user.subject} ( {this.props.user.class1}{' '}
            {this.props.user.class2} {this.props.user.class3}{' '}
            {this.props.user.class4} )
          </Card.Subtitle>
          {this.props.user.tutor}
          <div style={{ fontSize: 20 }}>
            <StarRatingComponent
              name='rate2'
              editing={false}
              starCount={5}
              value={4}
            />
          </div>
          <Card.Text className='text1'>
            Qualification : {this.props.user.qualification}
            <ReadMoreReact
              text={this.props.user.about}
              min='60'
              ideal='65'
              max='80'
              readMoreText='Click! to read more'
            />
          </Card.Text>
          <hr></hr>
          <Card.Text className='footer1'>
            Address: {this.props.user.address} , {this.props.user.city} ,
            {this.props.user.pin}
            <br />
            Contact: {this.props.user.phone}
            {/* <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Text>
        </Card.Body>
      </div>
    );
  }
}

export default cards;
