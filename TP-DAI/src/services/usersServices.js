import { config } from "../../dbconfig.js"
import  sql from "mssql"

export class UsersServices {
    static getAll = async() => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .query('SELECT Nombre, Contraseña FROM Usuario')
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
                            .query('INSERT INTO USuario (Nombre, Contraseña) VALUES (@pUsuario, @pContraseña)')
    }
}
