/* 

	CLOSURES: funciones que recuerdan el scope en el que fueron creadas

	EJEMPLO 1 -> Saludar a los miembros de una familia

*/

// lo que haría uno normalmente
function saludarGomez(nombre){
	console.log(`Hola ${nombre} Gomez`)
}
saludarGomez("Sofía")

// ahora, una funcíón para saludar a ALGUNA familia
function saludarFamilia(apellido){ 
	return function saludarMiembroFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarRestrepo = saludarFamilia("Restrepo")
saludarRestrepo("Laura")

const saludarMejía = saludarFamilia("Mejía")
saludarMejía("Mariana")

/* 
 CLOSURE: devolver una función que se va a llamar más adelante
 pero que está accediendo a variables que están en el scope
 de la función más grande (de afuera)

 INNER FUNCTION = función de adentro -> saludarMiembroFamilia
 OUTER FUNCTION = función de afuera -> saludarFamilia

 La función interna puede acceder a las variables que estén
 dentro de la función externa y RECUERDAN las variables
 y los valores que tenían cuando fueron llamadas
*/


/*
	EJEMPLO 2 -> Hacer un prefijo para una palabra

*/

function makePrefixer(prefijo){ // RECORDAR: Hoisting, scope
	return function adicionarPrefijo(palabra){
		console.log(`${prefijo}${palabra}`) // muestra rebueno
}

const prefijoRe = makePrefixer("re")
prefijoRe("bueno")

/*
	EJEMPLO 3 -> Sumador 

*/

function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
console.log(suma5(2));  // muestra 7

/*

	Para tener en cuenta:
	
	-	El alcance de una variable es el de la función en la cual 
		fue declarada (function-level scope).
	-	El Hoisting es cuando la declaración de la variable 
		se mueve al inicio del contexto de ejecución

*/