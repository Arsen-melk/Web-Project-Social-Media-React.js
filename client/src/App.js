import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)

  // const PrivateRoute = ({ children }) => {
  //   return user ? children : <Navigate to="/login" replace />;
  // };

  return (
     <Router>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Register/>}></Route>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login/>}></Route>
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register/>}></Route>
        {/* <Route path="/profile/:username" element={<PrivateRoute><Profile/></PrivateRoute>}></Route> */}
        <Route path="/profile/:username" element={<Profile/>}></Route>
      </Routes>
     </Router>
  );
}

export default App;
