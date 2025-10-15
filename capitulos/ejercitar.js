/*let invitados = ["valen", "marti", "lucio"];
for (invitado of invitados){
    alert(invitado)
}*/

//control de stock
//let productos = ["pan", "leche", "queso", "huevos", "arroz"]

/*let num = parseInt(prompt("ingresa un numero para ver stock disponible"));

const stock = () =>{
    for(producto of productos){
        if(num === 1){
            //alert(`productos disponibles en stock: ${producto}`);
        } else{
            if(num != 1){
                //alert("El numero que ingresaste no es valido.");
                break;
            };
        };
    };
};
stock();*/

//notas de alumno
/*let nombre = prompt("Ingresa tu nombre para saber la nota final: ")

let notas = [4, 6, 10, 10]

const escuela = (total) =>{
    for (nota of notas){
        promedio = total += nota
        promedioFinal = promedio / 4
    }
        if(promedioFinal > 7){

            alert(`${nombre} tu promedio es de ${promedioFinal} y estas aprobado`)

        } else{
            if(promedioFinal < 7){
                alert(`${nombre} tu promedio es de ${promedioFinal}  y estas desaprobado`)
            }
        }
}
escuela(0)*/

//caja registradora
/*let precios = [100, 334, 560, 401]

const cajaRegistradora = (total) =>{

    for (precio of precios){
        precioFinal = total += precio
    }

    if(precioFinal > 0){
    alert(`Precio final a abonar: ${precioFinal} `)

    } else{

        if(precioFinal < 0){
            alert("precio invalido")
        }
    }

}
cajaRegistradora(0)*/

//Asientos de cine (pendiente)
/*let sillas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let usuario = parseInt(prompt("Elegi cualquier asiento del 1 al 10: "))

const cine = () => {
    for(silla in sillas){
        sillas = [usuario - 1]
    }
        if(usario < 10){
            alert(`Elegiste el asiento ${silla}`)

        } else{
            if(usuario > 10){
                alert("Este asiento esta ocupado, elija otro")
            }
        }
}

//supermercado
/*let precios = [2030, 3300, 9000, 4000]

let pagar =parseInt(prompt("ingresa 1 para ver el total a pagar"))
let total = 0

const supermercado = () =>{
    for(precio of precios){
        precioFinal = total += precio
    }
    if(precioFinal > 30000){
        alert(`Tu total a pagar es de ${precioFinal} y tenes envio gratis`)
    } else if(precioFinal < 30000){
        alert(`Tu total a pagar es de ${precioFinal}`)
    }
}
supermercado()*/

/*let asientos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let ingreso = parseInt(prompt("Ingrese un numero del 1 al 10 para reservar un asiento: "))


const cine = () => {
    for(asiento in asientos){

        eleccion = ingreso - 1

        if(eleccion < 10){
        alert("Esta libre")
        break;
        }else{
            if(eleccion > 10)
                alert("Esta reservado")
                break;
            }
        }
 }
 cine()*/

 //entrada a boliche
/*let free = true

const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?")
    if(edad >= 18){
        if(time >= 2 && time < 7 && free === true ){
            alert("Podes pasar gratis")
            free = false
        } else{
            alert("Podes pasar pero tenes que pagar la entrada")
        }
    } else{
            alert("Sos menos de edad, no podes pasar.")
    } 
}
validarCliente(3)
validarCliente(1)
validarCliente(1.5)
validarCliente(2)
validarCliente(2.5)
validarCliente(4)
validarCliente(4.3)*/

//ejercicios con for, while y do while

//PRACTICAR BUCLES
/*let personas = ["valen", "lucio", "maria", "angel"]
for(persona of personas){
    alert(persona)
}*/

/*let numeros = [2, 3, 67, 22, 12]
let total = 0
function suma (){
    for (numero of numeros){
        result = total += numero
    }
    if(result > 0){
        alert(result)
    }
}
suma()*/

//for
/*let nuemerosVarios = [10, 2, 13, 3, 1]
let total = 0

for(i = 0; i < nuemerosVarios.length; i++){
   sumaTotal = total += nuemerosVarios[i]
}
alert("la suma de los nuemeros es : " + sumaTotal)*/

/*let nombresVarios = ["ana", "luis", "sergio", "juan"]

for(i = 0; i < nombresVarios.length; i++){
    alert(`posicion ${i} : ${nombresVarios[i]}`)
}*/



//for in
/*let materias = ["pan", "leche", "huevos" ]
for(materia in materias){
    alert(`producto ${materia} : ${materias[materia]} `)
}*/


/*let monedas = [100, 200, 300]
for(moneda of monedas){
    alert(`Preico : ${moneda}`);
};*/

//registro de ventas x2
/*let vendidos = [120, 340, 500, 230, 90]
let presion = parseInt(prompt("Presiona 1 para ver el total"))

let total = 0
const registro = () => {
    for(vendido of vendidos){
        sumaFinal = total += vendido
    }
    if(presion === 1){
        alert(sumaFinal) 
    } else{
        alert("Numero ingresado incorrecto")
    }
    superar = parseInt(prompt("Presione 2 para ver los productos que superan los 200: "))
    if(superar === 2){
        for(vendido of vendidos){
            if(vendidos >= 200){
                alert(`los que superan los 200 : ${vendido} `)
            }
            alert(vendido)
        }
    }
}
registro()*/

//nota alumnos x2
/*let pelotas = ["ana", "luis", "pedro", "juan", "sofia"];
let escolares = [8, 5, 7, 10, 6];

let profesora = parseInt(prompt("Ingresar 1 para ver la nota de los alumnos o 2 para ver el promedio final"));



function notasDeAlumnos (total){
    if(profesora === 1){
        for(let i = 0; i < pelotas.length && escolares.length; i++ ){
            alert(`Las notas de los alumnos son: ${pelotas[i]} ${escolares[i]}`)
        }
    } 
    if(profesora === 2){
        for(let i = 0; i < escolares.length; i++){
            promedioSemiFinal = total += escolares[i]
            promedioFinal = promedioSemiFinal / 5 
        }
        alert(`El promedio total de los alumnos es: ${promedioFinal}`);
    }
};
notasDeAlumnos(0)*/

/*let harinas = ["pan", "leche", "queso", "huevos"];
let pedir = prompt("Que quieres llevar?")

const panaderia = () => {
    for(i = 0; i < harinas.length; i++){
        if(pedir === harinas[i]){
            for(harina in harinas){
            }
            alert(`${harina}: producto disponible ${harinas[i]}`)
            break;
        }
    }
}
panaderia()*/

//notas func
/*let valores = [7, 10, 10, 7];

calcular =prompt("Escriba un nombre y le pondremos el promedio de esa persona: ")

function calcularPromedio (total){
    for(let i = 0; i < valores.length; i++){
        promedio = total += valores[i]
        promedioFinal = promedio / 4
    }
    if(calcular === "Valentin" ){
        if(promedioFinal >= 7){
            alert(`${calcular} tu promedio es ${promedioFinal} y estas aprobado/a.`)
        }
    } else{
        alert(`${calcular} tu promedio es ${promedioFinal} y estas aprobado/a.`)
    }
}
calcularPromedio(0)*/

//lista compras
/*let vacios = [];
let cantidad = 3;


const agregarProducto = () =>{

    for(i = 0; i < cantidad; i++){
        agregar = prompt("Ingresa los productos y mostraremos por pantalla: ")
        agregarFinal = vacios.push(agregar)
        alert(`${agregarFinal}: ${agregar}`)
    }
}
agregarProducto()*/

//registrar ventas
/*let platas = [120, 340, 543, 210, 90]

const calcularTotal = (total) => {
    for(i = 0; i < platas.length; i++){
        semi = total += platas[i]
    }
    alert(semi)
}
calcularTotal(0)

const ventasMayores = () => {
    for(plata of platas){
        if(plata > 100){
            alert("Mayor a 100: " + plata)
        }
    }
}
ventasMayores()*/

/*let cosas = ["ana", "luis", "lucio", "valen", "angel", "maria", "martina"];

buscarNombres = prompt("Busca el nombre que desees: ");

const buscar = () => {
    for(i = 0; i < cosas.length; i++){
        if(cosas[i] === buscarNombres){
        alert(`Encontrado en la posicion ${i}`)
        }
}

}
buscar()*/

//acceso al club
/*let acceso = [];
let cantidad = 3;
ingreso = prompt("Ingresa 3 nombres: ");

function club (){
    for(i = 0; i < cantidad; i++){
        dato = acceso.push(ingreso)
        usuario = prompt("Ingresa tu nombre: ")
        if(usuario === ingreso){
            alert(`${ingreso} estas en la lista.`)
        }
    }
}
club()*/

//carrito de compras
/*let preciosVariados = [120, 850, 230, 600, 180];

function sumaMenoresAX (total){
    for(i = 0; i < preciosVariados.length; i++){
        suma = total += preciosVariados[i] <= 500
        alert(suma)
    }
}
sumaMenoresAX(0)*/

//lista de tareas
/*let arrayVacio = [];

let cantidadTarea = 5


function tareas (){
    for(i = 0; i < cantidadTarea; i++){
        let agregarTareas =prompt("Agrega las tareas de la casa: ")
        hacer = arrayVacio.push(agregarTareas)
        alert(`${i} - ${agregarTareas}`)
    }
}
tareas()*/
let valen3 = "nombre";
console.log(valen3);

//ejercicio moureDev
//operadores arimeticos
let a = 5;
let b = 6;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a + b);

a++;//incremento
console.log(a);
b--;//decremento
console.log(b);

//operador de asignacion (=)
let myvariable = 2;
console.log(myvariable);
myvariable += 2;
console.log(myvariable);

//operadores de comparacion
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a === b);//estrictamente igual.
console.log(a != b);
console.log(a !== b);

//truthy value (valores verdaderos).

//todos los numeros positivos y negativos menos el 0
//todas las cadenas de texto menos las vacias
//todos los boolean

//falsy values (valores falsos)

//0
//0n
//null
//undefined
//nan
//el boolean false
//cadenas de texto vacias

let saludo = "Valen";
let saludoCompleto = "Hola, " + saludo ;

console.log(saludoCompleto.toUpperCase()) ;//convierte todo el texto a todo mayuscula.

console.log(saludoCompleto.toLowerCase());//convierte todo el texto a minuscula

console.log(saludoCompleto.indexOf(saludo));//te dice en que indice empieza tal palabra

console.log(saludoCompleto.includes(saludo));
console.log(saludoCompleto.includes("perro"));// el includes sirve para verificar si algo existe o no

console.log(saludoCompleto.slice(0, 7));// esto lo que hace le pedis que te muestre un texto de tal letra hasta tal letras, definis su longitud, siempre incluye el ultimo elemento.

console.log(saludoCompleto.replace("Valen", "Messi"));//basicamente le decis, si encontras esta palabra, cambiala por esta. solo eso...

//CONCIDCIONALES

//operador ternario
let age = 37;
const message = age == 37 ? "la edad es 37" : "la edad no es 37";
console.log(message);

//switch
let day = 7; //(lunes)
let dayname;
switch (day){
    case 0:
        dayname = "lunes";
        break;
    case 5:
        dayname = "sabado";
        break;
    case 6:
        dayname = "domingo";
        break;
    default:
        dayname = "Dia valido";
}
console.log(dayname);

//ejercicios condicionales

/*ingresar = prompt("Ingresa el nombre: ")
let name = "valen"
if(ingresar === "valen"){
    alert(`Hola ${ingresar}`)
} else{
    alert("No te conozco")
}*/
//contraseña y usuario
/*let usuario = "vazx"
let contraseña = 1234567

if(usuario === "vazx"){
    alert(`Bienvenido ${usuario}`)
}
if(contraseña === 1234567){
    alert(`tu contraseña es *******`)
}*/

//numero positivo
let numeroValido = 0;

if(numeroValido > 0){
    console.log("es positivo");
} else if(numeroValido < 0){
    console.log("es negativo");
} else{
    console.log("es cero");
}

//votaciones
let edadPersona = 12;

if(edadPersona >= 18){
    console.log("Podes votar");
} else{
    if(edadPersona < 18){
        let suma = 18 - edadPersona;
        console.log(`No podes votar te faltan: ${suma} años.`);
        
    }
}


/*let ingresarEstacion = prompt("Ingresa la estacion del año en la que nos encontramos.")

if(ingresarEstacion){
    alert(`Estamos en ${ingresarEstacion}`)
}*/

//matrices/ arrays
let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

//inicializacion

myArray = [1];
myArray2 = new Array(); //lo que hace este tipo de forma de escribir un array es que en vez de guardar algun dato, reserva un lugar en ese array, cuando ponemos un numero.

console.log(myArray);
console.log(myArray2);

//almacenar valores y guardarlos

myArray2 = new Array();
myArray2[0] = "valen";
myArray2 [1] = "herrera"; // esta forma agregamos valores y los acomodamos como queremos.
myArray2 [2] = "vazx";
myArray2 [3] = 
console.log(myArray2);

//metodos comunes

myArray = [];

//push y pop

//push: agrega elementos a un array de forma decreciente.
myArray.push(18);
myArray.push("hola");
myArray.push("todo bien");
myArray.push("capoo");
console.log(myArray);

// pop: elimina el ultimo elemento de un array y lo devuelve.
console.log(myArray.pop());

//shift y unshift

//shift: elimina el primer elemento de un array y lo devuelve.
console.log(myArray.shift());
console.log(myArray);

//unshift: agrega uno o mas elementos al principio del array
myArray.unshift("que", "me", "eliminas");
console.log(myArray);

//length: te dice que longitud tiene nuestro array, tambien sirve para recorrerlo.
console.log(myArray.length);

//clear ¿como borramos lo que hay dentro de nuestro array?
//simplemente lo inicializamos nuevamente.

myArray = [];
console.log(myArray);

//slice: elejis con que elemento quedarte, pero siempre va a ignorar el ultimo indice que le indiquemos.

myArray.push("messi", "ronaldo", "neymar", "hazard");
let probandoSlice = myArray.slice(0, 2);


console.log(probandoSlice);

//splice: lo que hace el splice es que le decimos que elementos no queremos que se muestre y decimos nosotros cuales dejamos.

//dato: si inicializamos todo en un console.log(). En vez de eliminar los elementos que elegimos, son los que nos va a dejar.

myArray.splice(1,2);
console.log(myArray);
//set

//declaracion
let mySet = new Set();

//inicializacion
mySet = new Set("messi", "ronaldo", "neymar", "hazard");
console.log(mySet);

//maquina expendedora
/*let bebida;
let peticion = parseInt(prompt("Ingresa la bebida que deseas tomar: "))

switch (peticion){
    case 1:
        bebida = "Cocacola"
    break;
    case 2:
        bebida = "Sprite"
    break;
    case 3:
        bebida = "Fanta"
    break;
    case 4:
        bebida = "Pasos de los toros"
    break;
    default:
        bebida = "No la tenemos"
}
alert(bebida)

//*tipo de comentarios (importante)
// ? rol (pregunta)
// ! piola (deprecado)
// TODO:  (refactor)
let rol = prompt("Ingresa tu rol a cumplir")
let rolACumplir;

switch (rol){
    case "admin":
        rolACumplir = "Tienes acceso total"
    break;
    case "editor":
        rolACumplir = "Puedes editar contenido"
    break;
    case "invitado":
        rolACumplir = "Solo puedes ver"
    break;
    default:
        rolACumplir = "No coincide el rol"
}
alert(rolACumplir)*/

// !1. EJERCITAR: filter, map, for each.
//! 2. EJERCITAR : condicionales, bucles, funciones, arrays, metodos de arrays y cadenas, 

//!map
//sumar 10
let map1 = [1,2,3,4,5];
const te = map1.map(n => n += 10);
console.log(te);

//mayus
let map2 = ["ale", "fran", "juan"];
const te1 = map2.map(nombre => nombre.toUpperCase(map2));
console.log(te1);

//cantidad letras
let map3 = ["balon", "juego", "plato"];
const te2 = map3.map(letra => letra.length);
console.log(te2);

//$
let map4 = ["100","200","300"];
let te3 = map4.map(numero => "$" + numero);
console.log(te3);

//frases split:separa las palabras de un array por espacios.
let map5 = [
    "soy yo", 
    "la mentira", 
    "misma piedra"
];
let te4 = map5.map(palabra => palabra.split(",")[0]);
console.log(te4);

//!filter
//par
let filter1 = [1,2,3,4,5,6,7,8,9,10,11,12];
let ag = filter1.filter(par => par % 2 === 0);
console.log(ag);

//con "A"
let filter2 = ["Aylen", "antonio", "lucas", "Ayelen", "lucio"];
let ag1 = filter2.filter(quedar => quedar.startsWith("A"));
console.log(ag1);

//mayor
let filter3 = [18, 2, 67, 3, 8];
let ag2 = filter3.filter(mayor => mayor >= 18);
console.log(ag2);

//correo
let filter4 = ["pancho@gmail", "piola@hotmail", "lucas@yahoo"];
let ag3 = filter4.filter(correo => correo.endsWith("@gmail"));
console.log(ag3);

//posicion
let filter5 = ["extraordinario", "hola", "baloncesto", "chau"];
const ag4 = filter5.filter(mas => mas.length > 5);
console.log(ag4);

//!forEach: 
// //?para que sirve 
//! 1. Mostrar/registrat cada elemento.
//! 2. Modificar elementos del array original.
//! 3. acumular en una variable externa.
//! 4. Manipular el dom.

//ejercicios mezclando de todo un poco
//filtrar
let filt1 = ["valen", "Angel", "analia", "lucio", "lucas", "Alvaro"];

for(let i = 0; i < filt1.length; i++){
    const filt2 = filt1.filter (name => name.startsWith("A"));
    console.log(filt2);
    break;
    
}
//contar
let frases = ["amo javascript", "python", "javascript lo mejor", "typescript"];
let contador = 0;

for (let i = 0; i < frases.length; i++) {
    if (frases[i].includes("javascript")) {
        contador++;
    }
}

//constra palabras.
console.log(`Hay ${contador} frases que contienen "javascript"`);

let pala = ["teclado", "lampara", "foco", "mesa"];
let pala2 = [];

for(let i = 0; i < pala.length; i++){
    if(pala[i].length > 4){
        pala2.push(pala[i].toUpperCase());
    }
}
console.log(`Ahora la variable pala2 tiene: ${pala2} `);

//precios
let varios = [100, 1500, 1099, 350, 40000, 30,];
let preciosConDescuento = [];

    for(let i = 0; i < varios.length; i++){
            if(varios[i] > 1000){
                preciosConDescuento.push(10 * varios[i] / 100);
            }
    };
console.log(`Lo que compraste quedo en: ${preciosConDescuento}`);

//emails validos
let correos = ["val@gmail.com", "mari@gmail.com", "abu@gmail.com", "    lola@gmail.com    "];

let agregarCorreosValidos = [];

for(let i = 0; i < correos.length; i++){
    if(correos[i].endsWith("@gmail.com")){
        agregarCorreosValidos.push(correos[i]);
    }
}
console.log(`Correos Validos: ${agregarCorreosValidos}`);

//promedio con condicional
let notasEscolares = [7, 6, 1, 4, 10, 8, 5];

let total = 0;
let contador1 = 0;

for(let i = 0; i < notasEscolares.length; i ++){
    if(notasEscolares[i] >= 6){
        total += notasEscolares[i];
        contador1++;
    }
}
    if(contador > 0){
        const promedio = total / contador1;
        console.log(`Tu promedio es de: ${promedio}`);
    }

    let frasesVarias = ["el tiempo que corre es arena en mis manos", "sea caluroso en los elogios y generosos en sus alagos", "no fue la gente que me saco del pozo, sino los que se sentaron conmigo","no es asi", "arena en mis manos", "cuatro de copas"];

    let frasesCortas = [];
    let frasesLargas = [];

    for(let i = 0; i < frasesVarias.length; i++){
        if(frasesVarias[i].length < 20){
            frasesCortas.push(frasesVarias[i]);
            console.log(frasesVarias[i]);
        } else{
            frasesLargas.push(frasesVarias[i]);
        }
    }
    console.log(`Freases cortas: ${frasesCortas}`);
    console.log(`Frases largas: ${frasesLargas}`);

    console.log("<br>");

//Unir palabras
let variasPalabras = ["ojo", "hola", "zarpado", "te", "ballena"];

for (let i = 0; i < variasPalabras.length; i++){
    if(variasPalabras[i].length > 3){
        variasPalabras.join(",");
        console.log(variasPalabras[i]);
    } else{
        console.log("Error");
    }
}

//? Ejercicios para mejorar la logica y el dominio de js
//* Bloque 1 - Fundamentos y logica (funciones + condicionales + bucles)

//1
function parImpar (numero){
    if(numero % 2 === 0){
        console.log("Es par");
    }
    if(numero % 2 === 1){
        console.log("Es impar");
    }
}
parImpar(9);

//2
function equis (n){
    for(let i = 0; i < n; i++){
        console.log(i);
    }
}
equis(20);

//3
const mayorQue = [1, 34, 55, 12, 18];
function cuantas (){
    let totalmayores = 0;
    for(let i = 0; i < mayorQue.length; i++){
        if(mayorQue[i] >= 18){
            totalmayores++;
        }
    }
    console.log(`Personas mayores a 18 son: ${totalmayores}`);
}
cuantas();

//*Bloque 2 - Arrays + metodos + logica
//1
let preciosIVA = [2500, 350, 600, 3400];

const porcentaje = preciosIVA.map((precios) => {
    let totalFinal = 21 * precios / 100;
    return totalFinal + precios;
});
console.log(porcentaje);

//2
let conA = ["armenio", "alejandro", "Angel", "Agusto"];
let soloLosNombresConA = [];

for(let i = 0; i < conA.length; i++){
    if(conA[i].startsWith("A")){
        soloLosNombresConA.push(conA[i]);
    }
}
console.log(`los nombres que empiezan con a son: ${soloLosNombresConA}`);


//3
let variasPalabrass = ["Genio", "Estamos", "Futbol", "Loco"];
let separar = variasPalabrass.join(",");
console.log(separar);

//4
let caracteres = ["futbol", "paraplegico", "acido ribonucleico", "desencamaronamelo"];
for(let i = 0; i < caracteres.length; i++){
    console.log(`La longitud de la palabra ${caracteres[i]} 
        es de: ${caracteres[i].length}`);
}

//*bloque 3 - Objetos + Funciones
//1
const persona = {
    nombre: "Valen",
    edad: 20,
    ciudad: "Campana"
};
console.log(`Su nombre es ${persona.nombre}, tiene ${persona.edad} y es de ${persona.ciudad}`);

//2
function modelo (marca, modelo, ano){
    return `Auto: ${marca} ${modelo} (${ano})`;
}
console.log(modelo("Ford", "Escort", "1998" ));

//3
let alumnosSanMartin = [
{
    nombre: "valentin",
    nota: 7
},
{
    nombre: "Franciso",
    nota: 8
},
{
    nombre: "Lucas",
    nota: 3
},
];
function aprobados (){
    const alumnosAprobados = [];
    for(let i = 0; i < alumnosSanMartin.length; i++){
        const alumnoVario = alumnosSanMartin[i];
        if(alumnoVario.nota >= 6){
            alumnosAprobados.push(alumnoVario.nombre);
        }
    }
    console.log(`los alumnos aprobados son: ${alumnosAprobados.join(",")}`);
};
aprobados();
//4
const celulares = [
    {marca: "samsung", color: "rojo"},
    {marca: "motorola", color: "azul"},
    {marca: "apple", color: "blanco"},
];
for(let i = 0; i < celulares.length; i++){
    console.log(celulares[i].modelo); 
    console.log(celulares[i].color);
}

//*Bloque 4 - Clases y POO Basica.
//1
class libro{
    constructor(titulo, autor, precio,){
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.info = (`El nombre el libro es ${this.titulo}, el autor se llama ${this.autor} y el precio es de ${this.precio} y de color ${this.colorLibro}`);
    }
    frase(){
        console.log(this.info);
    }
}
class folleto extends libro{
    constructor(titulo, autor, precio, colorLibro){
        super(titulo, autor, precio);
        this.colorLibro = colorLibro;
        this.info = (`El nombre el libro es ${this.titulo}, el autor se llama ${this.autor} y el precio es de ${this.precio} y de color ${this.colorLibro}`);
    }
    //static no depende directamente del objeto sino que de la clase.s
    set modificarColor(newColor){
        this.colorLibro = newColor;
    }
    frase2 (){
        console.log(this.info);
    }
}
const modificar = new folleto("Habits", "James", "21500", "negro");
modificar.frase2();
modificar.modificarColor = "Crudo";
modificar.frase2();



//2
class cuentaBancaria{
    constructor(saldoInicial, depositar, retirar){
        this.saldoInicial = saldoInicial;
        this.depositar = depositar;
        this.retirar = retirar;

        this.info = `Tu saldo es de: ${this.saldoInicial} 
        Depositaste:  ${this.depositar}. 
        Saldo actual: ${this.saldoInicial + this.depositar}.`;

    }

    ingresarPlata(){
        console.log(this.info);
    }

    retirarPlata(){
        console.log(`Retiraste: ${this.retirar}
        saldo actual:  ${this.saldoInicial + this.depositar - this.retirar}`);
    }
}
const cliente = new cuentaBancaria(1500, 1200, 1700);
cliente.ingresarPlata();
cliente.retirarPlata();

//3
class usuario{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.info = `Podes ingresar ${this.nombre}, tenes ${this.edad}`;
    }
    mayorDeEdad (){
        if(this.edad > 18){
            console.log(this.info);
        } else{
            console.log("No podes ingresar " + this.nombre + " sos menos de edad");
        }
    }
}
const ingreso1 = new usuario("valentin", 19);
ingreso1.mayorDeEdad();

//4
class cancha{
    constructor(nombre, precioHora, horasDeReserva){
        this.nombre = nombre;
        this.precioHora = precioHora;
        this.horasDeReserva = horasDeReserva;
        this.info = `Horas reservada la cancha: ${this.horasDeReserva}.
        Pagaste la cancha: ${this.precioHora * this.horasDeReserva}. 
        Complejo a jugar: ${this.nombre}.`;
    }
    costo (){
        console.log(this.info);
    }
}
const infoCancha = new cancha("Mundialista", 25000, 3,);
infoCancha.costo();