// This is a function for adding....
@log()
function add(op1: number, op2: number): number {
    debugger;
    var internalFunctionVariable = 20;
    let letVar = 20;
    return op1 + op2;
}

setTimeout( () => {
        alert("Hello after 2 seconds")
     }    , 3000);

     let arr1 = [10, 20, 30]
     let arr2 = [40,50]
     let arr3 = [...arr1, ...arr2]

add(10, 20)

class Song {
    public name: string;
    public singer: string;
    constructor() {
        this.name = "Let it be";
        this.singer = "Beatles";
    }

    public setName(newName: string) {
        this.name = newName;
    }

    public printFullName() {
        console.log("First name " + this.name + ", Last Name " + this.singer);
    }
}

let song1 = new Song();
let song2 = new Song();

let s: Song = new Song();
console.log(s);


//let names = ["Ziv", "Yosi"];
let names: any;
console.log(names)
