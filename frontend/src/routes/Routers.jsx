import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import { Routes, Route } from "react-router-dom";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";
import Insurance from "../pages/Insurace.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route
        path="/users/profile/me"
        element={
          <MyAccount allowedRoles={["patient"]} />
          // <ProtectedRoute allowedRoles={["patient"]}>
          //   <MyAccount />
          // </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <Dashboard allowedRoles={["doctor"]} />
          // <ProtectedRoute allowedRoles={["doctor"]}>
          //   <Dashboard />
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
