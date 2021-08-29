console.log("Hola mundo");

// alert("hola mundo");

// Ejercicio 1
/* let Alumno = function(nombre,patern,materen,edad,genero){
    this.Nombre=nombre;
    this.ApePaterno=patern;
    this.ApeMaterno=materen;
    this.Edad=edad;
    this.Genero=genero;
};

let alumno1= new Alumno(prompt("Dime nombre"),prompt("Dime apellido paterno"),prompt("Dime apellido materno"),prompt("Dime edad"),prompt("Dime genero"));
console.log(alumno1); */

// Ejercicio 2
/* let Personal = function(nombre,patern,materen,edad,genero,clase){
    this.Nombre=nombre;
    this.ApePaterno=patern;
    this.ApeMaterno=materen;
    this.Edad=edad;
    this.Genero=genero;
    this.Clase=clase;
};

let Alumno = function(nombre,patern,materen,edad,genero,clase){
    Personal.call(this, nombre, patern, materen, edad, genero,clase);
};

let Profesor = function(nombre,patern,materen,edad,genero,clase){
    Personal.call(this,nombre,patern,materen,edad,genero,clase);
    this.horas=null;
}
let profesor1=new Profesor(prompt("Dime nombre"),prompt("Dime apellido paterno"),prompt("Dime apellido materno"),prompt("Dime edad"),prompt("Dime genero"),prompt("Dime tu rol dentro de la escuela"));

console.log(profesor1); */

// Ejercicio 3
class Alumno{
    constructor(nombre,patern,materen,edad,genero){
        this.Nombre=nombre;
        this.ApePaterno=patern;
        this.ApeMaterno=materen;
        this.Edad=edad;
        this.Genero=genero;
    }
}

let alumno1= new Alumno(prompt("Dime nombre"),prompt("Dime apellido paterno"),prompt("Dime apellido materno"),prompt("Dime edad"),prompt("Dime genero"));
console.log(alumno1);

