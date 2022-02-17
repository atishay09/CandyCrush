import React from "react";
import { NavLink } from "react-router-dom";

const Startpage = () => {
  return (
    <>
    <div className="cont">
      <div className="cont-start"><h1>Play Candy Crush</h1>
      <NavLink to="/playgame" className="btn">
        PLAY 
      </NavLink>
      </div>
      </div>
    </>
  );
};

export default Startpage;
