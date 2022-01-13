import axios from 'axios';

const apiUrl = "https://back-end-brech-tech.herokuapp.com/auth/login";

// axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

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

    },

    clearData() {
        localStorage.removeItem('dataLogin');

    }

}

export default authLogin