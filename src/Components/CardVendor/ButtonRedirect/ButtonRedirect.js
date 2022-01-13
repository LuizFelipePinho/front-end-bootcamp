import './ButtonRedirect.css'
import { useNavigate } from "react-router-dom";


const ButtonRedirect = () => {
    const navigate = useNavigate();

    const redirAddProduct = () => {
        navigate('/addproduct')

    }
    return (
            <button onClick={redirAddProduct} className="button-redirect">
                Adicionar produto
            </button>
        )
}
export default ButtonRedirect