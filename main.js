// Arreglos y objetos
/* Arregos-vectores (solo se pondran las cosas que son diferentes de con los vectores de C)
    Puede contener diferentes tipos de datos.
*/
// asi se declaran
let a=[]; // arreglo vacio
console.log("Total de elemtnos: ", a.length);

/* Obtener elementos del arreglo.
    Esto obviamente es con el indice de las posiciones del vector 
*/

let nombres = ["Juan","Miguel","Antonio","Leonel"];
// Esto para imprimir a Anotnio
console.log(nombres[2]);
console.log(nombres);
// Si queremos editar algun valor en el vector
nombres[2]="Pedro";
console.log(nombres);

// Uso del metodo push
nombres.push("Lorena");
console.log(nombres);
// aqui se modifico el vector "nombres"
/* 
Los metodos son funciones pre-programadas que puedes utilizar para hacer difetentes tipos de acciones ocuparemos dee ejemplo PUSH
La mayoria de los metodos tienen sus formas aunque todos se manejan con el . y la funcion que quieras usar 
*/

// Ejercicio 1:
let calif=[];
let o=10;
let p=0;
do {
    calif.push(Number(prompt("Dime tu calificacion")));
    o=Number(prompt("Quieres darme una calificacion mas?\n1-->Si\n0-->No"));
} while (o!=0);

let promedio=0;
let i=0;
for(i=0;i<calif.length;i=i+1){
    promedio=calif[i]+promedio;
}
if(promedio/i<=5){
    alert("Perdon hermano chupaste faros");
    console.log("tu promedio es ",promedio/i);
}
else{
    alert("Felicidades");
    console.log("tu promedio es ",promedio/i);
}

// Eliminar cosas de los arreglos
// Hay varias formas de hacerlo
delete nombres[1];
console.log("delete",nombres);
    // Delete puede eliminar cualquier cosa: funciones, variables etc. Delete es un METODO. El delete en un arreglo borra el valor que tiene la posicion pero no elimina el indice donde se encontraba el valor

    // Splice es otro metodo y sirve para eliminar tambien
    // Este metodo borra el valor y la casilla, y para hacerlo tienes que darle dos parametros, casilla a eliminar y apartir de esa casilla cuantas casillas mas va a eliminar. Tiene que recorrer al menos una que seria si quieres eliminar solo una cassilla
nombres.splice(1,1);
console.log("Splice",nombres);

    // POP es otro metodo que elimina el ultimo valor y indice de nuestro arreglo
console.log(nombres.pop());
console.log("POP",nombres);

// Ejercicio 2
function Randomiza(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

let nums=[],par=[],imp=[],tri=[],die=[];

let min=0, max=100,vez=0;
for(i=0;i<5;i=i+1){
    nums.push(Randomiza(min,max));
}
console.log(nums);
for(i=0;i<nums.length;i=i+1){
    if(nums[i]%2===0){
        par.push(nums[i]);
        if(nums[i]%10===0){
            die.push(nums[i]);
        }
    }
    else{
        imp.push(nums[i]);
    }
    if(nums[i]%3===0){
        tri.push(nums[i]);
        delete nums[i];
        vez=vez+1;
    }
}
i=0;
while (vez!=0) {
    if(nums[i]===undefined){
        nums.splice(i,1);
        vez=vez-1;
        i=0;
    }
    else{
        i=i+1;
    }
} 

console.log("despues",nums);
console.log("Pares",par);
console.log("Impares",imp)
console.log("Dieces",die);
console.log("Tres",tri);

/* Objetos: Son superparecidos a las estructuras solo que tiene la nueva cosa que a estas nuevas estructuras se les pueden agregar adentro funciones (A los que se le llama metodos)*/
// Se declaran asi
let persona={
    nombre: "Pedro"
};
// Se pueden agregar nuevos valores a la estructura del siguente modo
persona["Direccion"]="Cuidad de México, CDMX";

// Tambien puedes agregar metodos
persona["Saludo"]=function(){
    console.log("Hola que tal de parte de ",persona.nombre);
}

// Objeto: Estructura de dato donde manejamos llaves (comunmente llamadas
// propiedades) y valores (de cualquier tipo), podemos guardar funciones
// (comunmente llamados metodos)

// declaracion 
// const persona = {};


const persona = {
    nombre: 'Pedro'
};

// asignacion/modificacion de propiedades
persona['direccion'] = 'Ciudad de México, CDMX';

// generar metodos

persona['saluda'] = function() {
    console.log('mi nombre es: ', this.nombre)
};

persona['dondevivo'] = function() {
    console.log('yo vivo: ', this.direccion)
};

persona.saluda();
persona.dondevivo();


const automovil = {
    marca: 'patito',
    modelo: 'quak quak',
    lanzamiento: 2015,
    color: 'amarillo',
    motor: 'alita2345',
    arranca: function() {
        console.log('el automovil arranco');
    },
    acelarar: function() {
        console.log('el automovil aumento la velocidad');
    },
    apagar: function() {
        console.log('el automovil se apago');
    },
    fichatecnica: function() {
        console.log('marca: ', this.marca);
    }
};
console.log(automovil);

automovil.arranca();
automovil.acelarar();
automovil.apagar();

// obtener valores

automovil.lanzamiento;
automovil.color;
automovil.marca;

automovil['lanzamiento']
automovil['color']
automovil['marca']

// acceso dinamico de propiedades
const propiedad = 'motor'
automovil[propiedad];


// eliminar
delete automovil.motor;
delete automovil['motor'];
delete automovil[propiedad];

console.log(automovil);

// obtener las propiedades de un objeto
const llaves = Object.keys(automovil) //=>  arreglo con las llaves del objeto

console.log('estas son las llaves: ', llaves);

// obtener los valores de las llaves
const valores = Object.values(automovil)

console.log('estos son los valores: ', valores);
