import authLogin from "../../../api/authLogin"
import { useNavigate } from "react-router-dom";

const ButtonLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        authLogin.clearData()
        navigate('/login')
    
    }

    return (
        <button onClick={logout} class="btn btn-danger px-4 rounded-pill">Logout</button>
    )
}

export default ButtonLogout