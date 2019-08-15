var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, fechaNacimiento, genero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
    }
    //métodos
    Persona.prototype.edad = function () {
        var edad;
        edad = new Date().getFullYear() - this.fechaNacimiento.getFullYear();
        return edad;
    };
    return Persona;
}());
var empleado = new Persona("Johnathan", "Monsalve", new Date("04-22-1995"), true);
console.log(empleado);
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, apellido, fechaNacimiento, genero, id) {
        var _this = _super.call(this, nombre, apellido, fechaNacimiento, genero) || this;
        _this.notas = [];
        _this.id = id;
        return _this;
    }
    Estudiante.prototype.addNota = function (nota) {
        this.notas.push(nota);
    };
    Estudiante.prototype.getNotas = function () {
        return this.notas;
    };
    return Estudiante;
}(Persona));
var estudiante = new Estudiante('Dayana', 'Aux', new Date('12-01-1996'), false, "1234");
console.log(estudiante);
