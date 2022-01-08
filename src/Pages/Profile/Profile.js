import './Profile.css';
import { useState, useEffect } from 'react';
import authLogin from '../../api/authLogin';
import authProfile from '../../api/authProfile';
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';


export default function Profile() {

  const [user, setUser] = useState({});
  const [notLogged, setNotLogged] = useState(true);

  const dataTypeUser = (data) => {
    const isVendor = data.hasOwnProperty('vendedor');

    if(isVendor) { 

      const dataVendor = {
        id: data.vendedor.id,
        role: data.vendedor.role
      }

      return dataVendor
    } else {

      const dataUser = {
        id: data.user.id,
        role: data.user.role
      }

      return dataUser

    }
  }

  useEffect(() => {

    const dataUser = authLogin.getDataUser();

    const dataStorage = dataTypeUser(dataUser);

    authProfile.getProfile(dataStorage)
    .then(response => {
      setUser(response.data)
      setNotLogged(false)


    })
    .catch( (err) => console.log(err))
  }, [])

  return (
    <div className='profile'>
      {
        !notLogged ? (
          <>
            <ProfileInfo user={user}/>
            
          </>
        ) : (
          <h2>Sem dados do perfil, faça login</h2>
        )
      }
    </div>
    )
}