let cadenaxx = "cadena de prueba para ver los distintos operadores de prueba";
let resultadooo = cadenaxx.concat(" hola");
console.log(resultadooo);

//*Starwith: verifica como empieza una cadena, si empieza de la misma manera retorna true, de lo contrario false.

let star = cadenaxx.startsWith("Cadena");
console.log(star);

//*endwith: lo mismo que starswith pero verifica al final de una cadena, si empieza de la misma manera.

let end = cadenaxx.endsWith("prueba");
console.log(end);

//*includes: si un contenido esta en ambas cadenas retorna true, de lo contrario, si no hay lo que estamos buscando en otra cadena, false.
//*o tambien cuando queremos verificar lo que hay en una cadena.

let includes = cadenaxx.includes("valen");
console.log(includes);

//*IndexOf: nos dice en que indice empieza tal palabra, tambien podemos buscar los indices de las letras, en caso de no eonctrar lo que estamos buscando buscando nos va a devolver (-1)

let index = cadenaxx.indexOf("prueba");
console.log(index);

//*LastIndexOf: lo mismo que indexof, pero recorre de atras hacia delante, es decir, de mayor a menor y tambien busca el ultimo indcice, no el primero ademas devuelve (-1) cuando no encontramos algo.

let lastIndex = cadenaxx.lastIndexOf("hello");
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
//!CADENAS
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

//? 2
let lista = ["a", "b", "c", "d", "e"];
let eliminar = lista.splice(2, 1, "x", "y", "z");
console.log(lista);
console.log(eliminar);

//3 starwith: verifica si empieza con tal palabra.
let cadena1 = "info@gamil.com";
let rs = cadena1.startsWith("info@");
console.log(rs);

//4 endswith: verifica si termina con tal palabra
let cadena2 = "hola.jpg";
let rs1 = cadena2.endsWith("png");
console.log(rs1);

//5 indexof y lastindexof: buscar en que posicion esta lo que le estamos pidiendo, si no encuentra devuelve (-1)
let cadena3 = "javascript python c++ c#";
let rs2 = cadena3.indexOf("python");
console.log(rs2);

//6 includes: verifica si una palabra esta en tal cadena, retorna true, de lo contrario, false.
let cadena4 = "estoy muy triste";
let rs3 = cadena4.includes("muy");
console.log(rs3);

//7 repeat (): le pasamos un numero como parametro y esas van a ser las veces que se va a repetir la misma palabra X veces.
let cadena5 = "ok";
let rs4 = cadena5.repeat(5);
console.log(rs4);

//8 
// trim (): elimina ambos espacios, los de delante y los de atras.
//endTrim (): elimina los espacios al final.
//starTrim (): elimina los espacios de delante.
let cadena6 = "    Aca no permitimos espacios     ";
let rs5 = cadena6.trim();
console.log(rs5);

//9 substring (): lo que hace substring () es basicamente decirle, indicarle donde queremos que empieze y termina la cadena. 
let cadena7 = "Aprendiendo Javascript";
let rs6 = cadena7.substring(12, 23);
console.log(rs6);

//10 split (): lo que haces es basicamente convertir una cadena de texto a un array
let cadena8 = "2, 3, 4, 5, 6, 7";
let rs7 = cadena8.split(",");
console.log(rs7);

//11 tostring (): convierte o pasa a una cadena de taxto y deja de ser algun dato contrario.
let cadena9 = 2025;
let rs8 = cadena9.toString();
console.log(rs8 + " Es el ano actual.");

//12 tostring: convierte o pasa a una cadena de texto.
//pad end: agrega caracteres al final
//padstart: agrega caracteres al principio
let cadena10 = 7;
let rs9 = cadena10.toString();
console.log(typeof rs9);
let agree = rs9.padStart(3, "0");
console.log(agree);

//!ARRAYS.
//1 push: agrega elementos al final de un array
let vacio1 = [];
let practica = vacio1.push("manzana", "pera", "banana");
console.log(vacio1);
console.log(practica);

//2 pop: elimina el ultimo elemento de un array y lo devuelve.
//shift: elimina el primer elemento de un array y lo devulve.

let vacio2 = [1,2,3,4,5,6];
let practica2 = vacio2.pop() && vacio2.shift();
console.log(vacio2);
console.log(practica2);//en este caso devuelve 1 porque el && lo que hace es devolver el ultimo valor truthy evaluado.

//3
let vacio3 = ["buenos aires", "merlo", "campana"];
let practica3 = vacio3[0];
console.log(practica3);

//4 reverse: devuelve los elementos del array en orden inverso, el que estaba ultimo pasa a ser el primero. 
let vacio4 = ["h", "o","l", "a" ];
let practica4 = vacio4.reverse();
console.log(practica4);

//5 slice: pasamos dos parametros que indican el inicio y fin de los elementos, es decir, nosotros decidimos que queremos que nos devuelva, siempre ignora la posicion del segundo parametro.
let vacio5 = [2,3,4,5,6,7,8,9,10,22];
let practica5 = vacio5.slice(3, 7);
console.log(practica5);

//6 join: lo que hace join es basicamente convertir un array a una cadena de texto (string).
let vacio6 = ["hola", "todo", "bien"];
let practicar6 = vacio6.join("-");
console.log(practicar6);

//!SEGUIR CON METODOS DE CADENAS Y ARRAYS.
let seguir = [1,22,13,41,5,16];

//pop: elimina el ultimo
let s = seguir.pop();
console.log(s);
console.log(seguir);

//shift: elimina el primero
let s1 = seguir.shift();
console.log(s1);
console.log(seguir);

//push: agrega al final.
let s2 = seguir.push(6);
console.log(s2);
console.log(seguir);

//unshift: agrega al principio
let s3 = seguir.unshift(1);
console.log(s3);
console.log(seguir);

//splice: inicializa, saca, remplaza. elimina los elementos por completo
let s4 = seguir.splice(1,1,"reemplazo");
console.log(s4);
console.log(seguir);

//slice: saca elementos y los alamcena en nuevo array.
let s5 = seguir.slice(1,4);
console.log(s5);

//reverse: invierte el orden.
let s6 = seguir.reverse();
console.log(s6);

//concat: sirve para concatenar cualquier tipo de variable, valor, elemento, etc.
let seguir2 = [34,45,67,89];
let s7 = seguir.concat(seguir2);
console.log(s7);

//join: convierte un array en un string.
let seguir3 = ["hello ", "what about you ", "?"];
let s8 = seguir3.join("-");
console.log(s8);

//includes: verifica si algo esta dentro de una cadena o array.
let s9 = seguir.includes(9090);
console.log(s9);

let seguir4 = [1,18,9,90,34,2];

for(let i = 0; i < seguir4.length; i++){
    if(seguir4[i] >= 18){
        console.log(seguir4[i]);
    }
};

for(let i = 0; i < seguir3.length; i++){
    console.log(seguir3[i]);
}

let seguir5 = [1,2,3,4,5,6];


const map1 = seguir5.map(n => n + 10);
console.log(map1);
//!seguir con metodos de cadenas

//starwith: empieza con...
let cad = "pro zarpado en mal educado";
let c = cad.startsWith("pro");
console.log(c);

//endwith: termina con...
let cad1 = "me gusta esta oracion";
let c1 = cad1.endsWith("cion");
console.log(c1);

//indexof: busca donde empieza cada letra, numero, va a lo primero. en que posicion.

//lastindexof: si hay dos letras "a" va a por la segunda.
let cad2 = "persona mayor a 80";
let c2 = cad2.lastIndexOf("a");
console.log(c2);

//includes: verifica si existe una palabra en otro lugar
let cad3 = "me gusta javaScript";
let c3 = cad3.includes("javaScript");
console.log(c3);

//repeat: repite una palabra cuantas veces indiquemos.
let cad4 = "ok";
let c4 = cad4.repeat(5);
console.log(c4);

//split: convierte una cadena a un string.
let c5 = "hola, mundo, todo, bien".split(",");
console.log(c5);

//substring: le decis desde donde hasta donde te tiene que mostrar un string
let c6 = cad3.substring(0,6);
console.log(c6);

//toString: convierte cualquier tipo de dato en un string.
let cad5 = 90000;
let c7 = cad5.toString();
console.log(c7);
console.log(typeof c7);

//padstart: agrega caracteres dependiendo de que queremos agregar y cuantos mas.

let cad6 = "555";
let c8 = cad6.padStart(10, "0");
console.log(c8);

//padend: los mismo que padstart pero los agrega al final.
let c9 = cad6.padEnd(10, "*");
console.log(c9);





