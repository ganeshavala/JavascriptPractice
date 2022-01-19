let js = new Object;
js.title ="Data structures";
js.contentSize = 20;
js.printPages = function (){
    console.log(js.title);
}

js.printPages();

class cat{
    constructor(){
        this.color = 'black';
        this.type ='adasda';
    }
}

class ext{
    constructor(name,size){
        let prvt1 = name;
        let prvt2 = size;

        this.getName = function(){return prvt1};
        this.setName = function(name){prvt1=name};

        this.getSize = function(){return prvt2};
        this.setSize = function(size){prvt2 = size};
    }
}

let cat1 = new cat();

cat.prototype.country ='canada';

console.log(cat1);
let example = new ext('Ganesh',12);
console.log(example.getName());
console.log(example.getSize());
example.setName("Padma");
example.setSize(17);
console.log(example.getName());
console.log(example.getSize());

class Animal{
    constructor(name,animalType){
        this.name= name;
        this.animalType= animalType;
    }

    sayName(){
        console.log(this.name);
    }
    sayType(){
        console.log(this.animalType);
    }
}

class Dog extends Animal{
    constructor(animal){
        super(
            animal.name,
            animal.animalType
        )
    }
    print(){
        super.sayName();
        super.sayType();
    }
}

let cuteAnimal = new Animal('cat','A');
cuteAnimal.sayName();
cuteAnimal.sayType();
let Husky = new Dog({name:'Husky',animalType:'Siberian'});
Husky.print();