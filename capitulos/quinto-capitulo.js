//! CONSOLA DE JAVASCRIPT

//todo: Funciones de registro.

//console.assert(condicion): cuando la condicion que le pasemos es falsa salta un error.
console.assert(5 < 1);

//console.clear(): sirve para limpiar la consola.
console.clear();

//console.error(mensaje): sirve para mostrar un error con un mensaje mas moderno.
console.error("esto esta mal");

//console.info(mensaje): sirve para dejar un mensaje de informacion sobre lo que hicimos o demas
console.info("El trabajo esta bien per tenes que acomodar esto.");

//console.table(array u objeto): pasamos como condicion un array u objeto y nos lo devuelve en forma de tabla.
console.table([1,2,3,4,5,6,7]);
console.table({nombre: "juan",
    apellido: "Herrera",
    edad: 18,
});

//console.warn(): imprime un mensaje de advertencia en consola.
console.warn("Venis bien pero, modifica esto...");

//console.dir(): es lo mismo que console.log(), pero nos devuelve la informacion mas limpia.
console.dir([1,2,34,4,5,67]);

//todo: Funciones de conteo.

//count() y countReset(): la funcionalidad que le podemos dar es para saber cuantas veces se ejecuto tal funcion.
console.count();
console.count();
console.count();
console.count();
console.countReset();
console.count();

//todo: Funciones de agrupacion
//console.group("nombre del grupo"): sirve para crear un grupo en crossOriginIsolated, todo lo que escribamos desoues de eso, se va a almacenar en el grupo

//console.groupEnd(): sirve para volver hacia atras, a otro grupo, o salir totalmente.

//console.groupCollapsed("nombre del grupo"): es lo mismo que console.group, pero empieza cerrado.

//todo: Funciones de temporizacion:
console.time();
console.timeLog();
console.timeLog();
console.timeEnd();
console.time();
console.timeStamp();
console.timeLog();
