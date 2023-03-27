import React from "react";
import northernPic from "./image/northern hemisphere.jpg";
import southernPic from "./image/southern hemisphere.png";
import "./Hemisphere.css";

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
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};
export default HemisphereDisplay;
