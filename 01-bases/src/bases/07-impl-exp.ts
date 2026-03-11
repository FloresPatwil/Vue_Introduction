import heroes from "../data/heroes";



export const getHeroById = (id : number) => {
    return heroes.find(hero => hero.id === id);
}
export const getHeroByOwner = (owner : string) => {
    return heroes.filter(hero => hero.owner === owner);
}

console.log(getHeroById(2));
console.log(getHeroByOwner('DC'));