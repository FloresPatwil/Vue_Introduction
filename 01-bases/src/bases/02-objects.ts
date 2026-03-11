const person = {
    lastName: 'Stark',
    age: 45,
    adress: {
        street: 'Winterfell',
        number: 1,
        lat: 123.456,
        Lng: 123.456
    }
}; // as const;

// const person2 = {...person, adress: {...person.adress}}; // as const;
const person2 = structuredClone(person); // as const;

person2.lastName= 'Lannister';
person2.adress.street= 'Casterly Rock';

console.log({person, person2})
