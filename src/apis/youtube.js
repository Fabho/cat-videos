import axios from 'axios';

const KEY =  'AIzaSyDPU1pBcv7IRevxFpAQM4EeVaORSSRH5TI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

