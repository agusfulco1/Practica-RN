import express from "express"
import cors from "cors";
import { UsersServices } from "./services/usersServices.js";
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
    try {
        await usersServices.insert(req.body)
        res.status(200).json({ message: 'Cuenta OK' })
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error' })
    }
})

app.listen(port, () => {
    console.log(`Escuchando puerto: ${port}`)
})