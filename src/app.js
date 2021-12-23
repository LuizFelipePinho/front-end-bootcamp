import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Shared/Header";
// import Home from "./Pages/Home";
import Home from './Pages/Home/Home'
// import Notebooks from './Pages/Products/Notebooks';
// import Acessories from './Pages/Products/Acessories';
// import Gamer from './Pages/Products/Gamer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
// import Cart from './Pages/Cart/Cart';
// import AddProduct from './Pages/AddProduct/AddProduct';
// import Finish from './Pages/Finish/Finish';
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/addproduct" element={<AddProduct />} /> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/finish" element={<Finish />} /> */}
        {/* <Route path="/notebooks" element={<Notebooks />} /> */}
        {/* <Route path="/acessories" element={<Acessories />} /> */}
        {/* <Route path="/gamer" element={<Gamer />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;