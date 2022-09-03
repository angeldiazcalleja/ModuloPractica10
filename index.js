// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).

const myObject = {
    id: 25487,
    name: 'Ángel',
    age: 30,
  }
  const hasId = ({ id }) => id ? true : false;
  console.log(hasId(myObject));
  console.log ("----------------------------------");

//Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

const element = ["Francia" , "Alemania" , "Italia", "España"];
const head= ([first]) => first;
console.log(head(element));
console.log ("----------------------------------");


//Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.

const animals = ["perro", "ballena", "tiburón", "tigre"];
const tail = ([ , ...restItems ]) => restItems;
console.log(tail(animals));
console.log ("----------------------------------");

//Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición

const colours = ["red" , "blue" , "green" , "pink"];
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log (swapFirstToLast(colours))
console.log ("----------------------------------");

//Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.

const myObject2 = {
    id: 1548,
    name: 'Whopper',
    age: 7,
  };

  const excludeId = ({ id, ...rest }) => rest;
  console.log(excludeId(myObject2));
  console.log ("----------------------------------");

  //Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.

  const words = ["Antena" , "vaca" , "ordenador" , "Acento", "Águila", "Vehículo", "Alcantarilla"];
  const wordsStartingWithA = words => words.filter(word => word.startsWith ("A"));
  console.log (wordsStartingWithA(words));
  console.log ("----------------------------------");

  //Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.

  const concat = [1 , 2 , 3 , 4 ,5];
  console.log (concat.join(" | "));
  console.log ("----------------------------------");

//Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
  
const multiply = [6 ,7, 8 ,9,];
const multArray = (multiply, x) => multiply.map ((item) => item * x)
console.log(multArray(multiply, 12));
console.log ("----------------------------------");

//Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.

const digits = [3 , 6 , 9 ,12 , 18, 21]
const calcMult = ([...digits]) => digits.reduce ((acc, n) => acc * n);
console.log ("El total son",calcMult(digits));
console.log ("----------------------------------");


// EJERCICIOS EXTRA //

// Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.

const days = ["Monday" , "Friday" , "Saturday" , "Wednesday", "Sunday"];
const swapFirstSecond = ([ first, second, ...rest ]) => [ second, first, ...rest ];
console.log (swapFirstSecond(days))
console.log ("----------------------------------");

//Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.

const persons = ["Anthony", "Angélica", "Hugo", "María", "Aitana"];


const firstEqual = (letter,strings) => strings.every(string => string.startsWith (letter));
console.log(firstEqual( "A" , persons));
console.log ("----------------------------------");

//Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.

const arr1 = ["dad", "brother", "sister", "grandson", "uncle", "aunt"];
const arr2 = ["dog", "shark", "bird", "wolf", "cat"];

const longest = (...arr) => arr.reduce((previous, current) => previous.length > current.length ? previous : current); 
console.log(longest(arr1, arr2));
console.log ("----------------------------------");

//Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

const tongueTwister = ("Supercalifragilisticexpialidocious")

const searchInStringV1 = (string, z) => Array.from(string).reduce((vecesRepetidas, x) => vecesRepetidas + (x === z ? 1 : 0), 0);
console.log(searchInStringV1(tongueTwister, "i"));
console.log ("----------------------------------");

//Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.

const searchInStringV2 = (string, z) => Array.from(string).filter(string => string ===z).length;
console.log(searchInStringV2(tongueTwister, "o"));
console.log ("----------------------------------");


//Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.

const sortWord = "Galadriel";

const sortCharacters = (str) => {
    return Array.from(str.toLowerCase())
        .filter(a => a !== ' ')
        .sort((a, b) => a > b ? 1 : -1);
}
console.log(sortCharacters(sortWord));
console.log ("----------------------------------");

//Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

const shout = (...words) => words.map(word => `¡${word.toUpperCase()}!`);
console.log(shout("water" , "milk", "gin", "coffee"));   
console.log ("----------------------------------");

//Lista de la compra. Dada la siguiente lista de la compra:

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  { category: "Carne y Pescado", product: "Pechuga de pollo", price: 3.75, units: 2 },
  { category: "Droguería", product: "Gel de ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel de cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const getIva = (iva, products) => products.map((product) => ({...product, IVA: product.price * iva }));
console.log(getIva(0.21, shoppingCart));
console.log ("----------------------------------");

//B. Ordena la lista de más a menos unidades.

const arrangeShoppingCart = products => products.sort ((a,b) => (a.units > b.units ? 1 : -1));
arrangeShoppingCart (shoppingCart);
console.log(shoppingCart);
console.log ("----------------------------------");

//C. Obtén el subtotal gastado en droguería.

const getTotalDroguería = product => product.filter(product =>product.category === "Droguería")
.reduce((acc, product) => acc + product.price * product.units, 0);
console.log("El total en droguería son", getTotalDroguería(shoppingCart));
console.log ("----------------------------------");

//D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

const orderCategory = products => products
.map((product) => `${product.product} tiene un precio total de ${product.price * product.units}€`)
.sort((a, b) =>  a.category > b.category ? 1 : -1)
.join (" / ")

console.log(orderCategory(shoppingCart));
console.log ("----------------------------------");