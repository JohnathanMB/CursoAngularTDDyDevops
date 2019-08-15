//Sin interface
var personas = [];
var persona1 = {
    nombre: "Johnathan",
    apellido: "Monsalve"
};
personas.push(persona1);
var persona2 = {
    nombre: "Daya",
    apellido: "aux",
    edad: 23
};
personas.push(persona2);
var personasInterface = [];
var persona1Interface = {
    nombre: "Johnathan",
    apellido: "Monsalve",
    edad: 24
};
personasInterface.push(persona1Interface);
var persona2Inferface = {
    nombre: "Daya",
    apellido: "aux",
    edad: 23
};
personasInterface.push(persona2Inferface);
console.log(persona1Interface.nombre);
