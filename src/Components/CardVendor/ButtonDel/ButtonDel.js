import axios from "axios";
import authLogin from "../../../api/authLogin";
import './ButtonDel.css';

const ButtonDel = ({ data }) => {
	const dataUser = authLogin.getDataUser();

	const token = dataUser.token;
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const delCardDom = (id) => {
		const cardSelected = document.getElementById(id);
		cardSelected.style = `display: none;`;
		console.log(cardSelected);
	};

	const delProduct = async () => {
		await axios
			.delete(`product/delete/${data.id}`, config)
			.then((reponse) => {
				delCardDom(data.id);
			})
			.catch((err) => alert(err));
	};
	return (
		<button onClick={(event) => delProduct(event)} class="btn btn-danger px-4 rounded-pill">
			Delete
		</button>
	);
};

export default ButtonDel;
