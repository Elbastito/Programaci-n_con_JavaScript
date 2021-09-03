// Ejercicio 1
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






