import { config } from "../../dbconfig.js"
import  sql from "mssql"

export class UserServices {
    static getAll = async() => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .query('SELECT * FROM Usuario')
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
                            .input('pEmail', Usuario.Email)
                            .query('INSERT INTO Usuario (Nombre, Contraseña, Email) VALUES (@pUsuario, @pContraseña, @pEmail)')
    }
    static update = async(Usuario) => {
        let pool = await sql.connect(config)
        let result = await pool.request()
                            .input('pId', Usuario.id)
                            .input('pUsuario', Usuario.Nombre)
                            .input('pContraseña', Usuario.Contraseña)
                            .input('pEmail', Usuario.Email)
                            .query('UPDATE Usuario SET Nombre=@pUsuario, Contraseña=@pContraseña, Email=@pEmail WHERE id = @pId')
    }
}
