/****************************************************************************************************************************************************
* Objetivo: Tabuada
* Data: 15/09/2023
* Autor: Vitória Cardoso
* Versão: 1.0
****************************************************************************************************************************************************/


var tabuadA = require('./modulo/calculoTabuada.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Insira o valor da primeira tabuada: ', function (valorTabuada1) {

    let valorTabuada = valorTabuada1

    entradaDados.question('Insira o valor da última tabuada ', function (valorTabuadaFinal) {

        let tabuadafinal = valorTabuadaFinal

        entradaDados.question('Insira o primeiro valor a ser calculado: ', function (valor1) {

            let v1 = valor1

            entradaDados.question('Insira o último valor a ser calculado: ', function(valor2){

                let v2 = valor2

                tabuadA.calculoTabuada(valorTabuada, tabuadafinal, v1, v2)

                entradaDados.close()
            })

        })

    })

})