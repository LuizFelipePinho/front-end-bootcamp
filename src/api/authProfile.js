import axios from 'axios';

const authProfile = {

    async getProfile(dataUser) {

        return await axios.post('https://back-end-brech-tech.herokuapp.com/auth/profile', 
        dataUser)
    }
}

export default authProfile