//Sin interface
var personas:any[]= [];

var persona1 = {
    nombre: "Johnathan",
    apellido: "Monsalve"
}

personas.push(persona1);

var persona2 = {
    nombre: "Daya",
    apellido: "aux",
    edad: 23
}

personas.push(persona2);

//Con interface
interface IPersona{
    nombre: string,
    apellido: string,
    edad: number
}

var personasInterface:IPersona[] = [];

var persona1Interface: IPersona = {
    nombre: "Johnathan",
    apellido: "Monsalve",
    edad: 24
}

personasInterface.push(persona1Interface);

var persona2Inferface: IPersona = {
    nombre: "Daya",
    apellido: "aux",
    edad: 23
}

personasInterface.push(persona2Inferface);

console.log(persona1Interface.nombre);