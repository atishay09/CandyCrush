import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import PlayGame from "./PlayGame";
import Startpage from "./Startpage";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element= {<Startpage />}/>
      <Route path="/playgame" element= {<PlayGame />}/>
      <Route path="*" eelement= {<Navigate replace to='/' />}/>
    </Routes>
    </>
  );
};

export default App;
