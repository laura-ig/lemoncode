import "./styles.scss";
import logoImg from './content/sot-logo.png';

//title
const w: string = "World";
const hello: string = `Hello ${w}`;

const createText = (str: string) => document.createTextNode(str);
const texto = createText(hello);

const box = <HTMLDivElement>(document.getElementById('hello'));
box?.appendChild(texto);

//logo
const img = document.createElement('img');
img.src = logoImg;

const imgContainer = document.getElementById('imgContainer') as HTMLDivElement | null; //otra opcion
imgContainer?.appendChild(img);
