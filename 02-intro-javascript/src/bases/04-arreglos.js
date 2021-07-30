

// Arreglos en JS

/**
 * No se recomienda hacerlo con el constructor, a menos que se le de un valor determinado de
 * posiciones
 * const arreglo = new Array(100);
 * arreglo.push(1);  
 */

const arreglo = [1,2,3,4];
// no es recomendable usar el push, porque modifica el objeto original.
// arreglo.push(2);

let arreglo2 = [ ...arreglo, 5];
arreglo2.push(5);

/**
 * Map ejecuta lo que regrese la funcion en cada uno de los elementos de los arreglos.
 */
const arreglo3 = arreglo.map(
    function(num) {
        return num*2;
    }
);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);