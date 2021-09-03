// Ejercicio 1
/* function checa(a,b){
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
console.log("Filtrado",nommodi); */

/* 
function greaterThan(n) {
    return m => m > n;
  }
  let greaterThan7 = greaterThan(7);
  // 6 => 6 > 7
  console.log(greaterThan7(6));
  // → true 
*/

// Ejercicio Filter
/* let nombres=[];
let checa="";
for(let i=0;i<3;i=i+1){
    nombres[i]=prompt("Dame un nombre");
}

let nom3=nombres.filter((n)=>n.length%2===0|| n[3]==="a"||n[3]==="e"||n[3]==="i"||n[3]==="o"||n[3]==="u");

console.log(nom3);
 */

/* Idea para poder encontrar algo en un objeto es pasar todo a un cadena y compararlo con lo que el usuario quiere buscar*/

// Ejercicio de map

let calificaciones=[
    {matematicas: 5, literatura: 8, historia: 9, geografia: 10, artes:3},
    {matematicas:6, literatura:7, historia:8, geografia:8, artes:7},
    {matematicas:6, literatura:6, historia:6, geografia:6, artes:6},
    {matematicas:8, literatura:8, historia:2, geografia:5, artes:10},
    {matematicas:9, literatura:9, historia:9, geografia:10, artes:8},
    {matematicas:10, literatura:10, historia:10, geografia:10, artes:10}
    ];

console.log(calificaciones.map((c)=>{
    const prom=promedio(c);
    return [prom,
        prom<7?"Reprobado":prom>=7&&prom<10?"Aceptable":"Excelente"
    ]
}));

function promedio (calificaciones){
    let suma=0;
    for (calificacion in calificaciones){
        suma=suma+calificaciones[calificacion];
    }
    return suma/Object.keys(calificaciones).length;

}






