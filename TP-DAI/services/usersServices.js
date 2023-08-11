import { config } from "../dbconfig.js"
import  sql from "mssql"

export class UsersServices {
    static getAll = async(Usuario, Contraseña) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .query('SELECT Usuario, Contraseña FROM Usuarios')
            console.log(result)
            return result.recordsets[0];
        }
        catch (error) {
            console.log(error); 
        }  
    
    }
}