import React from "react";
import PropTypes from "prop-types";

export default function ListOfVehicles(props) {
  console.log(props.vehicles);
  //   return ({props.vehicles.map(vehicle => (
  //       <h1>{vehicle.make} {vehicle.model} color: {vehicle.color}</h1>
  //   ))})
  return <div>test</div>;
}

ListOfVehicles.PropTypes = {
  vehicles: PropTypes.array
};
