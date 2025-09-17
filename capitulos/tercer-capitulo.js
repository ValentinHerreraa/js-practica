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
        this.color = color
        this.info = `soy ${especie}, tengo ${edad} anos y soy de color ${color}`
    }
    verInfo(){
        console.log(this.info)
    }
}
const perro = new animal ("Doberman", 5, "Marron")
const gato = new animal ("Mish", 2, "Blanco")
perro.verInfo()
gato.verInfo()

class Perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color)
        this.raza = raza
    }
    verTodo(){
        console.log(`soy ${this.espeie}, tengo ${this.edad} anos, soy de color ${this.color} y soy un ${this.raza}`)

        //si o si para mostrar el contenido de las clases tenemos que poner un metodos o el uso de backtics con las variables dentro.
    }
    static info(){
        console.log("Los perros son animales fieles")
    }
}

Perro.info() //los static se los llama desde la clase como tal o de la funcion no del nombre de la variable que le asignamos ese objeto.


const heredar = new Perro ("perro", 1, "marron", "caniche")
const heredar2 = new Perro ("pajaro", 2, "verde", "aguila")

heredar.verTodo()
heredar2.verTodo()



//estudiantes
class Estudiante{
    constructor(nombre, notas){
        this.nombre = nombre;
        this.notas = notas;
    }
    verTotal (){
        let total = 0
        for(let nota of this.notas){
            total += nota
        }
        console.log(`${this.nombre} tiene promedio: ${total / this.notas.length}`)
    }
}

const alumno1 = new Estudiante ("valentin", [9, 10, 2, 3])
alumno1.verTotal()

//getters y setters
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad
    }
    get devolucion(){
        return console.log(`Hola, soy ${this.nombre}`)
    }
    set nuevo (nuevoNombre){
        this.nombre = nuevoNombre
    }
}

const person1 = new Persona("Valentin", 19)

person1.nuevo = "franciso"
console.log(person1.nombre)
/*los getters se usan sin (), de llo contrario te devolvera que noes una funcion.
() = x*/
class temperatura{
    constructor(calor){
        this.calor = calor
        this.info = `La temperatura esta dada en ${this.calor}`
    }
    grados(){
        console.log(this.info)
    }
    get cambio(){
        return console.log(`Ahora la temperatura esta en ${this.calor}`)
    }
    set ultimo (nuevaTemperatura){
        this.calor = nuevaTemperatura
    }
}
const Atem = new temperatura("celcius")
const cambiaso = new temperatura("fahrenheit")

Atem.grados()
cambiaso.cambio
cambiaso.ultimo = "celcius"
console.log(cambiaso.calor)

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
        return console.log(`Soy ${this.nombre}, soy especie ${this.tipo} y soy nivel : ${this.nivel} ` )
    }
    set niveles (subir){
        this.nivel += subir
        if(subir > 0){
            console.log(`Subi ${subir} niveles, ahora soy nivel ${this.nivel}`)
        } else{
            console.log("No podes subir de nivel.")
        }
    }
}
const especie = new pokemon ("pikachu", "raro", 100)
especie.info
especie.niveles = 10
console.log(especie.nivel)

class pikachu extends pokemon{
    constructor(nombre, tipo, nivel, ataqueEspecial){
        super(nombre, tipo, nivel)
        this.ataqueEspecial = ataqueEspecial
    }
    get ataques (){
        return console.log(`Soy ${this.nombre}, soy de tipo ${this.tipo}, mi nivel es ${this.nivel} y mi ataque principal es ${this.ataqueEspecial}`)
    }
}

const pokemon1 = new pikachu("valen", "legendario", 100, "teletransportacion")
const pokemon2 = new pikachu("lucio", "legendario", 99)

pokemon1.ataques
pokemon2.ataques

//red social simplificada
class usuario{
    constructor(nombre){
        this.nombre = nombre;
        this.amigos = []
    }
    get cantidad (){
        return console.log(`Soy ${this.nombre} y mis amigos son: ${this.amigos}`)
    }
    set agregar (nuevos){
        if(!this.amigos.includes(nuevos)){
            this.amigos.push(nuevos)
            console.log(`Me siguieron : ${nuevos}. 
                Ahora mis nuevos amigos son ${this.amigos}`)
        } else{
            console.log("No lo/la puedo agregar a amigos, Ya esta en tu lista.")
        }
    }
}
const usuario1 = new usuario("Valentin")
usuario1.cantidad

usuario1.agregar = ("Marcos");
usuario1.agregar = ("valen");
usuario1.agregar = ("maria");
usuario1.agregar = ("angel");
usuario1.agregar = ("maria")

console.log(usuario1.amigos)

//Ranking de videos juegos

class jugador{
    constructor(nombre, puntuaciones){
        this.nombre = nombre
        this.puntuaciones = puntuaciones
    }
    get agregar (){
            return console.log(`Mi user es ${this.nombre} y mi puntuacion es de : ${this.puntuaciones}`)
        }
        set mayor(agregar){
            this.puntuaciones += agregar
            if(agregar > 0){
                console.log(`Sume ${agregar} puntos, ahora tengo ${this.puntuaciones}`)
            } else{
                console.log("No puedes agregar resultados negativos")
            }
        }
    }
const jugador1 = new jugador ("vazx", [19500, 30000, 40000])
jugador1.agregar
jugador1.mayor = [21500]
console.log(jugador1.puntuaciones)

//biblioteca
class libro{
    constructor(titulo, autor, prestado){
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = prestado
    }
    set estado (cambiar){
        if(this.prestado === true && this.prestado === false){
            console.log(`Ya se lo preste a ${cambiar}`)
        }
    }
}
const persona1 = new libro("Habitos Atomicos", "James Clear")
persona1.estado = "valen"
console.log(persona1.prestado)

