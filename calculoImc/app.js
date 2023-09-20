/****************************************************************************************************************************************************
* Objetivo: Calculo do IMC e informa o grau do peso
* Data: 15/09/2023
* Autor: Vitória Cardoso
* Versão: 1.0
****************************************************************************************************************************************************/

var readline = require('readline')
var calculoIMC = require('./modulo/calculoImc')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe a sua altura em metros: ', function(alturaUsuario){

    let altura = alturaUsuario

    entradaDeDados.question('Informe a peso: ', function(pesoUsuario){

        let peso = pesoUsuario

        let imc = calculoIMC.calculoIMC(altura, peso)
        let grauPeso
        
        if (imc){
            grauPeso = calculoIMC.verificarIMC(imc)
            console.log(`IMC: ${String(imc.toFixed(2).replace('.', ','))} - ${grauPeso}`)
        }
                
        entradaDeDados.close()
        
    })
    
})
