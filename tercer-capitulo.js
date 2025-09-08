//conceptos basicos de la programacion orientada a objetos
class edificio{
    constructor(pais, ciudad, color){
        this.pais = pais
        this.ciudad = ciudad
        this.color = color
        this.info = `El edificio esta en ${pais}, en la ciudad de ${ciudad} y es de color ${color}`
    }
    //method: el metodo es util cuando queres que el codigo sea mas compacto y facil de usar

    info (){
        //document.write(this.info)
    }
    pisos(){
         
    }
}

let varela = new edificio("argentina", "rosario", "beige")
let mitre = new edificio("argentina", "campana", "blanco")

//document.write(varela.info + "<br>")
//document.write(mitre.info + "<br>")

//mitre.info()
//varela.info()

//conceptos de POO(abstraccion, modularidad, encapsulamiento, polimorfismo)

//herencia

