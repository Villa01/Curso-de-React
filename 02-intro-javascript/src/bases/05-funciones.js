

// Funciones en JS

// No es recomendable utilizar la funcion asi porque se puede reasignar el nombre de funcion

/*
function saludar( nombre ){
    return `Hola ${ nombre }`
} */

const saludar = function( nombre ){
    return `Hola ${ nombre }`
}

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

console.log( saludar('Erick'));
console.log( saludar2('Jose'));
console.log( saludar3('Andre'));
console.log( saludar4('Manuel'));

/* const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_papitoRico',
    }
} 

    Se puede regresar un objeto encerrandolo en parentesis
*/

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_papitoRico',
});


console.log( getUser() );

/* 
Tarea
1. Transformar en una funcion de flecha
2. Tiene que retornar un objeto implicito
function getUsuarioActivo (nombre) {
    return {
        uid: 'ASDFLJASDF',
        username : nombre ,
    }
} */

const getUsuarioActivo = nombre => ({
    uid: 'ASDFLJASDF',
    username : nombre ,
});

const usuarioActivo = getUsuarioActivo('Erick');
console.log(usuarioActivo);