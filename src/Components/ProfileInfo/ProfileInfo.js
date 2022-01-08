import { Row } from "react-bootstrap";
import CardUnique from '../../Components/CardVendor/CardVendor';
import './ProfileInfo.css'

const ProfileInfo = (props) => {

    return(
        <div className="container-profile-info">
        
            <h2>{props.user.name}</h2>
            <span>Email: {props.user.email}</span>
            <span>CPF: {props.user.cpf}</span>
            <Row xs={1} md={6} className="g-4">
            { props.user.products.map( (prod) => <CardUnique data={prod}/>) }
            </Row>
        </div>
    )

}

export default ProfileInfo