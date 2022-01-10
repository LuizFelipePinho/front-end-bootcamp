import axios from 'axios';
import authLogin from '../../../api/authLogin'

const ButtonDel = ({data}) => {


    const dataUser = authLogin.getDataUser();


    const token = dataUser.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}` }
    }  

    
    const delCardDom = (id) => {
        const cardSelected = document.getElementById(id)
        cardSelected.style = `display: none;`
        console.log(cardSelected)
    }



    const delProduct = async () => {

        await axios.delete(`product/delete/${data.id}`, config)
        .then(reponse => {
            delCardDom(data.id)
        
        } )
        .catch((err) => alert(err))

    }
    return(
        <button onClick={(event) => delProduct(event)}>Deletar</button>

    )
}

export default ButtonDel