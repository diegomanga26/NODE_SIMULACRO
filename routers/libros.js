import appMiddleware from "../middleware/middlewareLibros.js";
import {Router} from 'express';
const appLibros = Router();
appLibros.post("/",appMiddleware ,(req,res)=>{
    console.log(req.body.guardar);
    res.send("hola funciona")
})

export default appLibros;