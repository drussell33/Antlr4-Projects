// this is whats coming with ANTLR
function Animal(numAp, nam) 
{
    this.numberofAppendages = numAp;
    this.name = nam;
}

Animal.prototype.eat = function() {
    console.log("I'm eating");
}

let myAnimal = new Animal(4, "Dog");
let yourAnimal = new Animal(6, "Starfy");

// ES6 ECMAScript 2015

class Animal {
    //numberofAppendages;
    name = "Bob";
    constructor(numAp,nam){
        this.numberofAppendages = numAp;
        this.name = nam;
    }

    eat(){
        console.log("I'm eating");
    }
}



function name(a) {
return 2*a;
}


const name = function(a){return 2*a;};

const name = a => 2*a;
const other = (a,b) => a*b;

const twoup = a => function(b){return 2*b;}
const twoup = a => b => 2*b;