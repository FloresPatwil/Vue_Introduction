import axios from 'axios';
import type { GifResponse } from '../interfaces/gif.response';

const api_key = 'az5flu6YRhdpoHA9kXUuydc0HVIylmap'


export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: api_key,
    }
});

giphyApi.get<GifResponse>('/random')
    .then(resp => console.log(resp.data.data.images.original.url))
    .then(err=>console.log(err));
