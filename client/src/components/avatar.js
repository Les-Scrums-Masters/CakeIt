import React, { useState, useEffect } from "react";
import image from "../images/chef.png";

function Avatar(props) {
  let className = props.className;

  return <img className={className} src={image} alt="Avatar" />;
}

export default Avatar;
