import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, Form, Button, Row, Col } from "bootstrap-4-react";

class filter extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.pin(this.state.content);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div>
        <div
          style={{
            // marginTop: "2em",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form inline my="2 lg-0">
            <Row>
              <Col>
                <Form.Input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.content}
                  placeholder="Filter by Pin-Code"
                  mr="sm-8"
                />
              </Col>
              <Col>
                <Button
                  outline
                  success
                  mr="sm-0"
                  my="sm-0"
                  onClick={this.handleSubmit}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <div
          style={{
            marginTop: "2em",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Dropdown
            style={{
              marginRight: "2em",
            }}
          >
            <Dropdown.Button primary id="dropdownMenuButton">
              {this.props.subject}
            </Dropdown.Button>
            <Dropdown.Menu aria-labelledby="dropdownMenuButton">
              <Dropdown.Item disabled>SUBJECTS</Dropdown.Item>
              <Dropdown.Item onClick={this.props.allsub}>All</Dropdown.Item>
              <Dropdown.Item onClick={this.props.phy}>Physics</Dropdown.Item>
              <Dropdown.Item onClick={this.props.che}>Chemistry</Dropdown.Item>
              <Dropdown.Item onClick={this.props.mat}>Maths</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            style={{
              marginRight: "2em",
            }}
          >
            <Dropdown.Button primary id="dropdownMenuButton">
              {this.props.class}
            </Dropdown.Button>
            <Dropdown.Menu aria-labelledby="dropdownMenuButton">
              <Dropdown.Item disabled>CLASSES</Dropdown.Item>
              <Dropdown.Item onClick={this.props.allcls}>All</Dropdown.Item>
              <Dropdown.Item onClick={this.props.c9}>9 th</Dropdown.Item>
              <Dropdown.Item onClick={this.props.c10}>10 th</Dropdown.Item>
              <Dropdown.Item onClick={this.props.c11}>11 th</Dropdown.Item>
              <Dropdown.Item onClick={this.props.c12}>12 th</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button secondary onClick={this.props.clr}>
            X Clear Filters
          </Button>
        </div>
      </div>
    );
  }
}

// export default filter;

const mapStatetoProps = (state) => {
  return {
    subject: state.subject,
    class: state.class,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    pin: (pin) => dispatch({ type: "PIN", pin: pin }),

    allsub: () => dispatch({ type: "ALLSUB" }),
    phy: () => dispatch({ type: "PHY" }),
    che: () => dispatch({ type: "CHE" }),
    mat: () => dispatch({ type: "MAT" }),

    allcls: () => dispatch({ type: "ALLCLS" }),
    c9: () => dispatch({ type: "C9" }),
    c10: () => dispatch({ type: "C10" }),
    c11: () => dispatch({ type: "C11" }),
    c12: () => dispatch({ type: "C12" }),

    clr: () => dispatch({ type: "CLR" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(filter);
