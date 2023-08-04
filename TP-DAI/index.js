import express from "express"
import cors from "cors";
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
    
})
app.post('/login',async (req, res) => {
    const usuarios = [{
        usuario: "teglus",
        contraseña: "123"
    }]

    try {
        let esVerificada
        usuarios.forEach(element => {
            console.log(element)
            console.log(req.body)
            if (element.usuario == req.body.Usuario && element.contraseña == req.body.Contraseña) {
                esVerificada = true
            }
            else {
                esVerificada = false
            }
        });
        if (esVerificada) {
            res.status(200).json({message: 'Cuenta OK'})
        }
        else {
            res.status(200).json({message: 'No existe esta cuenta'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error' })
    }
})

app.listen(port, () => {
    console.log(`Escuchando puerto: ${port}`)
})