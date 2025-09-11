//recorrer todos los nombres del array
let invitados = ["valen", "marti", "lucio"];
for (invitado of invitados){
    //alert(invitado)
}

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
let valen3 = "nombre"
console.log(valen3);

//ejercicio moureDev
//operadores arimeticos
let a = 5
let b = 6
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
console.log(a + b)

a++//incremento
console.log(a)
b--//decremento
console.log(b)

//operador de asignacion (=)
let myvariable = 2
console.log(myvariable)
myvariable += 2
console.log(myvariable)

//operadores de comparacion
console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b)
console.log(a === b)//estrictamente igual.
console.log(a != b)
console.log(a !== b)

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

let saludo = "Valen"
let saludoCompleto = "Hola, " + saludo 

console.log(saludoCompleto.toUpperCase()) //convierte todo el texto a todo mayuscula.
console.log(saludoCompleto.toLowerCase()) //convierte todo el texto a minuscula
console.log(saludoCompleto.indexOf(saludo)) //te dice en que indice empieza tal palabra
console.log(saludoCompleto.includes(saludo))
console.log(saludoCompleto.includes("perro")) // el includes sirve para verificar si algo existe o no
console.log(saludoCompleto.slice(0, 7))// esto lo que hace le pedis que te muestre un texto de tal letra hasta tal letras, definis su longitud, siempre incluye el ultimo elemento.
console.log(saludoCompleto.replace("Valen", "Messi")) //basicamente le decis, si encontras esta palabra, cambiala por esta. solo eso...