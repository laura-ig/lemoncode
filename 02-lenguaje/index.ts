//EJERCICIOS - LAURA VIDAL LOPEZ

//4: READ BOOKS - Typescript

interface Book {
    title: string;
    isRead: boolean;
}

console.log('4to ejercicio: Lista de libros con TS');
const books: Array<Book> = [
    {title:"Insomnia", isRead: true},
    {title:"It", isRead: false},
    {title:"El pistolero", isRead: true},
    {title:"El fugitivo", isRead: true},
    {title:"Cementerio de animales", isRead: false},
];
console.log(books);

//implementacion
const isBookRead = (books: Array<Book>, titleToSearch: string): boolean | undefined => books.find((x => x.title === titleToSearch))?.isRead;

//forzar booleano:
function isBookRead2(books: Array<Book>, titleToSearch: string): boolean {
  let read = books.find((x => x.title === titleToSearch))?.isRead;
  return (read === undefined)?false:read;
}

console.log("Libros leidos:");
console.log(isBookRead(books, "El fugitivo"));
console.log(isBookRead(books, "Cementerio de animales"));

