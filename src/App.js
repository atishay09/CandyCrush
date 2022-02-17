import React from "react";
import { Route, Routes} from "react-router-dom";
import PlayGame from "./PlayGame";
import Startpage from "./Startpage";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element= {<Startpage />}/>
      <Route path="/playgame" element= {<PlayGame />}/>
    </Routes>
    </>
  );
};

export default App;
