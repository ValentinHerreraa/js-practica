//apertura capitulo numero 2.

 //ARRAYS
 //let frutas = ["banana", "manzana", "pera"];
 //alert(frutas[1]);


 //ARRAYS ASOCIATIVO
/*let pc1 = {
    nombrepc: "pc",
    procesador: "intel core i7",
    ram: "16gb",
    espacio: "1tb"
};
alert(pc1["nombrepc"]);

let nombrepc = pc1["nombrepc"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase = `El nombre de tu pc es: ${nombrepc}<br>;
                El procesador es: ${procesador}<br>;
                La ram es de: ${ram}<br>;
                Tu espacio es de: ${espacio};`
document.write(frase);*/

//BUCLES E ITERACION
//While
/*numberwhile = 0
while (numberwhile <= 10){

    numberwhile++;
};
document.write(numberwhile);*/

//Do While
/*do{
    document.write(numberwhile);
    numberwhile ++;

}while(numberwhile < 10);*/

//break
/*while(numberwhile < 1000){
    if(numberwhile == 10){
        break;
    };
    numberwhile++;
    document.write(numberwhile);
};*/

//continue
/*let diez = 10
while(diez <= 20){
    diez++
    if(diez === 15){
        continue;
    }
    document.write(diez + "<br>");
};*/

/* For: esta conmpuesto de tres partes la cuales son |-----> Declaracion e inicializacion
                                                           |-----> condicion
                                                           |-----> Las iteramos, aumento o decremento*/
/*for(i = 0; i < 10; i++){
    document.write(i + "<br>");
}; 
for(i = 0; i < 20; i++){
    document.write(i);
};*/

//For In: te muestra en que indice esta cada elemento del array, no su valor.
 //let animales = ["gato", "perro", "tiranosaurio"];
/*for (animal in animales){
    document.write(animal + "<br>");
};

document.write("<br>");*/

 //For Of: te mustre ekl elemenot en si del array, no en la posicion que se encuntra.
/*for (animal of animales){
    document.write(animal + "<br>");
};*/

 //Label

/* array1 = ["maria", "josefa", "roberto"]
array2 = ["pedro", "marcelo", array1, "josefina"]

forRancio:
for (let array in array2){
    if(array == 2){

        for(let array of array1){
            document.write(array + "<br>")
            break forRancio;
        }

    } else{
        document.write(array2[array] + "<br>")
    }
}
    

document.write("<br>")

cantidad = ["manzana", "banana", "pera"]

for (frutas in cantidad){
    document.write(cantidad[frutas]+ "<br>")
 } */

 //FUNCIONES: simplemente escribimos una sola vez el codigo y lo podemos volver a reutilizar.
/*function saludar (){
    respuesta = prompt("Hola valen, como estuvo tu dia?")
    if(respuesta == "bien"){
        alert("me alegro")
    } else{
        alert("una pena")
    }
}
saludar()*/

  //return
/*let = numberrr = 10
function hello (){
    if(numberrr > 0){
        return "piola"
    } else{
        return"una macana"
    }
}
let mayor = hello()*/
//alert(mayor)

//parametros
/*function suma(num1, num2){
let result = num1 + num2
return result
}
alert(suma(1, 2))

function saludo (nombre){
    let frase = `hola ${nombre}! como estas?`
    alert (frase)
}
saludo("pedro")*/

//scope: el scope de las funciones es regional, variable que va dentro solo funciona para dentro de esa funcion y no la podemos utilizar en otra parte del codigo.

//funciones flecha
/*const saludar = nombre =>{
    document.write("hola como estas?" + nombre)
}
saludar("valen")*/

//HISTORIA DE COFLA 2
//!funciones flecha: aprenderlas bien y hacer ejercicios.
//*funcoin normal/clasica: palabra reservada funcion mas el parametro, la tradicional.
function jaja (nombre){
    console.log(nombre);
}
jaja("hola");

//*funciones anonimas: son las que reciben un nombre mediante de una constante.
const jeje = function(nombre){
    console.log(nombre);
};
jeje("chau");

//*funciones flechas: estructura: () => {}
let jiji = (nombre) => {
    console.log(nombre);
};
(jiji("bye"));

//!practicar: filter(), map(), forEach()
//todo: significado de cada uno.
//*filter (): Crea una nuevo array con los elementos que cumplen una condicion.

//*map ():Crea un nuevo array con el resultado de aplicar una funcion a cada elemento.

//*forEach (): Recorre el array y ejecuta una funcion por cada elemento (no devuelve nada)

let nombres = ["valen", "juan", "agustin", "faustino"];

nombres.forEach((nombre) => {
    console.log(nombre);
    return true;
    
});

console.log("<br>");

let names = ["martina", "maria", "angel"];

const map = names.map((name) => {
    let retornar = console.log(name);
    return retornar;
});
console.log(map);

let juegos = ["futbol", "basquet", "natacion"];
const filter = juegos.filter (juego =>{
    console.log(juego);
    return juego.toUpperCase();
});
console.log(filter);

let frutas = ["manzana", "pera", "damasco"];

let map2 = frutas.forEach (fruta => {
    console.log(`Mi fruta favorita es: ${fruta}`);
    return true;
});
console.log(map2);
//*Despues de tener consolidado arrays funciones y condicionales, seguir con map,filter y foreach. */

//! (ejercicios) SEGUIR CON ARRAYS, CONDICIONALES, FUNCIONES Y METODOS.

let algunos = [13, 14, 3, 56, 2, 1, 78, 90, 0];
/*function devolver (){
    for(let alguno of algunos){
        if(alguno > 10){
            console.log(alguno);
        };
    };
};
console.log(devolver());*/

function otro (){
    for(let i = 0; i < algunos.length; i++){
        if(algunos[i] > 10){
            console.log(algunos[i]);
        }
    };
}
otro();

/*let arreglo = [];
let ramdom = 3;

let ing = prompt("Ingresa 3 nombres: ");

for(let i = 0; i < ramdom; i++){
    let nombresIngresados = arreglo.push(ing);
    alert(`Los nombres que ingresaste son: ${nombresIngresados}`);
}*/

//! 10 ejercicios de bucles.
//1
let numeroUno = 0;
while(numeroUno <= 10){
    numeroUno++;
    console.log(numeroUno);
}

//2
for(let i = 1; i <+ 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//3
let datosPersona = [
    {nombre: "valentin", edad: 20, ciudad: "campana"}
];
for(let i = 0; i < datosPersona.length; i++){
    console.log(datosPersona[i]);
}

//4
let frutasVarias = ["manzana", "banana", "pera"];
for(let frutaVaria of frutasVarias){
    console.log(frutaVaria);
}

//5
let sumaUno = 0;
for(let i = 1; i <= 100; i++){ 
    sumaUno += 1;
};
console.log(sumaUno);

//6
let numeroTabla = 5;
while(numeroTabla <= 50){
    numeroTabla++;
    numeroTabla++;
    numeroTabla++;
    numeroTabla++;
    numeroTabla++;
    console.log(numeroTabla);
}