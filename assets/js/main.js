//1. Array operations
//Head: Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = ([first]) => first;

console.log(head([1, 2, 3, 4]));
console.log(head(['a', 'b', 'c'])); 
console.log(head([])); 

//Tail: Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = ([, ...rest]) => rest;

console.log(tail([1, 2, 3, 4])); 
console.log(tail(['a', 'b', 'c'])); 
console.log(tail([345])); 
console.log(tail([]));


//Init: Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = (array) => array.slice(0, -1);

console.log(init([1, 2, 3, 4])); 
console.log(init(['a', 'b', 'c'])); 
console.log(init([55])); 
console.log(init([]));


//Last: Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array) => array[array.length - 1];

console.log(last([1, 2, 3, 4])); 
console.log(last(['a', 'b', 'c'])); 
console.log(last([23]));
console.log(last([])); 



//2. Concat
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const concat = (a, b) => [...a, ...b];

console.log(concat([1, 2], [3, 4])); 
console.log(concat(['a', 'b'], ['c', 'd'])); 
console.log(concat([], [1, 2])); 
console.log(concat([1022], [])); 



//3. Clone Merge
//Clone: Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
    return { ...source };
}

const original = { a: 1, b: 2, c: 3 };
const cloned = clone(original);
  
console.log(cloned); 
console.log(cloned === original); 

//Merge: Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
function clone(source) {
    return { ...source };
}
  
function merge(source, target) {
    return { ...clone(target), ...clone(source) };
}
  
const target = { a: "Mercedes", b: "Ares", c: "Alberto" };
const source = { b: "2", d: "Alejandra" };
  
const merged = merge(source, target);
  
console.log(merged); 
console.log(target); 
console.log(source); 



//4. Read Books
//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
function isBookRead(books, searchTitle) {
    const book = books.find((b) => b.title === searchTitle);
    return book ? book.isRead : false;
}
  
const books = [
    { title: "La chica del tren", isRead: true },
    { title: "El hilo invisible", isRead: false },
    { title: "Osito Tito", isRead: true },
];
  
console.log(isBookRead(books, "El hilo invisible")); // False
console.log(isBookRead(books, "Osito Tito")); // True
console.log(isBookRead(books, "Perdida")); // False



//5. Slot Machine
//El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
//Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando. 
//Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios 
//que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá 
//mostrarse por consola el mensaje: "Congratulations!!!. You won <número de monedas> coins!!"; y reiniciar las monedas almacenadas, ya 
//que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
class SlothMachine {
    constructor() {
      this.coins = 0; // Para contar monedas
    }
  
    play() {
      this.coins++; // Incrementa el contador
  
      // Tres booleanos aleatorios
      const roulette1 = Math.random() < 0.5;
      const roulette2 = Math.random() < 0.5;
      const roulette3 = Math.random() < 0.5;
  
      // Verificar si son 'true'
      if (roulette1 && roulette2 && roulette3) {
        console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
        this.coins = 0; // Reiniciar el contador
      } else {
        console.log("Good luck next time!!");
      }
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play(); 