let animals = [
    {
        type: 'Dog',
        mammal: true,
    },
    {
        type: 'Snake',
        mammal: false,
    },
    {
        type: 'Cheetah',
        mammal: true,
    },
]

const find_the_mammal =(animals)=> {
    let newArray= [];
    for(let animal of animals){
        if(animal.mammal === true){
            newArray.push(animal);
        }
    }
    return newArray;
}

const find_the_mammal_better =(animals)=> {
    let newArray=Array.from(animals);
    return newArray.filter((animal) => animal.mammal === true);
}

console.log(find_the_mammal(animals));
console.log(find_the_mammal_better(animals));