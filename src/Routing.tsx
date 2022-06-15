import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post from "./components/Post/Post";
import EditAppreciation from "./components/Appreciation/EditAppreciation";
import Feeds from "./components/Feed/Feeds";
import MyAccount from "./components/ProfilePage/MyAccount";
import AnalyticsAppreciation from "./components/Appreciation/AnalyticsAppreciation";
const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Feeds />} />
      <Route path="/post" element={<Post />} />
      <Route path="/editappreciation" element={<EditAppreciation />} />
      <Route path="/userprofile" element={<MyAccount />} />
      <Route path="analyticsappreciation" element={<AnalyticsAppreciation />} />
    </Routes>
  );
};

export default Routing;
