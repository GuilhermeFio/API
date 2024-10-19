import con from "./connection.js";

export async function consultarLogin(){

    const comando= `
    
          select
                ds_email      email,
                ds_senha      senha
                
          from AthenasDB.Login;

                   `
    
    let resposta= await con.query(comando);
    let registros= resposta[0];
    return registros
    
    }