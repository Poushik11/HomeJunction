import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/explore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Offer from "./pages/Offer";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgetPassword from "./pages/ForgotPass";
import Navbar from "./components/Navbar";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listings";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/contact/:landlordId" element={<Contact />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
