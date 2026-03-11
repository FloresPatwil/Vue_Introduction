// import heroes from '../data/heroes';
import { getHeroById } from './07-impl-exp';
import type { Hero } from '../data/heroes';
// console.log('Implementacion 1 !');

// new Promise( (resolve) =>{
//     resolve("Pagaste");

// }).then((message)=>console.log(message))


// new Promise( (resolve, reject) =>{
//     setTimeout( () => {
//         reject('Mi amigo no cumplio')
//     }, 1000 );
// })
//     .then((message)=>console.log(message))
//     .catch( errorMessage => console.warn(errorMessage) )
//     .finally(  () => console.log('Termino la promesa') )

// console.log('Fin del programa')

console.log('Implementacion 1 !');

const getHeroByIdAsync = (id: number): Promise<Hero> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            hero ? resolve(hero) : reject(`No se pudo encontrar el heroe con el id ${id}`);
        }, 1500);
    });
};

getHeroByIdAsync(1)
    .then(hero => console.log("El nombre es:", hero.name))
    .catch(err => console.warn(err));
