import axios from 'axios';

export default axios.create({
    baseURL: 'https://attendancecheckerwebapi20210523145350.azurewebsites.net/api'
})
