/*class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `El ${this.especie} tiene ${this.edad} anos y es de color ${this.color}`
    }
    verInfo () {
        console.log(this.info + "<br>")
    }
}

//herencia:crear una clase que va a tomar todo lo que puede hacer otra clase, pero ademas se puede agregar cosas nuevas.

class perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color)// esto es lo que va a heredar.
        this.raza = null;
    }
    // los static pertenecen directamente a la clase, solo se ejecuta lo que hay dentro cuando llamamos a la clase 
    set modificarRaza (newName){
        this.raza = newName 
    }

}
const dog2 = new perro ("perro", 3, "blanco", "doberman")
const dog = new perro ("perro", 5, "marron", "doberman");
const dog1 = new perro ("perro", 2, "negro", "caniche")

perro.modificarRaza = "pedro"
console.log(dog2.raza)*/

//crear clases para aplicar las caracteristicas de (POO)

//EJERCICIO 1: animales
class animal{
    constructor (especie, edad, color){
        this.espeie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${especie}, tengo ${edad} anos y soy de color ${color}`;
    }
    verInfo(){
        console.log(this.info);
    }
}
const perro = new animal ("Doberman", 5, "Marron");
const gato = new animal ("Mish", 2, "Blanco");
perro.verInfo();
gato.verInfo();

class Perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    verTodo(){
        console.log(`soy ${this.espeie}, tengo ${this.edad} anos, soy de color ${this.color} y soy un ${this.raza}`);

        //si o si para mostrar el contenido de las clases tenemos que poner un metodos o el uso de backtics con las variables dentro.
    }
    static info(){
        console.log("Los perros son animales fieles");
    }
}

Perro.info(); //los static se los llama desde la clase como tal o de la funcion no del nombre de la variable que le asignamos ese objeto.


const heredar = new Perro ("perro", 1, "marron", "caniche");
const heredar2 = new Perro ("pajaro", 2, "verde", "aguila");

heredar.verTodo();
heredar2.verTodo();



//estudiantes
class Estudiante{
    constructor(nombre, notas){
        this.nombre = nombre;
        this.notas = notas;
    }
    verTotal (){
        let total = 0;
        for(let nota of this.notas){
            total += nota;
        }
        console.log(`${this.nombre} tiene promedio: ${total / this.notas.length}`);
    }
}

const alumno1 = new Estudiante ("valentin", [9, 10, 2, 3]);
alumno1.verTotal();

//getters y setters
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    get devolucion(){
        return console.log(`Hola, soy ${this.nombre}`);
    }
    set nuevo (nuevoNombre){
        this.nombre = nuevoNombre;
    }
}

const person1 = new Persona("Valentin", 19);

person1.nuevo = "franciso";
console.log(person1.nombre);
/*los getters se usan sin (), de llo contrario te devolvera que noes una funcion.
() = x*/
class temperatura{
    constructor(calor){
        this.calor = calor;
        this.info = `La temperatura esta dada en ${this.calor}`;
    }
    grados(){
        console.log(this.info);
    }
    get cambio(){
        return console.log(`Ahora la temperatura esta en ${this.calor}`);
    }
    set ultimo (nuevaTemperatura){
        this.calor = nuevaTemperatura;
    }
}
const Atem = new temperatura("celcius");
const cambiaso = new temperatura("fahrenheit");

Atem.grados();
cambiaso.cambio;
cambiaso.ultimo = "celcius";
console.log(cambiaso.calor);

//cuenta bancaria
/*class Cuenta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo
        this.info = `Sos ${this.titular} y tu saldo es de: ${this.saldo}`
    }
    get dinero(){
        return console.log(`Sos ${this.titular} y tu saldo es de: ${this.saldo}`)
    }
    set billete (ingresar){ //el setter se utiliza para pedir informacion.
        if(ingresar > 0){
            this.saldo += ingresar
            console.log(`Se depositaron ${ingresar}. Saldo actual: ${this.saldo}`)
        } else{
            console.log("No se puede depositar un monto negativo o 0")
        }
    }
}
const usuario = new Cuenta ("valentin", 999)
usuario.dinero
usuario.billete = -1000;
console.log(usuario.saldo)*/

//mundo pokemon
class pokemon{
    constructor (nombre, tipo, nivel){
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
    }
    get info (){
        return console.log(`Soy ${this.nombre}, soy especie ${this.tipo} y soy nivel : ${this.nivel} ` );
    }
    set niveles (subir){
        this.nivel += subir;
        if(subir > 0){
            console.log(`Subi ${subir} niveles, ahora soy nivel ${this.nivel}`);
        } else{
            console.log("No podes subir de nivel.");
        }
    }
}
const especie = new pokemon ("pikachu", "raro", 100);
especie.info;
especie.niveles = 10;
console.log(especie.nivel);

class pikachu extends pokemon{
    constructor(nombre, tipo, nivel, ataqueEspecial){
        super(nombre, tipo, nivel);
        this.ataqueEspecial = ataqueEspecial;
    }
    get ataques (){
        return console.log(`Soy ${this.nombre}, soy de tipo ${this.tipo}, mi nivel es ${this.nivel} y mi ataque principal es ${this.ataqueEspecial}`);
    }
}

const pokemon1 = new pikachu("valen", "legendario", 100, "teletransportacion");
const pokemon2 = new pikachu("lucio", "legendario", 99);

pokemon1.ataques;
pokemon2.ataques;

//red social simplificada
class usuario{
    constructor(nombre){
        this.nombre = nombre;
        this.amigos = [];
    }
    get cantidad (){
        return console.log(`Soy ${this.nombre} y mis amigos son: ${this.amigos}`);
    }
    set agregar (nuevos){
        if(!this.amigos.includes(nuevos)){
            this.amigos.push(nuevos);
            console.log(`Me siguieron : ${nuevos}. 
                Ahora mis nuevos amigos son ${this.amigos}`);
        } else{
            console.log("No lo/la puedo agregar a amigos, Ya esta en tu lista.");
        }
    }
}
const usuario1 = new usuario("Valentin");
usuario1.cantidad;

usuario1.agregar = ("Marcos");
usuario1.agregar = ("valen");
usuario1.agregar = ("maria");
usuario1.agregar = ("angel");
usuario1.agregar = ("lucio");
usuario1.agregar = ("angel");

console.log(usuario1.amigos);

//Ranking de videos juegos

class jugador{
    constructor(nombre, puntuaciones){
        this.nombre = nombre;
        this.puntuaciones = puntuaciones;
    }
    get agregar (){
            return console.log(`Mi user es ${this.nombre} y mi puntuacion es de : ${this.puntuaciones}`);
        }
        set mayor(agregar){
            this.puntuaciones += agregar;
            if(agregar > 0){
                console.log(`Sume ${agregar} puntos, ahora tengo ${this.puntuaciones}`);
            } else{
                console.log("No puedes agregar resultados negativos");
            }
        }
    }
const jugador1 = new jugador ("vazx", [19500, 30000, 40000]);
jugador1.agregar;
jugador1.mayor = [21500];
console.log(jugador1.puntuaciones);

//biblioteca
class libro{
    constructor(titulo, autor, prestado){
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = prestado;
    }
    set estado (cambiar){
        if(this.prestado === true && this.prestado === false){
            console.log(`Ya se lo preste a ${cambiar}`);
        }
    }
}
const persona1 = new libro("Habitos Atomicos", "James Clear");
persona1.estado = "valen";
console.log(persona1.prestado);

//sistema de reservas de un restaurante.
class reserva{
    constructor(dia, mesa, personas){
        this.dia = dia;
        this.mesa = mesa;
        this.personas = personas;
    }
    get devolucion(){
        return console.log(`Reservaste el dia ${this.dia}, tu mesa es la numero ${this.mesa} y son ${this.personas} personas.`);
    }
}
const user1 = new reserva("viernes", 2, 5);
user1.devolucion;

class math{
    constructor (radio, perimetro, cos, sen, tg){
        this.radio = radio;
        this.perimetro = perimetro;
        this.cos = cos;
        this.sen = sen;
        this.tg = tg;
        this.info = console.log(`radio = ${this.radio} p = ${this.perimetro}, cos = ${this.cos}, sen = ${this.sen} y tg = ${this.tg}`);
    }
    fisica(){
        console.log(this.info);
    }
}

const problem1 = new math(15, 20, 16.4, 9, 0);
problem1.fisica();

//!OBJETOS y ARRAYS

//para crear un objeto en este caso de usa "{}": el objeto se creo para tener muchos elemento con diferentes tipos de datos, el array se penso para que tenga un mismo dato en todo el bloque.
const objeto = {
    nombre: "valen",
    apellido: "herrera",
    edad: 18
};

//ingresar a una propiedad de un obejto
const objeto1 = objeto.nombre; 
console.log(objeto1);

//editar propiedad:
objeto.edad = 34;
console.log(objeto);

//agregar una nueva propiedad: es la misma sintaxis de cambiar la propiedad nada mas que tenemos que poner un nuevo nombre.
objeto.deporteFavorito = "futbol";
console.log(objeto);

//borrar una propiedad: con la palabra reservada delete se saca una propiedad.
delete objeto.nombre;
console.log(objeto);

//recorrer un objeto
for(let hola in  objeto){
    console.log(hola, objeto[hola]);
}
//!COMBINADOS
const variosUsuarios = [
    {
        nombre: "valen",
        apellido: "herrera",
        edad: 20
    },
    {
        nombre: "francisco",
        apellido: "sottile",
        edad: 21,
    },
    {
        nombre: "lucio",
        apellido: "magnin",
        edad: 19
    },
];
for(let i = 0; i < variosUsuarios.length; i++){
    console.log("==========");
    console.log("Nombre: " + variosUsuarios[i].nombre);
    console.log("Apellido: " + variosUsuarios[i].edad);
    console.log("Edad: " + variosUsuarios[i].edad);
}
//!COMBINADOS 2:
const algoNuevo = {
    nombre:"Objeto con array",
    arr: ["abeja", "banana", "camion", "dado"],
};
console.log(algoNuevo);

algoNuevo.arr.forEach((elemento) => {
    console.log(elemento + "jaja");
});
//elemnto lo que hace es que toma cada valor del array, es decir, no toma el indice pero si toma el valor de cada uno de los elementos.

//!Ejercicios de clases, volviendo a retomar.
class persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.info = `Hola, soy ${this.nombre} y tengo ${this.edad} anos.`;
    }
    presentar(){
        console.log(this.info);
    }
}
const presentacionUno = new persona("valen", 18);
presentacionUno.presentar();

class producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.info = `te llevas una/un ${this.nombre} y te sale ${this.precio}`;
    }
    aplicarDescuento(porcentaje){
        let aplicar = porcentaje * this.precio / 100;
        let final = this.precio - aplicar ;
        console.log(`${this.info}.
            Con el descuento te queda en: ${final}` );
    }
}
const productoUno = new producto("leche", 1500);
productoUno.aplicarDescuento(10);

class auto{
    constuctor(velocidad){
        this.velocidad = velocidad;
    }
    acelerar(){
        console.log(`Vas a ${this.velocidad}/km
            Ahora como lo aceleraste vas a: ${this.velocidad + 10}`);
    }
    frenar(){
        console.log(this.velocidad - 20);
    }
}
const autoUno = new auto(120);
autoUno.frenar();

class cuentaBancaria{
    #saldo;
    constructor(depositar, retirar, saldo){
        this.depositar = depositar;
        this.retirar = retirar;
        this.#saldo = saldo;
    }
    depositarPlata(){
        console.log(`Depositaste: ${this.depositar}.`);
    }
    retirarPlata(){
        console.log(`Retiraste: ${this.retirar}.`);
    }
    get verSaldo(){
        return console.log(`Ahora tu saldo es de: ${this.#saldo + this.depositar - this.retirar}`);
    }
}
const nuevaCuentaBancaria = new cuentaBancaria(300, 1000, 2500);
nuevaCuentaBancaria.depositarPlata();
nuevaCuentaBancaria.retirarPlata();
nuevaCuentaBancaria.verSaldo;

class animales{
    constructor(especie){
        this.especie = especie;
    }
        hacerSonido(){
            if(this.especie === "perro"){
                console.log("WAW");
            } else if(this.especie === "gato"){
                console.log("MIAU");
            }
        }
}
class perroYGato extends animales{
    constructor(especie){
        super(especie);
    }
    hacerSonido(){
        super.hacerSonido();
        console.log("Soy un perro muy feliz.");
    }
    maullar(){
        if(this.especie === "gato"){
            console.log("MIAU");
        }
    }
}
const sonidoUno = new animales("gato");
sonidoUno.hacerSonido();
const sonidoDos = new perroYGato("perro");
sonidoDos.maullar();
