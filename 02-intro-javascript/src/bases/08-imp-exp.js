//import { heroes } from './data/heroes'
//import heroes, { owners } from '../data/heroes'
import heroes from '../data/heroes'

const obtenerHeroeById = id => heroes.find( heroe => heroe.id === id);


/* console.log( owners )
console.log( obtenerHeroeById(3)); */

const obtenerHeroesByOwner = owner => heroes.filter( heroe => heroe.owner === owner);


/* console.log( obtenerHeroesByOwner('DC')); */

export  {
    obtenerHeroeById,
    obtenerHeroesByOwner
}