const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const edad = Number(prompt("Ingrese su edad"));

const edadFutura = edad + 10;

const mensaje = "Hola " + nombre + " " + apellido +
". Tenés " + edad + " años. " +
"Dentro de 10 años vas a tener " + edadFutura + " años.";

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Edad: " + edad);
console.log("Edad dentro de 10 años: " + edadFutura);
console.log(mensaje);

alert(mensaje);



}







