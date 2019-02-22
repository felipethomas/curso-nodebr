/*
 Objetivos:
 1 - Obter um usuário
 2 - Obter o número de telefone do usuário a partir do seu id
 3 - Obter o endereçoo do usuário a partir do seu id
*/

// Definição das funções
function obterUsuario() {
    return new Promise(function (resolve, reject) {
        return resolve({
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    })
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        return resolve({
            numero: '4008-8282',
            ddd: 85
        })
    })
}

function obterEndereco(idUsuario) {
    return new Promise((resolve, reject) => {
        return resolve({
            rua: 'Rua Almirante Brasileiro',
            numero: 200
        })
    })
}

//Execução 
async function main() {
    const usuario = await obterUsuario();
    const outros = await Promise.all([
        obterTelefone(usuario.id),
        obterEndereco(usuario.id)
    ])

    const [telefone, endereco] = outros;
    console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua}, ${endereco.numero}
        Telefone: (${telefone.ddd}) ${telefone.numero}
    `)
}

main()