import "./ButtonRedirect.css";
import { useNavigate } from "react-router-dom";

const ButtonRedirect = () => {
	const navigate = useNavigate();

	const redirAddProduct = () => {
		navigate("/addproduct");
	};
	return (
		<button onClick={redirAddProduct} class="btn btn-dark px-4 rounded-pill" >
			Add product

		</button>
	);
};
export default ButtonRedirect;
