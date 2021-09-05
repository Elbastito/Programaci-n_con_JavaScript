/* // Ejercicio 1
// El includes() sirve para buscar valores dentro de un arreglo, si pero los valores dentro de este arreglo tienen que ser valores basicos(numerico, buleano, una palabra, bool), no pueden ser un arreglo o un objeto 
function checa(a,b){
    let i=0;
    let nomF=[];
    for(i=0;i<b.length;i=i+1){
        if(b[i].includes(a)){
            nomF.push(b[i]);
        }
    }
    return nomF;
}

var nom=[],nommodi=[];
let l=0;

l=prompt("Cuantos nombres quieres introducir");
for(i=0;i<l;i=i+1){
    nom[i]=prompt("Dame le nombre");
}
let letra=prompt("Dime la letra que quieres buscar");
nommodi=checa(letra,nom);
console.log("Original",nom);
console.log("Filtrado",nommodi);


function greaterThan(n) {
    return m => m > n;
  }
  let greaterThan7 = greaterThan(7);
  // 6 => 6 > 7
  console.log(greaterThan7(6));
  // → true 


// Ejercicio Filter
let nombres=[];
let checa="";
for(let i=0;i<3;i=i+1){
    nombres[i]=prompt("Dame un nombre");
}

let nom3=nombres.filter((n)=>n.length%2===0|| n[3]==="a"||n[3]==="e"||n[3]==="i"||n[3]==="o"||n[3]==="u");

console.log(nom3);



// Ejercicio de map

// Aqui se declaro un arreglo [], con objetos adentro {} 
let calificaciones=[
    {matematicas: 5, literatura: 8, historia: 9, geografia: 10, artes:3},
    {matematicas:6, literatura:7, historia:8, geografia:8, artes:7},
    {matematicas:6, literatura:6, historia:6, geografia:6, artes:6},
    {matematicas:8, literatura:8, historia:2, geografia:5, artes:10},
    {matematicas:9, literatura:9, historia:9, geografia:10, artes:8},
    {matematicas:10, literatura:10, historia:10, geografia:10, artes:10}
    ];

// Con esta funcion se pretende sacar el promedio de las calificaciones de cada alumno
// Map es practicamente una funcion que crea un nuevo vector (apartir de recorrerlo, o sea adentro tiene un ciclo) y da como resultado un arreglo con las misma cantidad de posiciones que el vector original, su contendio no necesariamente tiene que ser del mismo tipo que el del vector original. 
console.log(calificaciones.map((c)=>{
    // aqui la "C" representa al objeto del primere alumno con todos sus rubros y calificaciones
    // ejemplo -- (Primer iteracion){matematicas: 5, literatura: 8, historia: 9, geografia: 10, artes:3}
    // Estos objetos iran a la funcion promedio, la cual nos regresara UN valor numerico en concreto, y se almacenara en "prom"
    const prom=promedio(c);
    // Si nos fijamos en el formato del return, esta regresando un [vector], con dos valores prom (que es el promedio) y un if(ternario) que lo que hace es imprimir un mensaje respecto al promedio obtenido por e alumno en cuestion. [calificacion, mensaje] 
    return [prom,
        prom<7?"Reprobado":prom>=7&&prom<10?"Aceptable":"Excelente"]
        // ejemplo--->[9,Aceptable]
}));

function promedio (obj_alum){
    // Aqui "obj_alum" representa al primeer alumno y eel objeto que contiene los rubros y sus calificaciones. Para recorrerlo se utilizara un for in. (Explicacion de for in despues). El chiste es que la variable declarada (en esta caso calificacion) toma los valores de rubros del "obj_alum", osea: matematicas--> literatura--> historia--> geografia--> artes y se acaba el ciclo.
    let suma=0;
    for (calificacion in obj_alum){
        // Aqui pues esta nadamas sumando el valor de las calificaciones en la variable suma, para despues dividira en entre el "return" entre el numero total de calificaciones
        suma=suma+obj_alum[calificacion];
    }
// Esta la verdad es la unica parte que no entiendo bien, pero se supone que el Object.keys(blabla).length sirve para contar la cantidad de veces que se conto un rubro, entre la suma total y listo, ahi esta el primer promedio.
    return suma/Object.keys(obj_alum).length;

}
 */
// Ejercicio reduce
// Aqui se declaro un arreglo [], con objetos adentro {}, se le agregaron mas valores no numericos para poder explicar mejor el uso del reduce. Valores agregados = inscrito y nombre.
const alumnosxy = [
    {inscrito: true, materia1: 10, materia2: 10, materia3: 10, materia4: 10, materia5: 10, nombre: 'Tom'},
    {inscrito: true, materia1: 8, materia2: 7, materia3: 9, materia4: 6, materia5: 9, nombre: 'John'},
    {inscrito: true, materia1: 9, materia2: 10, materia3: 8, materia4: 8, materia5: 9, nombre: 'Ana'},
    {inscrito: true, materia1: 8, materia2: 8, materia3: 5, materia4: 10, materia5: 8, nombre: 'Laura'},
    {inscrito: true, materia1: 5, materia2: 9, materia3: 10, materia4: 7, materia5: 9, nombre: 'Peter'},
    {inscrito: true, materia1: 7, materia3: 3, materia4: 5, materia5: 10, nombre: 'Antonio'}
];

// Aqui se declara una variable la cual tendra el valor de la todas las operaciones realizadas, despues se ocupara esta variable para imprimir los valores obtenidos
const promedios = alumnosxy.reduce((acc, value, index) => {
    // El REDUCE a diferencia del MAP tiene 4 parametros, que serian (el acumulador, el valor en el cual se encuentra la iteracion, el index (o sea la posicion), y el ultimo es el mismo array)-en resumen-->(acumulador, valor de la caasilla actual, index, array).Aparte en el REDUCE tiene que poner el valor en el cual deseas que te regrese el resultado.
    const prom = Object.keys(value).reduce((sum, mat) => { 
        // ['inscritos', 'materia1', 'materia2', 'materia3', 'materia4', 'materia5', 'nombre]
        if (mat.includes('materia')) {
            return sum = sum + value[mat]; // sum = sum + value[mat];
        }
        return sum;
    }, 0) / 5;
    acc['alumno'+(index+1)] = {
        promedio: prom,
        nombre: value.nombre,
        descripcion: prom < 7
            ? 'Reprobado'
            : prom >= 7 && prom < 10 
                ? 'Aceptable'
                : 'Excelente'
    };
    return acc;
}, {});

console.log('promedios: ', promedios);

/* Realmente lo que es el acumulado, o la variable que se pone antes el REDUCE, es la variable la cual quieres "llenar", en el caso del primer for la cual esta recibiendo el arreglo de objetos (en la linea 117 le estamos diciendo que la variable que queremos llenar sera un objeto), entonces "acc" se transformara en un objeto relleno de cosas que nosotros le vayamos diciendo.
Entonces "value" se pone en la primer posicion, o sea el primer objeto del arreglo y comienza a recorrerlo.
Luego en la linea 100 lo que se pretende hacer es usar otro REDUCE para obtener el promedio de cada un de los alumnos. Para hacer eso tomamos todos los parametros de los objetos (inscrito, materia1 materia2, materia3, materia4, materia5, nombre) y con el object.keys lo tranformamos en un vector, (lo cual lo hace operable al REDUCE). Se utiliza la variable "mat" para ir recorriendo el vector creado con el object.keys. 
-En la linea 106 se puede ver como se dice que el resultado de este REDUCE o sea la variable "sum" se inicializara con valor cero.
el if dentro de la linea 102 sirve para clasificar las llaves y saber cual sumar y cual no (para hacer el promedio). Ya dentro de este if se ocupa esa lleva obtenida para acceder al valor real que tiene el objeto(estudiante) dentro del arreglo de objetos(estudiantes), con el return sum = sum + value[mat]; estamos actulizando el valor de sum, y si te puedes dar cuenta, estamos accediendo a "value" la variable declarada en el reduce de afuera, lo cual nos da acceso a los valores reales del objeto(estudiente) en cual sea la iteracion que se encuentre. El return sum de la linea 105 sirve para cuando una llave no entre al if no va a modificar el valor de "sum" por lo tanto va a regresar el valor de "sum" tal cual estaba antes de esa iteracion. El entre cinco de afuera sirve para cuando termine de iterar un objeto el resultado de este REDUCE(sum) se divida entre 5.
En las lineas 107-115 se crea un objeto con los valores que que se desean. Promedio, nombre del alumno, comentario sobre la calificacion y se retrona este mismo objeto con return "acc". Lo cual significa esta cosa que acabo de crear "acc" metela en el objeto que te dije que crearas desde el primeer reduce, y haci es que se van creando los objetos con los promedios de los estudiantes dentro de un objeto.
*/





