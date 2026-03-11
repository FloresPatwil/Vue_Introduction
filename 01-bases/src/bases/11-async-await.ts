import type { GifResponse } from "../interfaces/gif.response";
import { giphyApi } from "./10-axios";

export const getImage = async () => {
  try {
    const resp = await giphyApi.get<GifResponse>("/random");
    return resp.data.data.images.original.url;
    
  } catch (error) {
    throw 'Url no encontrado'
  }
};

// export const getImagePromise = () => {
//   return new Promise( resolve => {
//     resolve('https://url-de-mi-sitio-web/image1.jpg');
//   });
// }

getImage()
  .then((url) => console.log({ url }))
  .catch( error => console.log(error) )