import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post from "./components/Post/Post";
import EditAppreciation from "./components/Appreciation/EditAppreciation";
import Feeds from "./components/Feed/Feeds";
import MyAccount from "./components/ProfilePage/MyAccount";
import Form from "./components/Login/Form";
import AdminHome from "./components/Admin/AdminHome";
const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Feeds />} />
      <Route path="/post" element={<Post />} />
      <Route path="/login" element={<Form />} />
      <Route path="/editappreciation" element={<EditAppreciation />} />
      <Route path="/userprofile" element={<MyAccount />} />
      <Route path="/adminhome" element={<AdminHome />} />
    </Routes>
  );
};

export default Routing;
