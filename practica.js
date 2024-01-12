/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

/* function contarCaracteres(cadena="") {
    if(!cadena){ //condición de ingreso de caracteres
        console.warn("No ingresaste ninguna cadena");
    }else{
        console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`)
    }
} */
const contarCaracteres = (cadena = "") =>
    (!cadena)
    ? console.warn("No ingresaste nada")
    : console.info(`La cadena "${cadena}" tiene 
    ${cadena.length} caracteres`);
//ejecución
// contarCaracteres();
// contarCaracteres("Hola hola");


/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

const recortarTexto = (cadena="", longitud = undefined) =>
(!cadena)
    ? console.warn("No ingresaste nada")
    : (longitud === undefined)
        ? console.warn("No se indico longitud a recortar")
        : console.info(cadena.slice(0,longitud));
    
// recortarTexto("Hola a todos",4);
// recortarTexto();
// recortarTexto("Hola Hola");
// recortarTexto("", 5);

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const cadenaAArreglo = (cadena ="", separador = undefined) =>
(!cadena)
? console.warn("No ingresaste nada")
: (separador === undefined)
    ? console.warn("No se indico caracter separador")
    : console.info(cadena.split(separador));

// cadenaAArreglo("hola como te va", " ");
// cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
// cadenaAArreglo("hola como te va");
// cadenaAArreglo("", "-");

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
devolverá Hola Mundo Hola Mundo Hola Mundo. 
*/

const repetirTexto = (texto="", veces = undefined) => {
if(!texto) return console.warn("No ingresaste nada de texto");
if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");
if(veces === 0) return console.error("El número de veces no puede ser cero");
if(Math.sign(veces) === -1) return console.error("El número no puede ser negativo");

for (let i= 1; i <= veces; i++) {
    console.info(`${texto}, ${i}`);
}
}

// repetirTexto("Hola a todos!", 3);
// repetirTexto("Hola a todos!", 0);
// repetirTexto("Hola a todos!", -5)
// repetirTexto("", 2)


//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena = "") =>
(!cadena)
? console.warn("No ingresaste una cadena")
: console.info(cadena.split("").reverse().join("")); //Primero separa cada letra de la cadena, luego las invierte y luego las junta.

// invertirCadena();
// invertirCadena("Hola Mundo");
// invertirCadena("amog");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoEnCadena = (cadena ="", texto ="") => {

if(!cadena) return console.warn("No ingresaste ninguna cadena")
if(!texto) return console.warn("No ingresaste la palabra a evaluar")

let i = 0,
contador = 0;

while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !==-1){
        i++;
        contador++;
}
}
return console.info(`La palabra ${texto} se repite ${contador} veces.`);
}


// textoEnCadena();
// textoEnCadena("","mundo");
// textoEnCadena("hola mundo adios mundo");
// textoEnCadena("hola mundo adios mundo","mundo");

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra="") => {
    if (!palabra) return console.warn("Ingresa una palabra valida");
    palabra = palabra.toLocaleLowerCase();

    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ? console.info(`${palabra} es un palíndromo`)
    : console.info(`${palabra} no es un palíndromo`);
}

// palindromo();
// palindromo("Hola Mundo");
// palindromo("MeNeM");


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto ="", patron ="") =>
(!texto)
    ?console.warn("No ingresaste un texto")
    :(!patron)
        ?console.warn("No ingresaste el caracter que deseas eliminar")
        :console.info(texto.replace(new RegExp(patron,"ig"),"")); //i evita que distinga entre minuscula o mayuscula, lo elimina igual, y g no se detiene en la primer coincidencia, va a seguir buscando.
        // las "" al final es que no lo reemplace con nada.

// eliminarCaracteres();
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

/* const numeroAleatorio = () => {
    let min= 501;
    let max= 600;
    let numRandom=Math.floor(Math.random()*(max-min+1)+min);

    return console.info(numRandom);
}
numeroAleatorio(); */

const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500);
// aleatorio();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste número");

    if(typeof numero !=="number") return console.error("El valor ingresado no es un número");

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
    return (alReves===numero)
    ?console.info("Es capicúa")
    :console.info("No es capicúa");

}
// capicua();
// capicua("23");
// capicua(303);
// capicua(17.99);
// capicua(313.313);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
    if(!numero) return console.warn("No ingresaste número");

    if(typeof numero !=="number") return console.error("El valor ingresado no es un número");

    if(numero === 0) return console.error("El número no puede ser 0");

    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }
    return console.info(factorial);
}

// factorial(); //No ingresaste número.
// factorial(5); // 120.
// factorial(-4); // Error: El número no puede ser negativo.
// factorial(0); // Error: El número no puede ser cero.
// factorial('hola'); // Error: El valor ingresado no es un número.

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un Número"); //NO VACIO.

    if(typeof numero !== "number") return console.error("El valor ingresado NO es un número"); //SOLO NUMEROS.

    if(numero === 0) return console.error("el Número no puede ser 0"); //NO SER CERO.

    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo"); //NO NUMEROS NEGATIVOS.

    let divisible = false;

    for(let i = 2; i < numero; i++) {
        if(numero % i === 0){
            divisible = true; 
            break;
            }
    }

    return(divisible)
    ?console.log(`El número ${numero}, NO es primo`)
    :console.log(`El número ${numero}, SI es primo`);
}

// numeroPrimo(19);
// numeroPrimo(4);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero = undefined) => {
    
    if(numero === undefined) return console.warn("No ingresaste un Número"); //NO VACIO.

    if(typeof numero !== "number") return console.error("El valor ingresado NO es un número"); //SOLO NUMEROS.

    return(numero % 2 === 0)
    ?console.log(`${numero} es Par`)
    :console.log(`${numero} es Impar`);

};

// parImpar(28);
// parImpar(15);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirTemperatura = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");
    if(typeof grados !== "number") return console.error("El valor ingresado NO es un número");
    if(unidad === undefined) return console.warn("No indicaste la unidad a convertir");
    if(typeof unidad !== "string") return console.error("El valor ingresado NO es una unidad de medida valida");
    
    if(!["C", "F"].includes(unidad)) return console.error("Unidad no reconocida");

    if(unidad === "C") {
        return console.info(`${grados}°C = ${Math.round(grados * (9/5) + 32)}°F`);
    } else if(unidad === "F") {
        return console.info(`${grados}°F = ${Math.round((grados - 32) * (5/9))}°C`);
    }
}
// convertirTemperatura(100,"C");
// convertirTemperatura(20,"F");

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binarioDecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste ningún número");
    if(typeof numero !== "number") return console.error("El valor ingresado NO es un número");
    if(base === undefined) return console.warn("No indicastes la base del sistema numérico");
    if(typeof base !== "number") return console.error("El valor de la base NO es un número");

    if(base===2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }else if(base===10) {
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    }else {
        return console.error("El tipo de base a convertir NO es válido");
    }
}
// binarioDecimal(16,2);
// binarioDecimal(4,10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if(monto === undefined) return console.warn("Ingresa el monto a descontar");
    if(monto===0) return console.error("El monto no puede ser 0");
    if(Math.sign(monto)===-1) return console.error("El monto no puede ser negativo");
    if(typeof descuento !=="number") return console.error("El valor debe ser un número")
    if(Math.sign(descuento === -1)) return console.error("El descuento no puede ser negativo")

    return console.info(`$${monto} - ${descuento} % = $${monto - ((monto * descuento) / 100)}`);

}
// aplicarDescuento(1000, 20);


//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha");

    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000*60*60*24*365
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

        return(Math.sign(aniosHumanos)===-1)
        ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos)===1)
            ? console.log(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
            : console.log(`Estamos en el año actual: ${fecha.getFullYear()}`)
}

// calcularAnios();
// calcularAnios({});
// calcularAnios(false);
// calcularAnios(new Date());
// calcularAnios(new Date(1986,8,20));
// calcularAnios(new Date(2086,8,20));

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const vocalConsonante = (cadena = "") => {
    if(!cadena) return console.warn("Ingrese una cadena");
    if (typeof cadena !== "string" || /\d/.test(cadena)) { // /\d/.test(cadena) se utiliza para comprobar si la cadena cadena contiene al menos un dígito (0 al 9). Comprobando entre true o false.
        console.error("El valor ingresado NO es una cadena de texto válida o contiene números");
        return;
}
    
    const vocals = ['a', 'e', 'i', 'o', 'u'];

    let vocales = 0;
    let consonantes = 0;

    for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i].toLowerCase(); //hace que la cadena ingresada se convierta en minuscula, por si se ingreso mayusculas.
        if (/[a-z]/.test(char)) { // Comprueba si el carácter es una letra
            if (vocals.includes(char)) {
                vocales++;
            } else {
                consonantes++;
            }
        }
    }

    return `La cadena tiene ${consonantes} consonantes y ${vocales} vocales.`;
}
// vocalConsonante();
// console.log(vocalConsonante('hola'));
// console.log(vocalConsonante('holaxd8'));


//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function esNombreValido(texto) {
    // Usamos una expresión regular para verificar si el texto contiene solo letras y espacios
    // ^ indica que la coincidencia debe comenzar desde el principio del texto
    // [A-Za-z ]+ significa una o más letras mayúsculas, minúsculas o espacios
    // $ indica que la coincidencia debe llegar hasta el final del texto
    const expresionRegular = /^[A-Za-z ]+$/;
    
    // Comprobamos si el texto coincide con la expresión regular
    return expresionRegular.test(texto);
}
  // Ejemplo de uso:
//   console.log(esNombreValido("Dario Manuel")); // Devolverá true
//   console.log(esNombreValido("Dario Manuel888")); // Devolverá false

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function emailValido(cadena) {

    // El formato básico de un correo electrónico es algo@algo.dominio
    // La parte "algo" puede tener entre uno y cuarenta caracteres
    // Y los dominios pueden tener entre dos y quince caracteres
    // A continuación se muestra la expresión regular para validar cualquier correo electronico.
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
        // Comprobar si el texto coincide con la expresión regular
        return regexEmail.test(cadena);
}
// Ejemplo de uso:
// console.log(emailValido("darioperez@gmail.com")); // Devuelve true
// console.log(emailValido("darioperezgmail.com")); // Devuelve false

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrado = (array = undefined) => {
    if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    
    for (let num of array) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    const nuevoArray = array.map(elem => elem * elem);

    return console.info(`Arreglo original: ${array},\n Arreglo al cuadrado: ${nuevoArray}`);
}

// devolverCuadrado([2,3,4]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (array = undefined) => {
    if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    
    for (let num of array) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    console.info(`Arreglo original: ${array}\n Valor mayor: ${Math.max(...array)},\n Valor Menor: ${Math.min(...array)}`);
}
// arrayMinMax();
// arrayMinMax(false);
// arrayMinMax({});
// arrayMinMax('hola');
// arrayMinMax([1, 5, 8, -7, 9]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (array = undefined) => {

    if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    
    for (let num of array) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }
    return console.info({
        pares: array.filter(num => num % 2 == 0),
        impares: array.filter(num => num % 2 != 0)
    });
}

// separarParesImpares();
// separarParesImpares([]);
// separarParesImpares(['a', 'b']);
// separarParesImpares([1, 2, 3, 4, 5]);


//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const arrayAscDesc = (array = undefined) => {
    if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    for (let num of array) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
        }
    
    return console.info({
        array,
        asc: array.map(elem => elem).sort(),
        desc: array.map(elem => elem).sort().reverse()
    })
}

// arrayAscDesc();
// arrayAscDesc([]);
// arrayAscDesc(['a', 'b']);
// arrayAscDesc([7, 5, 7, 8, 6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (array = undefined) => {
    if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    if(array.length === 1) return console.warn("El arreglo tiene un solo elemento");

    // return console.info ({
    //     original: array,
    //     sin_duplicados: array.filter((value, index, self) => self.indexOf(value) === index)
    // })

    return console.info({
        original: array,
        sin_duplicados: [...new Set(array)]
    })
}

// quitarDuplicados();
// quitarDuplicados({});
// quitarDuplicados([]);
// quitarDuplicados(['hola']);
// quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true, false]);


//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (array = undefined) => {

if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
if(array.length === 0) return console.error("El arreglo esta vacío");

for (let num of array) {
    if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.info(
                    //acumulador, elem. actual, indice actual, array sobre el cual se esta iterando.
        array.reduce((total, num, index, array) => {
            total += num;
            if(index === array.length - 1) {
                return `El promedio de ${array.join(" + ")} es ${total / array.length}`
            }else {
                return total;
            }
            
        },)
        
    )
}
// promedio();
// promedio({});
// promedio([]);
// promedio([5,6,7,true,9]);
// promedio([3,4,5,6,7,8,9,10]);

//27) Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

// class Pelicula {
//     constructor(id, titulo, director, estreno, pais, generos, calificacion){

//         this.titulo = titulo;
//         this.director = director;
//         this.estreno = estreno;
//         this.pais = pais;
//         this.generos = generos;
//         this.calificacion = calificacion;
//         this.id = id;

//         this.validarIMDB(id);
//         this.validarTitulo(titulo);
//         this.validarDirector(director);
//         this.validarEstreno(estreno);
//         this.validarPais(pais);
//         this.validarGeneros(generos);
//         this.validarCalificacion(calificacion);
//     }


//     static get listaGeneros(){ //ATRIBUTO ESTATICO
//         return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
//     }

//     static generosAceptados(){ //METODO ESTATICO
//         return console.info(`Los generos aceptados son ${Pelicula.listaGeneros.join(", ")}`)
//     }

// //METODO
//     validarCadena(propiedad, valor) {
//         if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
//         if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

//         return true;
//     }
// //METODO
//     validarLongitudCadena(propiedad, valor, longitud) {
//         if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);

//         return true;
//     }

// //METODO
//     validarArreglo(propiedad, valor) {
//         if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);

//         if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

//         if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

//         for(let cadena of valor) {
//             if(typeof cadena !== 'string') return console.error(`El valor "${cadena}"ingresado, NO es una cadena de texto`);
//         }
//         return true;
//     }

//     validarIMDB(id) {
//         if(this.validarCadena("IMDB id", id)) {
//             if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
//                 return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, y los 7 restantes números.`);
//             }
//         }
// }

//     validarTitulo(titulo) {
//     if(this.validarCadena("Titulo", titulo)) {
//         this.validarLongitudCadena("Titulo", titulo, 100);
//     }
// }

//     validarDirector(director) {
//     if(this.validarCadena("Director", director)) {
//         this.validarLongitudCadena("Director", director, 50);
//     }
// }
// //METODO
//     validarNumero(propiedad, valor) {
//     if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
//         if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);

//     return true;
// }

//     validarEstreno(estreno) {
//     if(this.validarNumero("Año de estreno", estreno)) {
//         if(!(/^([0-9]){4}$/.test(estreno))) {
//             return console.error(`Año de estreno "${estreno}" no es válido, debe ser un número de 4 dígitos`);
//         }
//     }
// }
//     validarPais(pais) {
//         this.validarArreglo("Pais", pais);
//     }

//     validarGeneros(generos){
//         if(this.validarArreglo("Generos", generos)){
//             for(let genero of generos){
//                 console.log(genero, Pelicula.listaGeneros.includes(genero)); //SI ESTA DENTRO DE LA LISTA DA TRUE, SINO FALSE.
//                 if(!Pelicula.listaGeneros.includes(genero)){ //aca elije respuesta según TRUE o FALSE.
//                     console.error(`Genero(s) incorrecto(s) "${generos.join(", ")}"`);
//                     Pelicula.generosAceptados();
//                 }
//             }

//         }
//     }

//     validarCalificacion(calificacion) {
//         if(this.validarNumero("Calificacion", calificacion))
//             return (calificacion < 0 || calificacion > 10)
//             ? console.error("La calificación tiene que estar entre 0 y 10")
//             : this.calificacion = calificacion.toFixed(1);
//     }

//     fichaTecnica() {
//         console.info(`Ficha Técnica\nTítulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPais:"${this.pais.join("-")}"\nGeneros:"${this.generos.join(",")}"\nClasificación:"${this.calificacion}"\nIMDB id:"${this.id}"`);
//     }

// }

// const peli = new Pelicula(
// {   id: "tt1234567",
//     titulo: "Pelicula de prueba",
//     director: "Nombre del Director",
//     estreno: 2021,
//     pais: ["Argentina"],
//     generos: ["Comedy"],
//     calificacion: 8.5
// });

// peli.fichaTecnica();

// //  - Apartir de un arreglo con la información de 3 películas genera 3 
// //     instancias de la clase de forma automatizada e imprime la ficha técnica 
// //     de cada película.

// const misPelis = [
//     {
//         id: 'tt1237899',
//         titulo: 'Pelicula 1',
//         director: 'Director 1',
//         estreno: 2021,
//         pais: ['Argentina'],
//         generos: ['Suspense', 'Accion'],
//         calificacion: 9.5
//     },
//     {
//         id: 'tt1237779',
//         titulo: 'Pelicula 2',
//         director: 'Director 2',
//         estreno: 2020,
//         pais: ['USA'],
//         generos: ['Accion', 'War'],
//         calificacion: 7.5
//     },
//     {
//         id: 'tt1237879',
//         titulo: 'Pelicula 3',
//         director: 'Director 3',
//         estreno: 2017,
//         pais: ['España'],
//         generos: ['Drama', 'Accion'],
//         calificacion: 8.5
//     }
// ];

// misPelis.forEach(elem => new Pelicula(elem).fichaTecnica());

//EJERCICIO POKEMON TodoCode

/* //Array para nombres
let nombresPkm = ["Charmander", "Pikachu", "Bulbasur", "Squirtle"];

//Matriz para sus habilidades

let habilidades = [
    [80,75,90], //Charmander
    [65,55,60], //Pikachu
    [80,70,65], //Bulbasur
    [85,90,70] //Squirtle
];

function calcularPromHab(habilidades) {
    let promedios = [];

    for(let i=0; i<habilidades.length; i++) {
        let fila = habilidades[i];
        //acumulador = total y habilidad = elemento actual, 0 es el valor inicial.
        let suma = fila.reduce((total, habilidad) => total+habilidad, 0);

        promedios[i] = suma/fila.length;
    }
    return promedios;
}

function evaluarAptitud (nombresPkm, promedios) {

    for(let i = 0; i < promedios.length; i++) {
        if( promedios[i] >=70 ) {
            console.log("El Pokemon " + nombresPkm[i] + 
            " supera el promedio con: " + promedios[i]);
        }
        else {
            console.log("El Pokemon " + nombresPkm[i] + 
            " no supera el promedio con: " + promedios[i]);
        }
    }
}

let promedios = calcularPromHab(habilidades);
evaluarAptitud(nombresPkm,habilidades);




// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
//Ejemplo: miFuncion("Hola Mundo") devolverá 10.

const contarStr = (cadena = "") => 
(!cadena)
? console.warn("No ingresaste ninguna cadena")
: console.log(`La cadena tiene ${cadena.length} caracteres`);

contarStr("");
contarStr("Hola Mundo!");

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
// ejemplo: miFuncion("Hola Mundo", 4) devolverá "Hola".

const cortarCadena = (cadena = "", longitud = undefined) =>
(!cadena)
? console.warn("No ingresaste ninguna cadena")
: console.log(cadena.slice(0, longitud));

cortarCadena("Hola a todos", 4);

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.
ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const separar = (cadena = "", separador = undefined) =>
(!cadena)
? console.warn("No ingresaste ninguna cadena")
: console.log(cadena.split(separador));

separar("hola que tal", " ") 

/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
devolverá Hola Mundo Hola Mundo Hola Mundo. 

const repetirCadena = (texto="", veces = undefined) => {
    if(!texto) return console.warn("No ingresaste nada de texto");
    if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");
    if(veces === 0) return console.error("El número de veces no puede ser cero");
    if(Math.sign(veces) === -1) return console.error("El número no puede ser negativo");
    
    for (let i= 1; i <= veces; i++) {
        console.info(`${texto}, ${i}`);
    }
    }

    repetirCadena("Hola a todos!", 3);
    repetirCadena("Hola a todos!", 0);
    repetirCadena("Hola a todos!", -5)
    repetirCadena("", 2)

    //TAMBIEN SE PUEDE HACER CON repeat()
    let cadena = "hola gente "
    let cadenaDos = cadena.repeat(3)
    console.log(cadenaDos);


    // 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
    const palabraAlrevez = (cadena = "") =>{ 
    if(!cadena) return console.warn("Debe ingresar una cadena");
    if(typeof cadena === "number") return console.warn("Solo se aceptan letras");
    else
    console.log(cadena.split("").reverse().join(""));
    
}
    palabraAlrevez(2);
    palabraAlrevez("Hola Mundo");

    // 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    const contarPalabra = (cadena = "", palabra = "") =>{
    if(!cadena) return console.warn("No ingresaste una cadena");
    if(typeof cadena !== "string") return console.error("El valor ingresado no es una cadena de texto");
    if(!palabra) return console.warn("No ingresaste una palabra");
    if(typeof palabra !== "string") return console.error("El valor ingresado no es una palabra");
    
    const palabras = cadena.toLowerCase().split(' ');
    const contador = palabras.filter(pal => pal === palabra.toLowerCase()).length;

    return console.info(`La palabra ${palabra} se repite ${contador} veces`);
};

contarPalabra("hola mundo adios mundo", "mundo");

    // 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
    const palindromos = (palabra = "") => {
    if(!palabra) return console.warn("No ingresaste palabra a analizar");
    if(typeof palabra !== "string") return console.error("El valor ingresado no es una cadena de texto");
    palabra = palabra.toLocaleLowerCase();
    let palabra2 = palabra.split("").reverse().join("");
    return(palabra === palabra2)
    ?console.info("La palabra " + palabra + " es palindromo")
    :console.log("No es palindromo")
}
palindromos("Salas");
palindromos(2);
palindromos("agua");

    // 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
    const eliminarPatron = (cadena = "", patron = "") =>
    (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :(!patron)
        ?console.warn("No ingresaste un patrón a eliminar")
        :console.info(cadena.replace(new RegExp(patron, "gi"), ""));

eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

/*
    function findFirstRepeated(gifts) {
        const mapa = {}

        for(const numero of gifts) {
            if(mapa[numero]) return numero
            mapa[numero] = true
        }
        return -1;
    }

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleat = () =>
{
    min = 501;
    max = 600;
    return Math.round(Math.random()* (max - min) + min);
}
aleat();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicuas = (numero = 0) => {

    if(!numero) return console.warn("No ingresaste número");
    if(typeof numero !== "number" || isNaN(numero)) return console.warn("Solo se aceptan caracteres numericos");
    
    numero = numero.toString();
    let numeroAlrevez = numero.split("").reverse().join("");

    return (numeroAlrevez === numero)
}

// capicuas(17071);
// capicuas(2002);
// capicuas("asd");
// capicuas(235);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factoriales = (numero = 0) => {
if(!numero) return console.warn("No ingresaste número");
    if(typeof numero !== "number" || isNaN(numero)) return console.warn("Solo se aceptan caracteres numericos");
    if(numero < 0) return console.error("No existe factorial de números negativos");
    if(numero === 0 || numero === 1) return 1;

    contador = 1;

    for(let i = 1; i <= numero; i++){
        contador *= i;
    }
    return contador;

}

// factoriales();
// factoriales("5");
// factoriales(-1);
// factoriales(5);

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste número");
    if(typeof numero !== "number" || isNaN(numero)) return console.warn("Solo se aceptan caracteres numericos");
    if(numero === 0 || numero === 1 || numero === 4) return false;

    let divisible = false;
    for(let i = 2; i < numero; i++){
    
        if(numero % i === 0){
        divisible = true;
    break;
}
}
return !divisible;
}
esPrimo(7);
esPrimo(8);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const paresImpares = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste número");
    if(typeof numero !== "number" || isNaN(numero)) return console.warn("Solo se aceptan caracteres numericos");

    return (numero % 2 === 0) ? true : false;
}

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const CelsiusFahrenheit = (grados = undefined, medida = undefined) => {
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");
    if(typeof grados !== "number") return console.error("El valor ingresado NO es un número");
    if(medida === undefined) return console.warn("No indicaste la unidad a convertir");
    if(typeof medida !== "string") return console.error("El valor ingresado NO es una unidad de medida valida");
    
    if(!["C", "F"].includes(medida)) return console.error("Unidad no reconocida");

    if (medida === "C") {
        return console.info(`${grados} Celsius = ${Math.round((grados * 9/5) + 32)} Fahrenheit`);
    }
    else if (medida === "F") {
        return console.info(`${grados} Fahrenheit = ${Math.round((grados - 32) * 5/9)} Celsius`);
    }
}

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binDecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste número");
    if(base === undefined) return console.warn("No ingresaste una base");
    if(typeof numero !== "number") return console.error("El valor ingresado NO es un número");
    if(typeof base !== "number") return console.error("El valor ingresado NO es un número");


if(base === 2) {
    console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
}
    else if(base === 10){
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    }
    else {
        return console.error("El tipo de base a convertir NO es válido");
    }
};
binDecimal(16,2);
binDecimal(4,10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const calcularDescuento = (monto = undefined, descuento = undefined) => {
    if(monto === undefined) return console.warn("No ingresaste un monto");
    if(descuento === undefined) return console.warn("No ingresaste un descuento");
    if(typeof monto !== "number") return console.error("El valor ingresado NO es un número");
    if(typeof descuento !== "number") return console.error("El valor ingresado NO es un número");

    calculo = monto - ((monto * descuento) / 100);

    return console.info(`$${monto} con ${descuento}% de descuento es = $${calculo}`)
}
calcularDescuento(1000,20);

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

let fechaNacido = new Date('2016/03/19');
let actual = new Date()

let calculaAnios = actual.getTime() - fechaNacido.getTime()
console.log(Math.round(calculaAnios/ (1000*60*60*24*360)));

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const cuentaVocCons = (cadena = "") => {
    if(!cadena) return console.warn("Ingrese una cadena");
    if (typeof cadena !== "string" || /\d/.test(cadena)) { // /\d/.test(cadena) se utiliza para comprobar si la cadena cadena contiene al menos un dígito (0 al 9). Comprobando entre true o false.
        console.error("El valor ingresado NO es una cadena de texto válida o contiene números");
        return;
}

const vocals = ["a", "e", "i", "o", "u"];

let vocales = 0;
let consonantes = 0;

cadena = cadena.toLowerCase();

for (let letra of cadena) {
    if (vocals.includes(letra)) vocales++;
    else 
        consonantes++;
    }
    return `El texto ${cadena} tiene ${consonantes} consonantes y ${vocales} vocales`;

};
cuentaVocCons("Hola como estas?");
cuentaVocCons();
cuentaVocCons(123);

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
//-----------------------------------------------
const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn("Ingrese un nombre");
    if (typeof nombre !== "string") return console.error("El valor ingresado NO es una cadena de texto válida");

    const expresionRegular = /^[A-Za-z ]+$/;
    
    return expresionRegular.test(nombre);
}
validarNombre("Juan David Cardenas"); // true
validarNombre("Juan_David Cardenas"); // false

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
//-------------------------------------------
const validarEmail = (email = "") => {
    if(!email) return console.warn("Ingrese un email");
    if (typeof email !== "string") return console.error("El valor ingresado NO es una cadena de texto válida");

    const regExpParaEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//Se pueden usar otras expresiones, mas complejas, pero para el caso es suficiente.
    return regExpParaEmail.test(email);
}
validarEmail("jonmircha@gmail.com"); // true
validarEmail("jonmircha.com"); // false

//------------------ Inicio Closures -------------------------
const miContador = (function() {
    
    let _contador = 0;
    
    function incrementar(){

        return _contador++;
    }

    function decrementar() {
        return _contador--;
    }

    function valor() {
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})();

miContador.valor();
miContador.incrementar();
miContador.valor();
miContador.incrementar()
miContador.decrementar();
miContador.valor();

//------------------ Fin Closures -------------------------

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayCuadrado = (arrayEntrada = undefined) => {
    if(arrayEntrada === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(arrayEntrada instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(arrayEntrada.length === 0) return console.error("El arreglo esta vacío");

     // Verificar que todos los elementos del arrayEntrada sean de tipo numérico.
    if(!arrayEntrada.every(elemento => typeof elemento === "number")) {
        return console.error("El array debe contener solo valores numéricos");
    }

    return arrayEntrada.map( elemento => elemento * elemento );

}
arrayCuadrado([9, 4, 5]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

//1) funcion que reciba array = undefined
//2) luego necesito dos contadores, que cambien si encuentra un numero mas alto o mas bajo.
//3) ciclo for para recorrer el array, y que vaya modificando los dos contadores siempre y cuando cumpla condicion
//de mayor o menor.
//4) return del array armado.

const arrayMinimoMaximo = (array = undefined) => {
    if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");

    let max = array[0]; // inicia en la posicion 1 del array (index 0)
    let min = array[0]; // idem anterior.

    for (let i = 1; i < array.length; i++) { //comienza a iterar desde posicion 2 del array (index 1).
        if (typeof array[i] !== "number") {
            console.error(`El valor "${array[i]}" ingresado, NO es un número`);
            return;
        }

        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }
    }

    console.info(`Arreglo original: ${array}\n Valor mayor: ${max},\n Valor Menor: ${min}`);
}
arrayMinimoMaximo([3,67,-89,45,23,12,45,90,-23,-12,45,90,12,45,90,1]);

// OTRA FORMA DE HACERLO, CON Spread Operators: 

/*

for (let num of array) {
    if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
}

console.info(`Arreglo original: ${array}\n Valor mayor: ${Math.max(...array)},\n Valor Menor: ${Math.min(...array)}`);



//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separaParesImpares = (array = undefined) => {

    if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    
    for (let num of array) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }
    return console.info({
        pares: array.filter(num => num % 2 == 0),
        impares: array.filter(num => num % 2 != 0)
    });
}
separaParesImpares([1,2,3,4,5,6,7,8,9]);

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const arrAscDesc = (array = undefined) => {
    if(array === undefined) return console.warn("No ingresaste ninguna arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    for (let num of array) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
        }
    
        //En el método sort(), se pasa una función de comparación que toma dos elementos a y b. La función de comparación devuelve un número negativo si a debe estar antes de b, un número positivo si a debe estar después de b, y cero si son iguales. Al restar b de a (a - b), se asegura que los elementos se comparen y ordenen como números, resultando en un orden ascendente.
        //Para obtener un orden descendente, basta con invertir el signo de la resta.

        /*
        Orden ascendente (a - b):

        * Cuando a es menor que b, a - b produce un número negativo, por lo que los números más pequeños preceden a los números más grandes en el resultado ordenado.
        
        Orden descendente (b - a):

        * Cuando b es mayor que a, b - a produce un número positivo, por lo que los números más grandes preceden a los números más pequeños en el resultado ordenado.
        
        const ascending = [...array].sort((a, b) => a - b);
        const descending = [...array].sort((a, b) => b - a);
    
        return console.info({
            array,
            ascendente: ascending,
            descendente: descending
        });
}
arrAscDesc([7, 5,7,8,6,1,15,23,27,2,3]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (array = undefined) => {
    if (array === undefined) return console.warn("No ingresaste un arreglo");
    if (!(array instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    if(array.length === 1) return console.warn("El arreglo tiene un solo elemento");


    //Usando Set(), se creara una instancia de valores únicos,
    //implícitamente al usar esta instancia borrara los duplicados.
    return console.info({ 
        array_original: array,
        array_limpio: [...new Set(array)]});

}
eliminarDuplicados();
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promArray = (array = undefined) => {

    if(array === undefined) return console.warn("No ingresaste arreglo");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
    if(array.length === 0) return console.error("El arreglo esta vacío");
    
    for (let numero of array) {
        if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);
    }

    return console.info({
        promedio: array.reduce((total, numero) => total + numero, 0) / array.length
        }
    );
}
promArray();
promArray([]);
promArray([1,2,3,4,5]); // 3 */

//27) Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números. cadena.length == 9 && 0 y 1 letras y resto numeros.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
    constructor(id, titulo, director, estreno, pais, genero, calificacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(genero);
        this.validarCalificacion(calificacion)
    }
     //ATRIBUTO ESTATICO
    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
//METODO ESTATICO

    static generosAceptados(){
        return console.info(`Los generos aceptados son ${Pelicula.listaGeneros.join(", ")}`)
    }
    //METODOS

    validarCadena(propiedad, valor) {
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
            if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);

            return true;
            }

    validarArreglo(propiedad, valor) {
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);

        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

        for(let cadena of valor) {
            if(typeof cadena !== 'string') return console.error(`El valor "${cadena}"ingresado, NO es una cadena de texto`);
        }
        return true;
    }

    validarIMDB(id) {
        if(this.validarCadena("IMDB id", id)) {
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, y los 7 restantes números.`);
            }
        }
}

    validarTitulo(titulo) {
    if(this.validarCadena("Titulo", titulo)) {
        this.validarLongitudCadena("Titulo", titulo, 100);
    }
}

validarDirector(director) {
    if(this.validarCadena("Director", director)) {
        this.validarLongitudCadena("Director", director, 50);
    }
}

    validarNumero(propiedad, valor) {
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);

    return true;
}

    validarEstreno(estreno) {
    if(this.validarNumero("Año de estreno", estreno)) {
        if(!(/^([0-9]){4}$/.test(estreno))) {
            return console.error(`Año de estreno "${estreno}" no es válido, debe ser un número de 4 dígitos`);
        }
    }
}

    validarPais(pais) {
        this.validarArreglo("Pais", pais);
    }

    validarGeneros(generos) {
        if (this.validarArreglo("Generos", generos)) {
            for (let genero of generos) {
                console.log(genero, Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Género incorrecto "${genero}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }
    
    validarCalificacion(calificacion) {
        if(this.validarNumero("Calificacion", calificacion))
            return (calificacion < 0 || calificacion > 10)
            ? console.error("La calificación tiene que estar entre 0 y 10")
            : this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica() {
        if (this.pais && this.pais.length > 0 && this.genero) {
        console.info(`
            Ficha Técnica
            Título: "${this.titulo}"
            Director: "${this.director}"
            Año: "${this.estreno}"
            País: "${this.pais.join("-")}"
            Géneros: "${this.genero.join(",")}"
            Clasificación: "${this.calificacion}"
            IMDB id: "${this.id}"
        `);
        } else {
        console.error("Error al mostrar la ficha técnica. Datos incompletos.");
        }
    }
    
    

}

//Pelicula.generosAceptados();

const misPelis = [
    {
        id: "tt1237899",
        titulo: "Pelicula 1",
        director: "Director 1",
        estreno: 2021,
        pais: ["Argentina"],
        generos: ["Suspense", "Accion"],
        calificacion: 9.5
    },
    {
        id: 'tt1237779',
        titulo: 'Pelicula 2',
        director: 'Director 2',
        estreno: 2020,
        pais: ['USA'],
        generos: ['Accion', 'War'],
        calificacion: 7.5
    },
    {
        id: 'tt1237879',
        titulo: 'Pelicula 3',
        director: 'Director 3',
        estreno: 2017,
        pais: ['España'],
        generos: ['Drama', 'Accion'],
        calificacion: 8.5
    }
];

console.log("Contenido de misPelis:", misPelis);

const misPeliculas = misPelis.map(peli => {
    if (
        peli.id &&
        peli.titulo &&
        peli.director &&
        peli.estreno &&
        peli.pais &&
        peli.genero &&
        peli.calificacion
    ) {
        return new Pelicula(
            peli.id,
            peli.titulo,
            peli.director,
            peli.estreno,
            peli.pais,
            peli.genero,
            peli.calificacion
        );
    } else {
        return null;
    }
});

const peliculasValidas = misPeliculas.filter(peli => peli !== null);

peliculasValidas.forEach(peli => peli.fichaTecnica());


const peli = new Pelicula(
    "tt1234567",
    "Pelicula de prueba",
    "Nombre del Director",
    2021,
    ["Argentina"],
    ["Comedy"],
    8.5
);

peli.fichaTecnica();
