import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Home from "./Pages/Home";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Input from './Components/Products/Input';
import Output from './Components/Products/Output'
import Processing from './Components/Products/Processing';
import Storage from "./Components/Products/Storage";
import Detail from './Components/Products/ProductDetail';
import Cart from './Pages/Cart/Cart';
import AddProduct from './Pages/AddProduct/AddProduct';
import Finish from './Pages/Finish/Finish';
import Footer from "./Components/Shared/Footer";
import Seller from "./Pages/Seller/Seller"
import Profile from "./Pages/Profile/Profile";


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/input" element={<Input />} />
        <Route path="/output" element={<Output />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
