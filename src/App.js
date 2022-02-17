import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import PlayGame from "./PlayGame";
import Startpage from "./Startpage";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/candycrush" element= {<Startpage />}/>
      <Route path="/candycrush/playgame" element= {<PlayGame />}/>
      <Route path="/candycrush/playagain" element= {<PlayGame />}/>
      <Route path="*" element= {<Navigate replace to='/candycrush' />}/>
    </Routes>
    </>
  );
};

export default App;
