import express from "express"
import cors from "cors";
import { UsersServices } from "./src/services/usersServices.js";
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const elLogger = (req, res, next) => {
    console.log("hello middlewere", Date().toString())
    next()
}
app.get('/login', async(req,res) => {
    try {
        const Usuarios = await UsersServices.getAll()
        res.status(200).send(Usuarios)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error' })
    }
})
app.post('/login', async (req,res) => {
    try {
        const Usuarios = await UsersServices.getAll()
        const usuario = Usuarios.find((element) => element.Nombre == req.body.Nombre && element.Contraseña == req.body.Contraseña)
        console.log(usuario)
        if (usuario == undefined) {
            res.status(200).json({message: 'El usuario o la contraseña no coinciden'})
        }
        else {
            res.status(200).json({message: 'Cuenta OK'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error' })
    }
})
app.post('/registrarse',async (req, res) => {
    try {
        const Usuarios = await UsersServices.getAll()
        const usuario = Usuarios.find((element => element.Nombre == req.body.Nombre));
        if (usuario == undefined) {
            await UsersServices.insert(req.body)
            res.status(200).json({message: 'Cuenta Creada' })
        }
        else {
            res.status(200).json({message: 'El usuario ya existe' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error' })
    }
})
app.post('/usuario',async (req,res) => {
    try {
        const Usuarios = await UsersServices.getAll()
        const usuario = Usuarios.find((element) => element.Nombre == req.body.Nombre && element.Contraseña == req.body.Contraseña)
        res.status(200).send(usuario)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error' })
    }
})
app.listen(port, () => {
    console.log(`Escuchando puerto: ${port}`)
})