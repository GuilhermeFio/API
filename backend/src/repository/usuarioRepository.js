import con from "./connection.js";

export async function consultarUsuario(){

const comando= `
           
select
nm_usuario,
ds_email,
dt_nascimento,
ds_cidade,
ds_genero,
ds_UF,
img_usuario
from Usuario;

`

let resposta= await con.query(comando);
let registros= resposta[0];
return registros

}


export async function atualizarUsuario(id,usuario){

    const comando=  `

    
    update Usuario
set 	nm_usuario =?,
		ds_email =?,
		dt_nascimento =?,
		ds_cidade =?,
		ds_genero =?,
		ds_UF =?,
		img_usuario =?
where id_usuario = ?;

           `

 let resposta= await con.query(comando, [usuario.nome, usuario.genero, usuario.nascimento, usuario.UF, id]);
 let registros= resposta[0];
 return registros.affectedRows; 
    }


    export async function alterarimagem(id, caminho){

        const comando= `
        
        update Usuario
           set img_usuario = ?
        where id_usuario = ?;
        
        `
        let resposta= await con.query(comando, [caminho, id] )
        
        let registros= resposta [0]
        let linhasAfetadas= registros.affectedRows
        return linhasAfetadas;
        
        }