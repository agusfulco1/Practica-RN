import { config } from "../../dbconfig.js"
import  sql from "mssql"

export class UsersServices {
    static getAll = async() => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .query('SELECT Nombre, Contraseña FROM Usuarios')
            return result.recordsets[0];
        }
        catch (error) {
            console.log(error); 
        }  
    
    }
    static insert =  async(Usuario) => {
        let pool = await sql.connect(config)
        let result = await pool.request()
                            .input('pUsuario', Usuario.Nombre)
                            .input('pContraseña', Usuario.Contraseña)
                            .query('INSERT (Nombre, Contraseña) ON (@pUsuario, @pContraseña)')
    }
}
