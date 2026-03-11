import type { GifResponse } from '../interfaces/gif.response.ts';

const api_key = 'az5flu6YRhdpoHA9kXUuydc0HVIylmap'
fetch (`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
    .then( resp => resp.json())
    .then( (Body : GifResponse) => {
        console.log(Body.data.images.original.url);
    } )
    .catch( err => console.info(err) );

