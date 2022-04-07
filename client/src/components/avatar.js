import React, { useState, useEffect } from "react";

function Avatar(props) {
  let className = props.className;

  return (
    <img
      className={className}
      src="https://www.iconshock.com/3D/character/png/thumbnails/chef-professional-cook-chief-food_preparer.avif"
      alt="Avatar"
    />
  );
}

export default Avatar;
