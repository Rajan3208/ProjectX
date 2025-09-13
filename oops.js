class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
        console.log("Obejct is created")
    }
    
}

class eat extends Animal{
    eatfood(){
        console.log(`Animal ${this.name} eating`)
    }
}

let a = new Animal("Rajan", 24);
console.log(`Animal name is ${a.name}`)

let b= new eat("DJ", 24)
b.eatfood();
