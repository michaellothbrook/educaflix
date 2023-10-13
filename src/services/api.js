import Axios from 'axios';

const Api = Axios.create({
  baseURL: "https://api.dowbis.com.br/api/",
})

export default Api;