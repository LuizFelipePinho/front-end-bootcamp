import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./Components/Shared/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Input from "./Pages/Product/Categories/Input";
import Output from "./Pages/Product/Categories/Output";
import Processing from "./Pages/Product/Categories/Processing";
import Storage from "./Pages/Product/Categories/Storage";
import Detail from "./Pages/Product/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Finish from "./Pages/Finish/Finish";
import About from "./Pages/About/About";
import Footer from "./Components/Shared/Footer";
import Seller from "./Pages/Seller/Seller";
import Profile from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
import Navbar3 from "./Components/Navbar/Navbar";
import AtProduct from "./Pages/AtProduct/AtProduct";

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
				<Route path="/contact" element={<Contact />} />
				<Route path="/detail/:id" element={<Detail />} />

				<Route path="/atproduct/:id" element={<AtProduct />} />

        		<Route path="/atproduct/:id" element={<AtProduct />} />
main
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
