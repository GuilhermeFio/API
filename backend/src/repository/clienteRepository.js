import con from "./connection";

export async function inserirCliente(clienteObj){

const comando= `

insert into Cliente(nome, nascimento, idade, telefone, treino_id, avaliacao_id, reavaliacao_id)
values(?,?,?,?,?,?);
`

let resposta= await con.query(comando, [clienteObj.nome, clienteObj.nascimento, clienteObj.idade, clienteObj.telefone, clienteObj.treinoId, clienteObj.avaliacaoID, clienteObj.reavaliacaoId])
let registros = resposta[0]

return registros.insertId

}




export async function treinosMarcados(){

const comando = `   
      select 
      nome,
      dt_treino,
      telefone
      from Cliente
      inner join Treinos_marcados
      on Cliente.treino_id = Treinos_marcados.treino_id; 
`
                    

}





export async function infoCliente(){
    
    const comando = `
    select 
	nome,
	nascimento,
	idade,
	telefone,
	dt_treino,
	img_cliente,
	
	ds_peso,
    ds_imc,
	ds_frequencia_cardiaca,
	ds_indice_coracao,
	ds_taxa_muscular,
	ds_idade_metabolica,
	ds_taxa_metabolica_basal,
	ds_proteina,
	ds_massa_livre_gordura,
	ds_massa_muscular,
	ds_massa_muscular_esqueletica,
	ds_massa_ossea,
	ds_gordura_corporal,
	ds_gordura_subcutanea,
	ds_gordura_visceral,
	ds_agua_corporal,
	
	ds_objetivos_cliente,
	exercicios_escolhidos
	
from Cliente
inner join Treinos_marcados
on Cliente.treino_id = Treinos_marcados.treino_id

inner join Avaliacao_fisica
on Cliente.avaliacao_id = Avaliacao_fisica.avaliacao_id;
`


let resposta= await con.query(comando)
let registros = resposta[0]

return registros

}