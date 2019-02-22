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
obterUsuario()
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then((telefone) => {
                return { usuario, telefone }
            })
    })
    .then((resposta) => {
        return obterEndereco(resposta.usuario.id)
            .then(endereco => ({ ...resposta, endereco }))
    })
    .then(resposta => {
        console.log(`
            Nome: ${resposta.usuario.nome},
            Endereco: ${resposta.endereco.rua}, ${resposta.endereco.numero}
            Telefone: (${resposta.telefone.ddd}) ${resposta.telefone.numero}
        `)
    })
    .catch(function (erro) {
        console.error("Erro ao obter usuário", erro)
    }) 