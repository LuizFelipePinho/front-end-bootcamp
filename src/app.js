import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Home from "./Pages/Home";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Notebooks from './Components/Products/Notebooks';
import Acessories from './Components/Products/Acessories'
import Gamer from './Components/Products/Gamer';
import Detail from './Components/Products/ProductDetail';
import Cart from './Pages/Cart/Cart';
import AddProduct from './Pages/AddProduct/AddProduct';
import Finish from './Pages/Finish/Finish';
import Footer from "./Components/Shared/Footer";
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
        <Route path="/finish" element={<Finish />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/acessories" element={<Acessories />} />
        <Route path="/gamer" element={<Gamer />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
