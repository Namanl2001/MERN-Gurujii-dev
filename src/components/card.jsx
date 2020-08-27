import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReadMoreReact from "read-more-react";
import StarRatingComponent from "react-star-rating-component";
import { Card } from "bootstrap-4-react";
import Photo from "./photo.png";

const img_src = Photo;

class cards extends Component {
  render() {
    return (
      <Card style={{ width: "21em", marginLeft: "2em", marginBottom: "3em" }}>
        <Card.Header>{this.props.user.coaching}</Card.Header>
        {/* <Card.Image src={img_src} alt={"image"} /> */}
        <Card.Body>
          <Card.Title>Mr. {this.props.user.username}</Card.Title>
          <Card.Subtitle mb="2" text="muted">
            {this.props.user.subject} ( {this.props.user.class1}{" "}
            {this.props.user.class2} {this.props.user.class3}{" "}
            {this.props.user.class4} )
          </Card.Subtitle>

          <div style={{ fontSize: 25 }}>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={4}
            />
          </div>
          <Card.Text>
            Qualification : {this.props.user.qualification}
            <ReadMoreReact
              text={this.props.user.about}
              min="60"
              ideal="65"
              max="80"
              readMoreText="Click! to read more"
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Address: {this.props.user.address} , {this.props.user.city} ,
          {this.props.user.pin}
          <br />
          Contact: {this.props.user.phone}
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Footer>
      </Card>
    );
  }
}

export default cards;
