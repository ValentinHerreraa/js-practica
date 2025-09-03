//apertura capitulo numero 2.

 //ARRAYS
 let frutas = ["banana", "manzana", "pera"];
 //alert(frutas[1]);

 //ARRAYS ASOCIATIVO
 let pc1 = {
    nombrepc: "pc",
    procesador: "intel core i7",
    ram: "16gb",
    espacio: "1tb"
};
/*alert(pc1["nombrepc"]);

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
//while
numberwhile = 0
/*while (numberwhile <= 10){

    numberwhile++;
};
document.write(numberwhile);*/

//do while
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
    document.write(diez + "<br>")
}*/

/*bucles for: esta conmpuesto de tres partes la cuales son |-----> Declaracion e inicializacion
                                                           |-----> condicion
                                                           |-----> Las iteramos, aumento o decremento*/
for(i = 0; i < 10; i++){
    document.write(i + "<br>")
} 
for(i = 0; i < 20; i++){
    document.write(i)
}
