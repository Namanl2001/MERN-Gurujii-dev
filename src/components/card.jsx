import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReadMoreReact from 'read-more-react';
import StarRatingComponent from 'react-star-rating-component';
import { Card, Modal } from 'bootstrap-4-react';
import Photo from './photo.png';

const img_src = Photo;

class cards extends Component {
  render() {
    return (
      <>
        <Card
          style={{
            width: '21em',
            marginLeft: '2em',
            marginBottom: '3em',
            cursor: 'pointer',
          }}
          data-target={`#modal${this.props.id}`}
          data-toggle='modal'
          // className='card'
        >
          <Card.Header>{this.props.user.coaching}</Card.Header>
          {/* <Card.Image src={img_src} alt={"image"} /> */}
          <Card.Body>
            <Card.Title>
              {this.props.user.title} {this.props.user.username}
            </Card.Title>
            <Card.Subtitle mb='2' text='muted'>
              {this.props.user.subject}
            </Card.Subtitle>
            <Card.Subtitle mb='2' text='muted'>
              ( {this.props.user.class1} {this.props.user.class2}{' '}
              {this.props.user.class3} {this.props.user.class4} )
            </Card.Subtitle>

            <div style={{ fontSize: 25 }}>
              <StarRatingComponent
                name='rate2'
                editing={false}
                starCount={5}
                value={4}
              />
            </div>
          </Card.Body>
        </Card>
        <Modal id={`modal${this.props.id}`} fade>
          <Modal.Dialog centered>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Details</Modal.Title>
                <Modal.Close>
                  <span aria-hidden='true'>&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body className='table-responsive'>
                <table className='table table-striped'>
                  <tbody>
                    <tr>
                      <th>Coaching</th>
                      <td>{this.props.user.coaching}</td>
                    </tr>
                    <tr>
                      <th>Teacher</th>
                      <td>
                        {this.props.user.title} {this.props.user.username}
                      </td>
                    </tr>
                    <tr>
                      <th>Qualification</th>
                      <td>{this.props.user.qualification}</td>
                    </tr>
                    <tr>
                      <th>About</th>
                      <td>
                        <ReadMoreReact
                          text={this.props.user.about}
                          min='20'
                          ideal='25'
                          max='40'
                          readMoreText='Click! to read more'
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Subject</th>
                      <td>{this.props.user.subject}</td>
                    </tr>
                    <tr>
                      <th>Classes</th>
                      <td>
                        {this.props.user.class1} {this.props.user.class2}{' '}
                        {this.props.user.class3} {this.props.user.class4}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Modal.Body>
              <Modal.Footer className='center'>
                Address: {this.props.user.address} , {this.props.user.city} ,
                {this.props.user.pin}
                <br />
                Contact: {this.props.user.phone}
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }
}

export default cards;
