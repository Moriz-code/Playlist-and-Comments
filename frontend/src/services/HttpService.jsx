// import history from '../history';
import Axios from 'axios';


const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/'
    : '//localhost:3030/api/';

var axios = Axios.create({
    withCredentials: true
});

export default {
    get(endpoint, data) {
        console.log('endPoint@@@@@@@@@@@', endpoint, data);
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'get', data = null, dispatch) {

    // console.log('endpoint', endpoint, 'method', method, 'data', data, 'dispatch', dispatch);
    try {
        const res = await axios({

            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        console.log('res', res);


        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            // history.push('/'); // diaspatch ('authorition error')
        }
        // diaspatch ('error')
        throw err;
    }
}