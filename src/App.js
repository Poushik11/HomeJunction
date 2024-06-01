import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/explore";
import Offer from "./pages/Offer";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgetPassword from "./pages/ForgotPass";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgetPass" element={<ForgetPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
