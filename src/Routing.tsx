import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Post from "./components/Post/Post";
import EditAppreciation from "./components/Appreciation/EditAppreciation";
import Feeds from "./components/Feed/Feeds";
import MyAccount from './components/ProfilePage/MyAccount';
const Routing: React.FC = () => {
    return (
    
            <Routes>
                <Route path="/" element={<Feeds />} />
                <Route path="/post" element={<Post />} />
                <Route path="/editappreciation" element={<EditAppreciation />} />
                <Route path="/userprofile" element={<MyAccount />} />
            </Routes>
      
    );
}

export default Routing;