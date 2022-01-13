import { Row } from "react-bootstrap";
import CardUnique from '../../Components/CardVendor/CardVendor';
import './ProfileInfo.css'
import { useState, useEffect } from 'react';
import ButtonRedirect from "../CardVendor/ButtonRedirect/ButtonRedirect";
import ButtonLogout from "../CardVendor/ButtonLogout/ButtonLogout";


const ProfileInfo = (props) => {

    const [ data, setData ] = useState(props.user) 

    

    return(
        <>
        <ButtonLogout />
        <div className="container-profile-info" key={props.user.id}>
        
            <h2>{props.user.name}</h2>
            <span>Email: {props.user.email}</span>
            <span>CPF: {props.user.cpf}</span>
            { props.user.role === "VENDOR" ?  <ButtonRedirect /> : ''}
            
            <Row xs={1} md={6} className="g-4">
            { data.products.map( (prod) => <CardUnique key={prod.id} data={prod}/>) }
            
            </Row>
        </div>
        </>
    )

}

export default ProfileInfo