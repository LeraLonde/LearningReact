import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 328b2139bd320e108c99c5dbc00b1d4ef177f20ded6ca1ab1d14256d871b9e34'
    }
});