import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import CatalogPage from "./Pages/Catalog";
import CartPage from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/catalogpage" element={<CatalogPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
