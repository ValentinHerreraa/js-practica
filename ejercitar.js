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

let asientos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

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
 cine()










