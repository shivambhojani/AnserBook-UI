import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Routing from "./Routing";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  return (
    <>
      {localStorage.getItem("userID") ? <NavBar /> : null}
      <Routing />
      <ToastContainer />
    </>
  );
}

export default App;
