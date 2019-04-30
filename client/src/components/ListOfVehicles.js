import React from "react";
import PropTypes from "prop-types";
import VehicleItem from "./VehicleItem";

const ListOfVehicles = props => (
  <ul>
    {props.vehicles.map((vehicle, i) => (
      <VehicleItem vehicle={vehicle} key={i} />
    ))}
  </ul>
);

ListOfVehicles.PropTypes = {
  vehicles: PropTypes.array
};

export default ListOfVehicles;
