
import express from 'express'; 
import router from './routes/index.js';//colocar la extension
import db from './config/db.js';

//console.log(process.env.DATABASE)
//tener una unica instancia de la aplicacion
const app=express();
const port=process.env.PORT||3000; 
//Conectar a la db 
db.authenticate()
         .then(()=>console.log("Base de datos conectada"))
         .catch(error=>console.log(error))

//Habilitar pug 
app.set('view engine','pug'); //soporta express 

//Obtener el año actual 
app.use((req,res,next)=>{  //next= la pila del midlware
      const year=new Date().getFullYear();
      res.locals.ActualYear=year;//localhst variables internas
      res.locals.nombreSitio="Agencia de Viajes";
      console.log(res.locals);
      next();//ejecuta el console y ejecuta la siguiente linea 
});
//Agregar body parser para leer los datos del formulario 
app.use(express.urlencoded({extended:true}));
//Definir la carpeta publica 

app.use(express.static('public'));
//Agregar router
app.use('/',router);//agregar todas las diferentes rutas que hemos definido

app.listen(port,()=>{
      console.log("El servidor esta funcionando en el puerto", port);
})

 