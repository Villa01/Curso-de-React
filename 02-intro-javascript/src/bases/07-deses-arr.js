

const personajes = ['Goku', 'Vegeta', 'Trunks']

/* console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2]) */

// Desestructuracion de arreglos

// Para obtener la segunda posicion del arreglo, cada coma ignora un personaje
const [ , p2 ] = personajes;

console.log( p2 );


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, num ] = retornaArreglo();

console.log( letras, num )


// Tarea

const usarState = (valor) => {
    return [ valor, () => console.log(`Hola Mundo ${ valor }`)];
}

const [ nombre, darNombre ] = usarState ('Goku');

darNombre();
console.log(nombre)