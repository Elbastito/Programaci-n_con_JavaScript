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
let nombres=[];
let checa="";
for(let i=0;i<3;i=i+1){
    nombres[i]=prompt("Dame un nombre");
}

let nom3=nombres.filter((n)=>n.length%2===0|| n[3]==="a"||n[3]==="e"||n[3]==="i"||n[3]==="o"||n[3]==="u");

console.log(nom3);
