import axios from 'axios';

function list (name = null, stars = []) {
    return axios.get('/api/hotels', { params: { name: name, stars: stars } });
}

export default {
    list
}
