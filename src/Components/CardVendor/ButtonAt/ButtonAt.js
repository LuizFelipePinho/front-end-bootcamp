import { useNavigate } from "react-router-dom";


const ButtonAt = ({data}) => {
    const navigate = useNavigate();

    const redirectinPag = () => {
      navigate(`/atproduct/${data.id}`)

    }

    return (
        <button onClick={redirectinPag}>Atualizar</button>
    )
}

export default ButtonAt