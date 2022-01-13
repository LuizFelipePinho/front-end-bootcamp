import { useNavigate } from "react-router-dom";
import './ButtonAt.css';

const ButtonAt = ({data}) => {
    const navigate = useNavigate();

    const redirectinPag = () => {
      navigate(`/atproduct/${data.id}`)

    }

    return (
        <button onClick={redirectinPag} class="btn btn-dark px-4 rounded-pill size-button" >Update</button>
    )
}

export default ButtonAt;