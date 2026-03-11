export const owners = ['DC', 'Marvel'] as const;
export type Owner = typeof owners[number];//nuevos valores

export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}
//owners.push('Disney'); // Error: No se puede agregar un nuevo valor a un array de tipo literal
export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export default heroes;