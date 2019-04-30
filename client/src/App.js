import React, { Component } from "react";
import "./App.css";
import ListOfVehicles from "./components/ListOfVehicles";
import InputPanel from "./components/InputPanel";
import state from "./state";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount() {}
  render() {
    return (
      <div>
        <InputPanel />
        <ListOfVehicles vehicles={state.vehicles} />;
      </div>
    );
  }
}
export default App;
