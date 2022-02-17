import React from "react";
import { Route, Routes} from "react-router-dom";
import Candycrush from "./Candycrush";
import Startpage from "./Startpage";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element= {<Startpage />}/>
      <Route path="/candycrush" element= {<Candycrush/>}/>
    </Routes>
    </>
  );
};

export default App;
