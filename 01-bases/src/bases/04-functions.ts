//Nuero 1
// CONVENCIONAL POPULAR
// function greedingPerson( name: string) {
//     return `Hola, ${name}`;
// }
// FUNCION FLECHA
// const greetPerson = (name: string) => {
//     return `Hola, ${name}`;
// }
// FUNCION FLECHA DIRECT
const greatingPerson = (name: string) => `Hola, ${name}`;

/*
const getUser = () => ({
    return {
        uid: 'ABC-123',
        username: 'pedro'
    }
});   // ({})  return implito de un obj
*/
/*
const getUser = (uid: string) => ({
        uid: 'ABC-123',
        username: 'pedro'
});   // ({})  return implito de un obj
*/

const heroes = [
    {
        nombre: 'Batman',
        id: 1
    },
    {
        nombre: 'Superman',
        id:2,
        power: 'Super fuerza'
    },
];

const hero = heroes.find( (h) => h.id === 1 );
console.log(hero?.nombre ?? 'No se encontro el heroe');
