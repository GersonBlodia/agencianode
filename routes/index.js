import express from 'express';
import { paginaDetalleViaje, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialesController.js';
const router=express.Router();//extendiendo y utilizando su router


//template enging 
  router.get('/',paginaInicio);

  //Rutas o puertos 

  router.get('/nosotros',paginaNosotros);

  router.get('/testimoniales',paginaTestimoniales);

  router.get('/viajes',paginaViajes);
//cargar un metodo de un controlador y la diferencia será la variable
  router.get('/viajes/:slug',paginaDetalleViaje);
  router.post("/testimoniales",guardarTestimonial);
  
export default router;