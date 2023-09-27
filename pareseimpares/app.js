var pareseimpares = require('./modulo/pareseimpares.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Insira o valor inicial: ', function(numeroInicial){
    let valorInicial = numeroInicial

    entradaDados.question('Insira o valor final: ', function(numeroFinal){
        let valorFinal = numeroFinal

        console.log()
        console.log('[1] Somente os pares [2] Somente os ímpares [3] Pares e ímpares')
        entradaDados.question('Selecione o número correspondente ao que deseja mostrar? ', function(escolhaUsuario){

            let escolha = escolhaUsuario

            pareseimpares.paresimpares(valorInicial, valorFinal, escolha)


            entradaDados.close()
        })
    })

})