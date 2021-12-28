import axios from 'axios';

const apiUrl = "https://back-end-brech-tech.herokuapp.com/auth/login";

const authLogin = {

    async authenticate(data) {
        return await axios.post(apiUrl, data)
     
    },

    saveDataUser(user) {
     localStorage.setItem('dataLogin', JSON.stringify(user));
    },


    getDataUser() {
        const data = localStorage.getItem('dataLogin');
        if(!data) {
            return null
        }
        try {
            const parsedData = JSON.parse(data)
            return parsedData

        } catch(err) {
            console.log(err);
            return null
        }

    }

}

export default authLogin