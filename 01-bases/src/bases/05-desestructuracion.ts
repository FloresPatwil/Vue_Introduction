interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}
export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
}
const {age, name, power='No tiene codeName'}= person;

console.log({age, name, power:'No tiene codeName'});

// Desectructuracion en args

interface CreateHeroArgs{
    name: string;
    age: number;
    codeName:  string;
    power?: string;
}
const createHero = ({name, age, codeName, power}: CreateHeroArgs)=>({
    id: 11221,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder'
})

console.log(createHero(person))