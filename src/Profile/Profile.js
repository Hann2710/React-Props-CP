import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, proFession, children, func }) => {
  const Makeup = {
    color: "purple",
    fontSize: "30px",
    margin: "10px 20px",
    width: "150px",
  };
  const glam = {
    color: "palevioletred",
    fontSize: "20px",
    width: "300px",
    margin: "20px",
  };
  const divstyle = {
    border: "2px solid black",
    margin: "10px 20px",
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={divstyle}>
        <h1 style={Makeup}>Fullname:</h1>
        <p style={glam}> {fullName} </p>
      </div>
      <div style={divstyle}>
        <h1 style={Makeup}>Bio:</h1>
        <p style={glam}> {bio} </p>
      </div>
      <div style={divstyle}>
        <h1 style={Makeup}>Profession:</h1>
        <p style={glam}> {proFession} </p>
      </div>
      <div style={divstyle}>
        <h1 style={Makeup}>Profile Picture:</h1>
        <p style={glam}> {children} </p>
      </div>
      <div>
        <button onClick={() => func(fullName)} style={glam}>
          Click Here
        </button>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "No Name added",
  bio: "...",
  proFession: "No profession ",
  children: "no image",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  proFession: PropTypes.string,
  children: PropTypes.string,
};

export default Profile;
