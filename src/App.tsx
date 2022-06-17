import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Routing from "./Routing";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? <NavBar /> : null}
      <Routing />
    </>
  );
}

export default App;
