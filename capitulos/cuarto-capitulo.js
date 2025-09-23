//! METODOS DE CADENAS

//*concat: Sirve para concatenar dos variables que contengan un string, mediante una palabra reservada.

let cadena = "cadena de prueba para ver los distintos operadores de prueba";
let resultado = cadena.concat(" hola");
console.log(resultado);

//*Starwith: verifica como empieza una cadena, si empieza de la misma manera retorna true, de lo contrario false.

let star = cadena.startsWith("Cadena");
console.log(star);

//*endwith: lo mismo que starswith pero verifica al final de una cadena, si empieza de la misma manera.

let end = cadena.endsWith("prueba");
console.log(end);

//*includes: si un contenido esta en ambas cadenas retorna true, de lo contrario, si no hay lo que estamos buscando en otra cadena, false.
//*o tambien cuando queremos verificar lo que hay en una cadena.

let includes = cadena.includes("valen");
console.log(includes);

//*IndexOf: nos dice en que indice empieza tal palabra, tambien podemos buscar los indices de las letras, en caso de no eonctrar lo que estamos buscando buscando nos va a devolver (-1)

let index = cadena.indexOf("prueba");
console.log(index);

//*LastIndexOf: lo mismo que indexof, pero recorre de atras hacia delante, es decir, de mayor a menor y tambien busca el ultimo indcice, no el primero ademas devuelve (-1) cuando no encontramos algo.

let lastIndex = cadena.lastIndexOf("hello");
console.log(lastIndex);

console.log("//EJERCICIOS");

//EJERCICIOS: Primera parte.

//*Cadenas standard/oficiales: buscar cadenas y devolver un valor.

//starwith()
let primer = "Aprender javascipt es divertido";
let resultado1 = primer.startsWith("Aprender");
console.log(resultado1);
//concat()
let second = "Hola";
let resultado2 = second.concat(" Mundo!");
console.log(resultado2);
//endwith()
let tercero = "imagen.png";
let resultado3 = tercero.endsWith("png");
console.log(resultado3);
//indexof()
let cuarto = "Estoy aprendiendo a programar en javascript.";
let resultado4 = cuarto.indexOf("programar");
console.log(resultado4);
//lastindexof()
let quinto = "Mundo pequeno pequeno pequeno pequeno, mundo enorme";
let resultado5 = quinto.lastIndexOf("pequeno");
console.log(resultado5);
//includes
let sexto = "React Natives funciona en IOS y Android";
let resultado6 = sexto.includes("Native");
console.log(resultado6);
//TODO: Segunda parte metodos de cabenas.

//*Cadenas no oficiales/standard: modificar cadenas y rellenarlas.

//pad end/start
let septimo = "abc";
let resultado7 = septimo.padEnd(9, "234");
console.log(resultado7);

//repeat(): devuelve la misma cadena las veces que nosotros queramos.
let resultado8 = septimo.repeat(3);
console.log(resultado8);

//TODO: Tecera parte de metodos de cadenas.

//*Moficar cadenas.
//split()
let octavo = "genio,del,futbol,mundial";
let resulatdo9 = octavo.split(",");
console.log(resulatdo9[3]);

//subString()
let noveno = "madagascar";
let resultado10 = noveno.substring(0,2);
console.log(resultado10);

//tolowercase () = convierte una cadena a minuscula.
//toUppercase () = convierte una cadena a myuscusla.

//toString () = convierte algo a un string.
let decimo = 234567;
let resultado11 = decimo;
console.log(resultado11[0]); //Nos muestra el primer indice porque quiere decir que es un string.

//trim () = elimina los espacios en blanco del principio y del final, ambos 2.
//trimstart () = elimina los espacios del principio
//trimend () = elimisna los espacios del final

let once = "   como estas    ";
let resultado12 = once.trimEnd();
console.log(resultado12);

//!METODOS DE ARRAYS
//todo: metodos transformadores

//pop() = elimina el ultimo elemento de un array y lo devuelve.
let array1 = ["jorge", "lucio", "valen"];
console.log(array1);
let resultarray = array1.pop();
console.log(array1);
console.log(resultarray);

//shift() = elimina el primer elemento de un array y lo devuelve.
let array2 = ["jorge", "lucio", "valen"];
console.log(array2);
let resultarray1 = array2.shift();
console.log(array2);
console.log(resultarray1);

//push () = agrega un elemento de un array al final de la lista, y devulve cuantos elementos hay en el array.

let array3 = ["jorge", "lucio", "valen"];
console.log(array3);
let resultarray2 = array3.push("maria", "angel");
console.log(array3);
console.log(resultarray2);

//reverse () = devuelve el mismo array pero al reves, nos invierte el orden.

let array4 = ["jorge", "lucio", "valen"];
console.log(array4);
let resultarray3 = array4.reverse();
console.log(resultarray3);

//unshift () = agrega elementos al principio del array y devuelve su longitud.

let array5 = [1,2,3,4,5];
console.log(array5);
let resultarray4 = array5.unshift(6,7,8);
console.log(array5);
console.log(resultarray4);

//sort () = ordena los elementos del array, en caso de numeros seria de menor a mayor y en caso de palabras en orden alfabetico.

let array6 = ["jorge", "juan", 'juana', "valen", "violeta", "jairo", "victor"];
console.log(array6);
let resultarray5 = array6.sort();
console.log(resultarray5); 

//splice () = cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

let array7 = ["lucas", "sergio", "angel", "miguel"];
console.log(array7);
let resultarray6 = array7.splice(0,1,"juan", "armando", "roberto");
console.log(array7);
console.log(resultarray6);

//!APRENDER TODO LO VISTO, LUEGO SE SEGUIRA CON MAS METODOS.
//1
let carrito = [];
console.log(carrito);
let agregar = carrito.push("leche", "manzana", "barbacoa", "mayonesa");
console.log(carrito);
console.log(agregar);
carrito.pop();
console.log(carrito);
carrito.unshift("pollo", "carne");
console.log(carrito);

//2
let lista = ["a", "b", "c", "d", "e"];
let eliminar = lista.splice(2, 1, "x", "y", "z");
console.log(lista);
console.log(eliminar);

//3
let paises = ["arg", "bel", "ger", "turk"];
let pais = paises.indexOf(0);
console.log(pais);
