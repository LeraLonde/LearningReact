import axios from 'axios';

const KEY = 'AIzaSyClsmZ2VyptmuJCu2KwfNg422lmYisjFQk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});