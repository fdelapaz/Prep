// En estas primeras 6 preguntas, reemplaza `null` por la respuesta correcta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Felipe';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 46;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando se te pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
    var diferencia = x - y;
    return diferencia;
}
      resta(20, 15);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y){
    return true;
  }
  return false;

}
    sonIguales(10, 9);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length){
    return true;
  }
  return false;

}
    tienenMismaLongitud('papa', 'mama');

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    return true;
  }
    return false;
}
    menosQueNoventa(88);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2==1) {
    return true;
  } 
    return false;

}
    esImpar(10);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // Ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = num ** 2;
    return cuadrado;

} elevarAlCuadrado(2);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
   var result = num ** exponent;
   return result;

} elevar(3, 3);

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

    if (Math.sign(numero) === 1){
      return "Es positivo";
    }else if (Math.sign(numero) === -1){
      return "Es negativo";
    }
    return false;

} esPositivo(-3);

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nom = nombre;
  var ape = apellido;
  return nom + " " + ape;

} combinarNombres('Felipe', 'De la Paz');

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  // Tu código:
  var perimetro = lado * 4;
  return perimetro;
} retornarPerimetro(5);

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  // Tu código:
  var dolar = euro * 1.2;
  return dolar;
  
} deEuroAdolar(100);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Tu código:
  if (letra.length !== 1){
    return "Dato incorrecto";
} 
if (letra === 'a'){
  return "Es vocal";
}else if (letra === 'e'){
  return "Es vocal";
}else if (letra === 'i'){
  return "Es vocal";
}else if (letra === 'o'){
  return "Es vocal";
}else if (letra === 'u'){
  return "Es vocal";
}
return 'Es consonante';

}
esVocal('o');

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  }else if (y > x) {
    return y;
  }else if (x === y){
    return x || y;
  }

} obtenerMayor(10, 9);

/*
Para implementar la siguiente función vamos a utilizar una estructura de control de flujo nueva, 
llamada switch, si no estás familiarizado con esta estructura, es un buen escenario para hacerle 
una visita al mejor amigo del programador, INTERNET! 
En la carrera del desarrollador constantemente es necesario recurrir a los recursos que nos 
proporciona la web (Google, YouTube, MDN, Stack Overflow, y muchos más) en búsqueda de las 
herramientas necesarias para resolver los distintos problemas que nos enfrentamos, por lo que 
aprender a realizar estas búsquedas en internet es uno de los skill más importantes que puedes 
adquirir!
En tu buscador basta con simplemente escribir "switch Javascript" y listo. Éxitos!
*/
function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  // Tu código:
  switch (color) {
    case 'blue':
      return "This is blue";
      break;
      case 'red':
        return "This is red";
        break;
      case 'green':
        return "This is green";
        break;
      case 'orange':
        return "This is orange";
  } return "Color not found";

} colors('blue');

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10) {
    return true;
  }else if (numero === 5){
    return true;
  } return false;

} esDiezOCinco(10);

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20){
    return true;
  } return false;

} estaEnRango(25);

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
   

} esPrimo(7);

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Pueden usar un while o un bucle do ... while (Investigarlo si quieren hacerlo de la segunda forma)
  // Tu código:
  do {
    var i = i + 5;
  }

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  resta,
  esImpar,
  elevarAlCuadrado,
  elevar,
  esPositivo,
  combinarNombres,
  retornarPerimetro,
  deEuroAdolar,
  esVocal,
  obtenerMayor,
  colors,
  esDiezOCinco,
  estaEnRango,
  esPrimo,
  doWhile
};
