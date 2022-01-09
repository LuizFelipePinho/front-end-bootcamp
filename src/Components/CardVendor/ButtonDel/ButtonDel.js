import axios from 'axios';
import authLogin from '../../../api/authLogin'

const ButtonDel = ({data}) => {


    const dataUser = authLogin.getDataUser();


    const token = dataUser.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}` }
    }  
    
    const delProduct = async () => {

        await axios.delete(`product/delete/${data.id}`, config)
        .then(reponse => {
            console.log(reponse)

            let card = document.getElementById(data.id);
            console.log(card)
        } )
        .catch((err) => console.log(err))

    }


    return(
        <button onClick={(event) => delProduct(event)}>Deletar</button>

    )
}

export default ButtonDel