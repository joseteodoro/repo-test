
const funcaoExposta = (parametro) => {
    console.log(`minha funcao recebeu o parametro ${parametro}`)
    return 42
}

const funcaoLocal = (arg) => { // essa funcao nunca sera chamada pq nao é exportada
    console.log(arg)
}

module.exports = { funcao: funcaoExposta } // aqui eu declaro as funcoes que eu quero expor no meu modulo
