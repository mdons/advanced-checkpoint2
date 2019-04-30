import React from "react";
import PropTypes from "prop-types";

const VehicleItem = props => (
  <li>
    {props.vehicle.type}: {props.vehicle.make} {props.vehicle.model}
  </li>
);

VehicleItem.PropTypes = {
  vehicle: PropTypes.object
};

export default VehicleItem;
