import { Testimonial } from "../models/Testimoniales.js";
import { Viaje } from "../models/Viaje.js";
const paginaInicio= async (req,res)=>{
    const promiseDB=[];
    promiseDB.push(Viaje.findAll({limit:3}));
    promiseDB.push(Testimonial.findAll({limit:3}));
    try {
        //async-await lboque la ejecucion de codigo hasta que tal linea finalice
       const resultado= await Promise.all(promiseDB);
        res.render("inicio",{
            pagina: 'Inicio',
            clase: "home",
            viajes:resultado[0],
            testimoniales:resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
   
  };
const paginaNosotros=(req,res)=>{
    //Consultar Bd 

       res.render('nosotros',{
          pagina:'Nosotros'
       })
}
const paginaViajes=async (req,res)=>{
    //consultar BD 
   const viajes=  await Viaje.findAll();
   //console.log(viajes)
          res.render('viajes',{
             pagina:'Proximos Viajes',
             viajes,
          })
}
const paginaTestimoniales=async (req,res)=>{
    try {
        const testimoniales= await Testimonial.findAll();
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
         });
    } catch (error) {
        console.log(error)
    }
  
}
//muestra un viaje por su slug
const paginaDetalleViaje=async(req,res)=>{
    //console.log(req.params.viaje)
    const {slug} = req.params; 
    try {
        const viaje= await Viaje.findOne({
            where:{slug}
        })
       res.render('viaje',{
           pagina:"Informacion Viaje",
           viaje
       })
     } catch (error) {
        console.log(error)
     }
}
  export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
  }