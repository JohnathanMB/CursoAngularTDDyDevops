var sumar = (num1, num2) => {
    return num1 + num2;
}

var sumar = (num1, num2) => {
    return num1 + num2;
}

var sumar = (num1, num2 ) => num1 + num2;

var sumar = num1 => num1 + 10;

console.log(sumar(10,5));

//Ejemplo de Function
var usuario = {
    nombre: "Johnathan",
    apellido: "Monsalve",
    saludar: function(){
        alert("Buenos dias "+ this.nombre +" "+this.apellido);
    }
}

//Ejemplo Callback
var usuarioCall = {
    nombre: "Johnathan",
    apellido: "Monsalve",
    saludar: function(){
        setTimeout(() => {
            alert("Buenos dias "+ this.nombre +" "+this.apellido);
        }, 2000);
       
    }
}