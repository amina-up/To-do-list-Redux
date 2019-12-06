import React, { Component } from "react";
import "./add.css";
import { connect } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { addTask } from "../../actions/Actions";

class Add extends Component {
  state = {
    userInput: ""
  };

  changeValue = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  clickAdd = e => {
    e.preventDefault();

    this.props.addTask({
      text: this.state.userInput,
      key: Date.now(),
      checked: false
    });
    this.setState({
      userInput: ""
    });
  };
  render() {
    return (
      <div className="input-img">
        <img
          src="https://www.lendingstandardsboard.org.uk/wp-content/uploads/2019/03/THE-PERSONAL-STANDARDS.-1.-The-Standards-of-Lending-Practice-2.png"
          className="images"
        />
        <InputGroup className=" d-flex justify-content-center w-50 input ">
          <FormControl
            onChange={this.changeValue}
            value={this.state.userInput}
            placeholder="Personal Custmor Name... "
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-success" onClick={this.clickAdd}>
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

const mapDispatchToProps = { addTask };

export default connect(null, mapDispatchToProps)(Add);
