import express from 'express';
const app = express();
const port = 3000;


app
   .get('/employees', (req,res)=> res.send('obteniendo empleados'))
   .post('/employees', (req,res)=> res.send('creando empleados'))
   .put('/employees', (req,res)=> res.send('actualizando empleados'))
   .delete('/employees', (req,res)=> res.send('eliminando empleados'))

app.listen(port, console.log(`Server Running in: http://localhost:${port}`))