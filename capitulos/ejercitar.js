//recorrer todos los nombres del array
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

//ARRAYS Y BUCLES
//carrera de autos
