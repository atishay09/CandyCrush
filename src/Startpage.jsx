import React from "react";
import { Navigate, NavLink } from "react-router-dom";

const Startpage = () => {
  return (
    <>
    <div className="cont">
      <div className="cont-start"><h1>Play Candy Crush</h1>
      <NavLink to="/candycrush/playgame" className="btn">
        PLAY 
      </NavLink>
      </div>
      </div>
    </>
  );
};

export default Startpage;
