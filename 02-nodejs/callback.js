/*
 Objetivos:
 1 - Obter um usuário
 2 - Obter o número de telefone do usuário a partir do seu id
 3 - Obter o endereçoo do usuário a partir do seu id
*/

// Definição das funções
function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            numero: '4008-8282',
            ddd: 85
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua Almirante Brasileiro',
            numero: 200
        })
    }, 2000);
}

//Execução 
obterUsuario(function (erro1, usuario) {
    if (erro1) {
        console.error("Erro ao obter usuário.", erro1);
        return;
    }

    obterTelefone(usuario.id, function (erro2, telefone) {
        if (erro2) {
            console.error("Erro ao obter telefone do usuário.", erro2);
            return;
        }

        obterEndereco(usuario.id, function (erro3, endereco) {
            if (erro3) {
                console.error("Erro ao obter endereço do usuário.", erro3);
                return;
            }

            console.log(`
             Nome: ${usuario.nome},
             Endereco: ${endereco.rua}, ${endereco.numero}
             Telefone: (${telefone.ddd}) ${telefone.numero}
            `)
        })
    })
})
