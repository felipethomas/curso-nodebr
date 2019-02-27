class NotImplementedException extends Error {
    constructor() {
        super('[Erro] o método chamado não foi implementado.');
    }
}

module.exports = NotImplementedException