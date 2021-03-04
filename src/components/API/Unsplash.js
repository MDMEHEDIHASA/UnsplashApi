import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID Oks3CUsHYjZkXTT7Ol86qoAr7I5vqHHswO8JEzx9BtY'
    },
})