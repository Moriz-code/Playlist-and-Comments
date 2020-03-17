import axios from 'axios';
// import HttpService from '../services/HttpService';

//why shoukd i use the cardashians?>
const Axios = axios.create({
    withCredentials: true
});


const BASE_URL = 'http://localhost:3030/api/comment';


async function query(filterBy = {}) {
    let str = '';

    for (const key in filterBy) {
        str = key + '=' + filterBy[key]
    }

    const res = await Axios.get(`${BASE_URL}?${str}`);
    return res.data
}


async function add(comment) {
    const res = await Axios.post(`${BASE_URL}`, comment);
    return res.data
}


// function _buildCriteria(filterBy) {
//     let filters;
//     const criteria = {};

// }

export default {
    query,
    add
}

