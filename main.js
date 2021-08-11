console.log("Hola mundo");

alert("hola mundo");

// para declarar una variable. Pero esta es la forma antigua de declarar variables
var nombre = "pedro";

// Forma moderna de declarar variables
    let popo = "pedro";
    // Declarando asi la variable no vas a poder modificarla
    const caca = 1;
        // caca=caca+1; ==> por ejemplo esto no se puede hacer
        console.log(caca);
/*
Datos primitivos
        string: que son palabras
        number: que literalemte son numeros y se puedeen hacer las operaciones conocidad
        boolen: los buleanos solo pueden tener dos valores true o false 
*/

 /*
 Datos compuestos o estructuras
        arreglos: practicamente es una matriz (es mas permisivo que las matrice en C)
        object: este practicamente es una estructura equivalente a C 
        Funcion: mismo concepto de funciones en C
*/

// undefined: es un tipo de dato que no tiene categoria ni valor asignado

// null: tambien tiene los mismos usos que en C. Tiene mucho mas sentido esto, al decir que para el lenguaje JavaScript todos los tipos de datos no primitivos son objetos o sea estructuras

/*
typeof: este operador nos deja saber que tipo de valor es una variable. Ejemplo
*/
console.log(typeof caca);

/* 
typeof de ["esto es una vector o arreglo en JS"] y{"esto es una struct o un objeto en JS"} el null es un objeto (que tiene sentido) y el undefined es un undefined (que tambien tiene sentido)
*/

// Se puede cambiar la variables de tipo. Con las funciones string("variable a convertir"), number("variable a convertir"), boolean("variable a convertir").

/*
Casi todos los tipos de valores tienen valores booleanos definidos (true o false)
*/

/* 
Operadores
    Tiene todos los operadores matematicos y obviamente se aplican a los numeros.
    Tambien tiene operador % (modulo) que servia para el residuo
    Para concatenar cadenas se ocupa el +
        ejemplo: let nombre= "sebastian", apellido="ochoa", nombreCom;
        nombreCom= nombre + apellido;
     */
    
    let a=5, b=10, c=15;

        console.log((3 + b) * c / a * 2);

        console.log(((a + b * c) / 5) * 2);
        
        console.log(b / a + 2 * c);
        
        console.log((a + b + c / c) * a);
        
        console.log(((3 * a) / c) + a + b + c);  
        
        console.log(a - (b + c) * a / 1);

