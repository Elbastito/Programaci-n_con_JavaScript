console.log("Hola mundo");

alert("hola mundo");


// Funciones en JavaScript

// Aqui lo que se esta haciendo es declarando a la funcion
function saludo(){
    alert("Hola Mundo");
}

// Aqui se podria decir que estas ocupandola como en el main de C
saludo();

/* Las funciones pueden tener dos tipos de parametros:
Opcionales y obligatorios
    Obligatorios: los obligatorios son exactamente los que se parecen a los del lenguaje C.
    Opcionales: si no le envias el parametro que esta esperando la funcion, la funcion le dara el valor de indefinido  
    */

// Ejemplo para entender los opcionales
function saludos(x){
    alert("hola " + x);
}

var nom=prompt("como te llamas");
saludos(nom);

// Para ocupar el paso por referencia, lo que tienes que hacer es ocupar un nombre que este en el "main" y no volver a ocupar ese nombre dentro de de la funcion que estas utlizando, o bueno en realidad de ninguna otra

// Se siguen ocupando los valores de las cosass que son false y true por defecto

// Ejercicio 1
function edad(nombre, edad){
    if(edad<18){
        console.log(`Perdon ${nombre} no puedes votar`);
    }
    else if(edad===18){
        console.log(`Felicidades ${nombre} primera vez votando`);
    }
    else if(edad>18&&edad<=30){
        console.log(`${nombre} que diputados elegiras?`);
    }
    else{
        console.log(`${nombre} Gracias por participar`);
    }
}
x=prompt("Dime tu nombre, porfavor");
y=prompt("Dime tu edad, porfavor");
y=Number(y);
edad(x,y);

// Funciones anonimas
    /* 
    No tiene nombre definido, se almacenan en una variable. Se ocupa para ser el metodo de un objeto */

var invocacion = function(){}
invocacion();

// Funcionees de invocacion instantantea
/*
Son anonimas y se encapuslan entre parentesis  */

// Ejercicio 2
function suma(num1,num2){
    return num1+num2;
}
function resta(num1,num2){
    return num1-num2;
}
function multiplicacion(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}

let r,r2,o;

do {
    let v1=prompt("Dime los dos numeros que quiers utlilizar (x)");
    v1=Number(v1);
    let v2=prompt("Dime los dos numeros que quiers utlilizar (y)");
    v2=Number(v2);
    o=prompt(`Tus numeros son x=${v1} y=${v2}\nDime que quieres hacer\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division (x/y)\n5.Division (y/x)\n#.Cualquier otra tecla para actualizar tus numeros\n0.Salir`);
    o=Number(o);
    switch(o){
        case 1:
            r=suma(v1,v2);
            o=prompt(`Tu resultado es ${r}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
        case 2:
            r=resta(v1,v2);
            o=prompt(`Tu resultado es ${r}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
        case 3:
            r=multiplicacion(v1,v2);
            o=prompt(`Tu resultado es ${r}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
        case 4:
            r=division(v1,v2);
            r2=modulo(v1,v2);
            o=prompt(`Tu resultado es ${r} y ${r2}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
        case 5:
            r=division(v2,v1);
            r2=modulo(v1,v2);
            o=prompt(`Tu resultado es ${r} y ${r2}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
    }
} while (o!=0);

// Ejercicio 3

/* function suma(num1,num2){
    if(num1%3==0||num2%3==0){
        return 0;
    }
    else{
        return num1+num2;
    }
}
function resta(num1,num2){
    if(num2>num1){
        return num2-num1;
    }
    else{
        return num1-num2;
    }
}
function multiplicacion(num1,num2){
    if(num2%2==0){
        return num1*((num2)*(2));
    }
    else{
        return num1*num2;
    }
    
}
function division(num1,num2){
    return num1/num2;
}

function modulo(num1,num2){
    return num1%num2;
}

let r,r2,o;

do {
    let v1=prompt("Dime los dos numeros que quiers utlilizar (x)");
    v1=Number(v1);
    let v2=prompt("Dime los dos numeros que quiers utlilizar (y)");
    v2=Number(v2);
    o=prompt(`Tus numeros son x=${v1} y=${v2}\nDime que quieres hacer\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division (x/y)\n5.Division (y/x)\n#.Cualquier otra tecla para actualizar tus numeros\n0.Salir`);
    o=Number(o);
    switch(o){
        case 1:
            r=suma(v1,v2);
            o=prompt(`Tu resultado es ${r}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
        case 2:
            r=resta(v1,v2);
            o=prompt(`Tu resultado es ${r}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
        case 3:
            r=multiplicacion(v1,v2);
            o=prompt(`Tu resultado es ${r}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
        case 4:
            r=division(v1,v2);
            r2=modulo(v1,v2);
            o=prompt(`Tu resultado es ${r} y ${r2}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
        case 5:
            r=division(v2,v1);
            r2=modulo(v1,v2);
            o=prompt(`Tu resultado es ${r} y ${r2}\nQuieres hacer mas operaciones\nNo-->0\nCualquier otra tecla-->Si`);
            o=Number(o);
        break;
    }
} while (o!=0); */