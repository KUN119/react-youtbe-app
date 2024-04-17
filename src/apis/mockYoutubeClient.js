import axios from 'axios';

export default class MockYoutubeClient {
    async search ({params}) {
        console.log(params);
        return params.channelId  
            ? axios.get('/data/related.json')
            : axios.get('/data/search.json')
    }

    async videos() {
        return axios.get('/data/popular.json');
    }

    async channels() {
        return axios.get('/data/channel.json');
    }
}