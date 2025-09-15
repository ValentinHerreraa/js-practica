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
const dog = new Perro()
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
const person2 = new Persona ("marcos", 19)

console.log(person1.nuevo)
/*los getters se usan sin (), de llo contrario te devolvera que noes una funcion.
() = x*/
