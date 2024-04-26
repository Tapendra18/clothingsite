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
import VendorLogin from "./components/vendorLogin/VendorLogin";
import FoodBeverage from "./components/food-beverage/FoodBeverage";
import BeautyFragances from "./components/beauty-fragrances/BeautyFragances";
import OfficeStationary from "./components/office-stationery/OfficeStationary";
import ConsumerElectronics from "./components/consumer-electronics/ConsumerElectronics";
import FashionAccessories from "./components/fashion-accessories/FashionAccessories";
import HomeFurniture from "./components/home-furniture/HomeFurniture";
import CategoryList from "./components/category-list/CategoryList";
import 'react-toastify/dist/ReactToastify.css';
import Health from "./components/health-personal-care/Health";
import ProductDetail from "./components/productDetail/ProductDetail";
import VendorStore from "./components/vendorStore/VendorStore";
import CategoryItem from "./components/categoryitem/CategoryItem";
import Womentshirt from "./components/categoryitem/Womentshirt";
import Kidtshirt from "./components/categoryitem/Kidtshirt";
import ProductSearch from "./components/ProductSearch/ProductSearch";
import Todo from "./components/todo/todo";


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
        <Route path="/supplier-login" element={<VendorLogin />} />
        <Route path="/foodbeverage" element={<FoodBeverage />} />
        <Route path="/beautyfragances" element={<BeautyFragances />} />
        <Route path="/officestationary" element={<OfficeStationary />} />
        <Route path="/consumer" element={<ConsumerElectronics />} />
        <Route path="/FashionAccessories" element={<FashionAccessories />} />
        <Route path="/furniture" element={<HomeFurniture />} />
        <Route path="/health" element={<Health />} />
        <Route path="/categorylist" element={<CategoryList />} />
        <Route path="/productdetail/_id" element={<ProductDetail />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/categorylist/:slug" element={<CategoryList />} />
        <Route path="/vendorstore" element={< VendorStore />} />
        <Route path="/category/:slug" element={< CategoryItem />} />
        <Route path="/categoryitemwomen-t-shirt-s" element={< Womentshirt />} />
        <Route path="/categoryitemt-shirt" element={< Kidtshirt />} />
        <Route path="/productsearch" element={< ProductSearch />} />
        <Route path="/todo" element={< Todo />} />
      </Routes>
    </>
  );
}

export default App;
