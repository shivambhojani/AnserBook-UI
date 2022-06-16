import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post from "./components/Post/Post";
import EditAppreciation from "./components/Appreciation/EditAppreciation";
import Feeds from "./components/Feed/Feeds";
import MyAccount from "./components/ProfilePage/MyAccount";
import Form from "./components/Login/Form";
import AdminHome from "./components/Admin/AdminHome";
import UserProfile from "./components/ProfilePage/UserProfile";
const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/post" element={<Post />} />
      <Route path="/feeds" element={<Feeds />} />
      <Route path="/editappreciation" element={<EditAppreciation />} />
      <Route path="/userprofile" element={<MyAccount />} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/openprofile" element={<UserProfile />} />
    </Routes>
  );
};

export default Routing;
