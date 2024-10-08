/* Paso 1: Variables */

var nombre = "Luisito";

var edad = 20;

var estudie = true;

console.log(nombre);
console.log(edad);
console.log(estudie);

/* Paso 2: Valores */

let minombre = "Luis";
let miapellido = "Toscano";

let nombreCompleto = "Luis" + "" + "Toscano";
let Estudiaste = true;
let noEstudiaste = false;

console.log(Estudiaste);
console.log(noEstudiaste);

let mensaje = "Hola, mi nombre es Luis y tengo 20 años";

console.log(mensaje);

/* Paso 3: If y Else */

let estudiaste = true;
if (true) {
  alert ("Luis, si estudiaste! Pasarás la materia.");
} else if (10 < 20) {
  alert ("Luis, no sé de que hablas!");
}
else {
  alert ("Luis, no estudiaste! Reprobarás la materia.");
}

/* Paso 3: Prompts */

let tuNombre;

console.log(tuNombre);

nombre = prompt("¿Cuál es tu nombre?");
console.log(tuNombre);

alert ("Es un gusto conocerte,"+ "" + nombre);

let tuEdad;

console.log(tuEdad);

edad = prompt("¿Cuál es tu edad?");
console.log(edad);

alert ("Luis, usted es mayor de edad") + edad;




