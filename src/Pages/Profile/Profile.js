import './Profile.css';
import { useState, useEffect } from 'react';
import authLogin from '../../api/authLogin';
import authProfile from '../../api/authProfile';
import CardUnique from '../../Components/CardVendor/CardVendor';
import { Row } from "react-bootstrap";

export default function Profile(props) {

  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);
  const dataUser = authLogin.getDataUser();

  

  useEffect(() => {
    setMounted(true)

    if(dataUser) {

      const data = {
        id: dataUser.vendedor.id,
        role: dataUser.vendedor.role
      }

      
      authProfile.getProfile(data)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
        console.log(response.data)
      })
      .catch( (err) => console.log(err))
    }

  }, [mounted])

  return (
    <div className='profile'>
      {
        !notLogged ? (
          <>
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <span>CPF: {user.cpf}</span>
            <span>Tipo: {(user.role).toLowerCase()}</span>
            {console.log(user.products)}

            <Row xs={1} md={6} className="g-4">
            { user.products.map( (prod) => <CardUnique data={prod}/>) }
            </Row>
          </>
        ) : (
          <h2>Sem dados do perfil, faça login</h2>
        )
      }
    </div>
  )
}