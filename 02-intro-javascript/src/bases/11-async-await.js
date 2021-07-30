

/*
Usando promesas 
const imagenPromesa = () => new Promise( resolve => resolve('http//asdfsd.com'));
imagenPromesa().then(console.log)
*/


// Con el async 
const imagenAsync = async() => {
    try {
        const apiKey = '1sOczJbpZm7FRqAAksftOfvATEf09UZ2';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
}

imagenAsync()




/* 
const apiKey = '1sOczJbpZm7FRqAAksftOfvATEf09UZ2';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn) */