import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AboutUs from "./components/aboutus/AboutUs";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import TermOfServices from "./components/termOfServices/TermOfServices";
import RefundPolicy from "./components/refundpolicy/RefundPolicy";
import Cart from "./components/cart/Cart";
import VenderRegister from "./components/venderRegister/VenderRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-of-service" element={<TermOfServices />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/supplier-register" element={<VenderRegister />} />
      </Routes>
    </>
  );
}

export default App;
