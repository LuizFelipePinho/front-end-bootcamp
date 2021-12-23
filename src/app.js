import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Home from "./Components/Pages/Home";
import Notebooks from './Components/Pages/Products/Notebooks';
import Acessories from './Components/Pages/Products/Acessories';
import Gamer from './Components/Pages/Products/Gamer';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Cart from './Components/Pages/Cart/Cart';
import AddProduct from './Components/Pages/AddProduct/AddProduct';
import Finish from './Components/Pages/Finish/Finish';
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/acessories" element={<Acessories />} />
        <Route path="/gamer" element={<Gamer />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
