import React from "react";
import PropTypes from "prop-types";
import VehicleItemContainer from "../containers/VehicleItemContainer";

const ListOfVehicles = props => (
  <div>
    <h2>Vehicles:</h2>
    <ul>
      {props.vehicles.map(vehicle => (
        <VehicleItemContainer key={vehicle._id} />
      ))}
    </ul>
  </div>
);

ListOfVehicles.PropTypes = {
  vehicles: PropTypes.array
};

export default ListOfVehicles;
