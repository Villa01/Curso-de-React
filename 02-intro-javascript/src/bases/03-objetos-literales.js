

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad : 'New York',
        zip: 12121,
        lat: 13.41414,
        lng: 1212.2112,
    },
}

//console.log( { persona } );
//console.table( persona );

const persona2 = persona; // Asigna la referencia de persona 1 

const persona3 = { ...persona } // Operador spread, crea un nuevo objeto con los atributos del original
persona2.nombre = 'Peter';


console.log( persona );
console.log(persona2);
console.log(persona3);