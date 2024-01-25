import { Testimonial } from "../models/Testimoniales.js";
const guardarTestimonial=async (req,res)=>{
     //Validar formulario 
     const { nombre,correo,mensaje} =req.body;
     const errores=[];
     if(nombre.trim()===""){
           errores.push({mensaje:"El nombre Esta vacio "})
     }
     if(correo.trim()===""){
           errores.push({mensaje:"El Correo Esta vacio "})
     }
      if(mensaje.trim()===""){
           errores.push({mensaje:"El Mensaje Esta vacio "})
     }
     if(errores.length>0){
          //consultar  Testimoniales existentes 

          const testimoniales= await Testimonial.findAll();
                //Mostrar el mensaje
                res.render("testimoniales",{
                    pagina: "Testimoniales",
                    errores,
                    nombre,
                    correo,
                    mensaje,
                    testimoniales
                });
     }
     else{
            //Almacenarlo en la Bd 
            try {
               await Testimonial.create({
                     nombre,
                     correo,
                     mensaje
               });
               res.redirect('/testimoniales')
            } catch (error) {
               console.log(error)
            }

     }
}

export { 
      guardarTestimonial
}