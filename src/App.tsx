import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Routing from "./Routing";
import React from "react";
import Feeds from "./components/Feed/Feeds";

function App() {

  return (
    <>

      <NavBar></NavBar>
      {/* <Feeds></Feeds> */}
      <Routing></Routing>
    </>
  );
}

export default App;
