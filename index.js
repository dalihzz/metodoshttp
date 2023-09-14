const express = require('express')

const app = express()
app.get('/', (request, response)=> {
    response.send('hola Get')
})
app.post('/', (request, response)=> {
    response.send('hola POST')
})
app.put('/', (request, response)=> {
    response.send('hola PUT')
})
app.patch('/', (request, response)=> {
    response.send('hola PATCH')
})
app.delete('/', (request, response)=> {
    response.send('hola DELETE')
})
/*
*
*
*     FUNCIONALIDAD
*
*/
//http://localhost:3000/

app.listen(3000,()=>{
    console.log('listening on port 3000')
})