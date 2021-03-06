import axios from 'axios';

const axiosWithAuth =() => {
    const token = localStorage.getItem('token');
    console.log(token)
    return axios.create({
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`
        }
        // baseURL: "https://unsilenced.herokuapp.com"
      });
};

export default axiosWithAuth;