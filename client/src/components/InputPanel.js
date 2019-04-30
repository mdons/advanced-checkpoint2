import React, { Component } from "react";
import PropTypes from "prop-types";

class InputPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      make: "",
      model: "",
      license: "",
      color: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.createVehicle(this.state).then(() =>
    this.setState({
      type: "",
      make: "",
      model: "",
      license: "",
      color: ""
    });
    // );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Type:
          <input
            type="text"
            id="type"
            value={this.state.type}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Make:
          <input
            type="text"
            id="make"
            value={this.state.make}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            id="model"
            value={this.state.model}
            onChange={this.handleChange}
          />
        </label>
        <label>
          License:
          <input
            type="text"
            id="license"
            value={this.state.license}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            id="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit Vehicle</button>
      </form>
    );
  }
}

InputPanel.PropTypes = {
  createVehicle: PropTypes.func
};

export default InputPanel;
