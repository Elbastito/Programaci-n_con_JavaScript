console.log("Hola mundo");

alert("hola mundo");

var edad= 30, dia=2;

// Ejercicio 1
if(edad>=18&&edad<=30){
    console.log("puedes votar");
    if(edad===30){
        console.log("felicidades");
    }
}
else{
    console.log("perdon, tu no tienes derecho a votar");
}

// Ejercicio 2

switch(dia){

    case 1:
        console.log("hoy es lunes");
    break;

   case 2:
        console.log("hoy es martes");
    break;

    case 3:
        console.log("hoy es miercoles");
    break;

    case 4:
        console.log("hoy es jueves");
    break;

    case 5:
        console.log("hoy es viernes");
    break;

    case 6:
        console.log("hoy es sabado");
    break;

    case 7:
        console.log("hoy es domingo");
    break;

    default:
        console.log("pon un numero correcto, oyes");
    break;
}

// Ejercicio 3

(edad>=18&&edad<=30)
?(edad===30)
    ?"felicidades"
    :"puedes votar"
:"perdon, tu no tienes derecho a votar";

// Ejercicio 4

let diass=prompt("Dime el numero del dia de la semana");
diass=Number(diass);

switch(diass){

    case 1:
        console.log("hoy es lunes");
    break;

   case 2:
        console.log("hoy es martes");
    break;

    case 3:
        console.log("hoy es miercoles");
    break;

    case 4:
        console.log("hoy es jueves");
    break;

    case 5:
        console.log("hoy es viernes");
    break;

    case 6:
        console.log("hoy es sabado");
    break;

    case 7:
        console.log("hoy es domingo");
    break;

    default:
        if(isNaN(diass)){
            console.log("Pon un numero no seas canijo")
        }
        else{
            console.log("pon un numero correcto, oyes");
        }
    break;
}

// Ejercicio 5

let inicio=prompt("Desde donde quieres que empiece a contar?");
inicio=Number(inicio);

let final=prompt("Donde quieres que acabe la serie?");
final=Number(final);

for(i= inicio; i<=final; i=i+1){
    console.log("El numero actual es ",i);
    if(i%2===0){
        console.log("Multiplo multiplicado ",i*2);
    }
    if(i%3===0){
        console.log("Es divisible entre 3 ",i);
    }
}

// Ejercicio 6


let d=0;
do {
    let doo=prompt("Dime el numero que quieres dividir");
    doo=Number(doo);
    let sor=prompt("Entre cuanto lo quieres dividir?");
    sor=Number(sor);
    d=doo/sor;
    // preguntar como imprimir
} while (d>10);