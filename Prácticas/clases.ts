class Persona {

    //atributos
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    genero: boolean;

    constructor(nombre:string, apellido:string, fechaNacimiento:Date, genero:boolean){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
    }

    //métodos
    edad(): number{
        let edad: number;
        edad = new Date().getFullYear()- this.fechaNacimiento.getFullYear();
        return edad;
    }

}

var empleado: Persona = new Persona("Johnathan","Monsalve", new Date("04-22-1995"), true);
console.log(empleado);


class Estudiante extends Persona{
    private id : string;
    private notas : number[] = [];

    constructor(nombre: string, apellido:string, fechaNacimiento: Date, genero: boolean, id:string){
        super(nombre, apellido, fechaNacimiento, genero);
        this.id = id;
    }

    addNota(nota:number){
        this.notas.push(nota);
    }

    getNotas(){
        return this.notas;
    }

}

var estudiante: Estudiante = new Estudiante('Dayana',
                                            'Aux',
                                            new Date('12-01-1996'),
                                            false,
                                            "1234");

console.log(estudiante);