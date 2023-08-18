## BackEnd

0. Copiar y pegar el archivo BD en sql server
1. USE [master]
    GO
    CREATE LOGIN [Castigada] WITH PASSWORD=N'Seras', DEFAULT_DATABASE=[BDPractica], CHECK_EXPIRATION=OFF,
    CHECK_POLICY=OFF
    GO
    
    USE [BDPractica]
    GO
    CREATE USER [Castigada] FOR LOGIN [Castigada]
    GO
    USE [BDPractica]
    GO
    ALTER ROLE [db_owner] ADD MEMBER [Castigada]
    GO

3. Poner el mismo nombre de la computadora en el .env
4. npm i 
5. npm start
## FrontEnd

0. Ubicarse en Parte-RN 
1. npm i
2. expo start
