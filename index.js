import express from 'express';
const app = express();

app.get('/', (request, response)=>{
    response.send('Hello Melanie')
});

app.listen(8082, ()=>{
    console.log('Serveur lancé: port 8082')
});