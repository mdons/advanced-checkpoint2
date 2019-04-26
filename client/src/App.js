import React, { Component } from "react";
import "./App.css";
import ListOfVehicles from "./components/ListOfVehicles";
import state from "./state";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return <ListOfVehicles vehicles={state.vehicles} />;
  }
}
export default App;
