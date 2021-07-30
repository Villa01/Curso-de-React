

// Desestructuración: asignacion desestructurante

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave : 'Ironman'
}
/* 
Esto es tedioso y se puede hacer mejor
console.log( persona.nombre);
console.log( persona.edad);
console.log( persona.clave); 
*/

// Extrae lo de las llaves en el objeto
const { nombre: nombre1, edad, clave } = persona;

console.log( nombre1, edad, clave )

/* const retornaPersona = usuario => {
    console.log( usuario );

    const { edad, clave, nombre } = usuario;

    console.log(edad, clave, nombre)
} */

const usarContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    //console.log( nombre, edad, rango );
    return {
        nombreClave : nombre,
        anios : edad,
        latlng: {
            lat : 123213,
            lng : 134131,
        }
    }
}

// Desestructuracion anidada: Dentro de latlng se extrae lat y lng
const { nombreClave, anios, latlng : { lat, lng}} =  usarContext( persona );


console.log( nombreClave, anios );
console.log( lat, lng )