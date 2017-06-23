

class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
		this.amigos.forEach((amigo) => {
			console.log(`Hola, mi nombre es ${this.nombre} y soy amiga de ${amigo}`)
		})
  	}
}

const tefa = new Persona("Tefa", ["Pepe", "Juan", "Pedro"])

/*

Con arrow function ya no se debe declarar el "this" así:
const _this = this, antes de invocar a la función

o también nos ahora el .bind
*/