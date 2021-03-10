import React, { Component } from "react";
import { getInitalData } from "../store/reducer/user";
import { connect } from "react-redux";
import Card from "./card";
import Filter from "./filter";
import { Container, Row } from "bootstrap-4-react";

class home extends Component {
  componentDidMount() {
    this.props.getInitalData();
  }
  // sort users by date and sort function
  // users object contains date at "createdAt" property
  sortUsersByTime(){
    let sortedUsers = this.props.users.sort(function(a, b){ 
      return new Date(b.createdAt) - new Date(a.createdAt); 
    });
    return sortedUsers;
  }

  List() {
    let sortedUsers = this.sortUsersByTime();
    if (sortedUsers.length) {
      return sortedUsers.map((currentuser) => {
        return <Card user={currentuser} key={currentuser._id} />;
      });
    } else {
      return (
        <div>
          <h2>Sorry!! No results found.</h2>
          <br />
          <br />
        </div>
      );
    }
  }
  render() {
    return (
      <>
        {!this.props.isDataInitialized && <div>Initializing data...</div>}
        {this.props.isDataInitialized && (
          <div>
            <div className="text-center">
              <h1>Plan Your Future With US !!</h1>
              <hr className="w-25 mx-auto pt-5" />
            </div>
            <Filter />
            <Container
              style={{
                marginTop: "5em",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Row>{this.List()}</Row>
            </Container>
            <div className="bg-dark py-1 text-center text-white">
              <h2>­&#169; Some rights reserved @lakhwaniJii</h2>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default connect((state) => state, { getInitalData })(home);
