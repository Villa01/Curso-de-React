
import { obtenerHeroeById } from './08-imp-exp'

/* const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
        const heroe = obtenerHeroeById(2);
        //resolve(heroe);
        reject(' No se pudo encontrar el heroe ')
    }, 2000)

} );

promesa.then( (heroe) => {
    console.log(`El heroe es ${heroe.name}`)
} )
.catch ( err => console.warn(err)) */

const obtenerHeroeByIdAsync = id => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const heroe = obtenerHeroeById(id);

            if ( heroe === undefined) {
                reject(' No se pudo encontrar el heroe ');
            } else {
                resolve(heroe);
            }
            //
        }, 2000)
    
    } );
}

obtenerHeroeByIdAsync(4)
    //.then( heroe => console.log(' Heroe ', heroe))
    .then( console.log )
    //.catch( err => console.warn( err ))
    .catch( console.warn )