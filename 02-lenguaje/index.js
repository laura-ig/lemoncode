//EJERCICIOS - LAURA VIDAL LOPEZ

//1:
const array = [1,2,3,4,5,6,7];

const [head] = array;
console.log("1er ejercicio (head): "+head);
console.log('-----------');

const tail = ([first, ...arr]) => arr;
console.log("1er ejercicio (tail): ",tail(array));
console.log('-----------');

const init = (arr) => arr.slice(0,-1);
console.log("1er ejercicio (init): ",init(array));
console.log('-----------');

const last = (arr) => arr.at(-1);
console.log("1er ejercicio (last): ",last(array));

console.log('-+-+-+-+-+-+-+-+-+-+-');

//2:
const array1 = [1,23,4,67,3];
const array2 = [6,44,22,46,4,7];
const array3 = [8,2,9];

const concat = (arr1, arr2) => [...arr1, ...arr2];
console.log("2do ejercicio (concat): ",concat(array1,array2));
console.log('-----------');

//opcional
function concatMulti() {
    return [].concat(...arguments);
}
console.log("2do ejercicio (multi concat): ",concatMulti(array1,array2,array3));

console.log('-+-+-+-+-+-+-+-+-+-+-');

//3:
const objSource = {
    "day":1,
    "month":6,
    "year": 1999
};
function clone(source){
    return {...source};
}
const newObj = clone(objSource);
console.log("3er ejercicio (clone): ",objSource,newObj);
console.log("Mismo objeto: ",objSource===newObj);
console.log("Misma referencia day: ",objSource.day===newObj.day);
console.log('-----------');

const ObjTarget = {
    "day":2,
    "task":"do excercises",
    "time":"5 days"
};
function merge(source, target){
    return {...target,...source};//last overwrites
}
const mergedObj = merge(objSource,ObjTarget);
console.log("3er ejercicio (merge): ",mergedObj);

console.log('-+-+-+-+-+-+-+-+-+-+-');

//4:
console.log('4to ejercicio: Lista de libros');
const books = [
    {title:"Insomnia", isRead: true},
    {title:"It", isRead: false},
    {title:"El pistolero", isRead: true},
    {title:"El fugitivo", isRead: true},
    {title:"Cementerio de animales", isRead: false},
];
console.log(books);

//implementacion
const isBookRead = (books, titleToSearch) => books.find((x => x.title === titleToSearch))?.isRead;
console.log("Libros leidos:");
console.log(isBookRead(books, "It"));
console.log(isBookRead(books, "El pistolero"));

console.log('-+-+-+-+-+-+-+-+-+-+-');

//5:
console.log('5to ejercicio: Slot machine');

class SlotMachine {
    constructor(){
        this.coins = 0;
        this.message = '';
    }

    play() {
        this.coins++;
        
        let bool1 = Math.random() < 0.5;
        let bool2 = Math.random() < 0.5;
        let bool3 = Math.random() < 0.5;

        let result = bool1 && bool2 && bool3 ? true : false;
        
        //testing
        //console.log(result+" = "+bool1+" + "+bool2+" + "+bool3);

        this.message = result ? "Congratulations!!!. You won "+this.coins+" coins!!":"Good luck next time!!";
        if(result) this.coins = 0;
        console.log(this.message);
    }

}

const machine1 = new SlotMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
