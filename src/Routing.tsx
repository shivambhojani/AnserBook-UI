import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post from "./components/Post/Post";
import EditAppreciation from "./components/Appreciation/EditAppreciation";
import Feeds from "./components/Feed/Feeds";
import MyAccount from "./components/ProfilePage/MyAccount";
import AnalyticsAppreciation from "./components/Appreciation/AnalyticsAppreciation";
import Login from "./components/Login/Form";
import Register from "./components/Registration/Form";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"


const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Feeds />} />
      <Route path="/post" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/editappreciation" element={<EditAppreciation />} />
      <Route path="/userprofile" element={<MyAccount />} />
      <Route path="analyticsappreciation" element={<AnalyticsAppreciation />} />
    </Routes>
  );
};

export default Routing;
