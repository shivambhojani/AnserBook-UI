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
<<<<<<< HEAD
      {localStorage.getItem("userID") ? <NavBar /> : null}
=======
      {localStorage.getItem("userID")? <NavBar /> : null}
>>>>>>> 10d74497c27060dc397ba9c5b5ae5f54556421be
      <Routing />
      <ToastContainer />
    </>
  );
}

export default App;
