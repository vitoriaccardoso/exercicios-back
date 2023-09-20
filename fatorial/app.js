/************************************************************
 * Objetivo: Calcular o Fatorial 
 * Data: 20/09/2023
 * Autor: Vitória Cardoso
 * Versão: 1.0
 ***********************************************************/



var fatorial = require ('./modulo/calcularFatorial.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor: ', function(digitarValor){
    let valor = digitarValor

    console.log('Fatorial de ' + valor + ': ' + fatorial.calcularFatorial(valor))

    entradaDados.close()
})