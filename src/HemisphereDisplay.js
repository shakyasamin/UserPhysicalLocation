import React from "react";
import northernPic from "./image/northern hemisphere.jpg";
import southernPic from "./image/southern hemisphere.png";

const hemisphereConfig = {
  Northern: {
    text: "It is Northern Hemisphere",
    picture: northernPic,
  },
  Southern: {
    text: "It is Southern Hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  console.log(latitude);
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div>
      <img src={picture} alt="" />
      {text}
    </div>
  );
};
export default HemisphereDisplay;
