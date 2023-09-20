const calcularFatorial = function (digitarValor) {
    let valor = digitarValor
    let contador = 1
    let resultado = valor

    if (valor == '' || isNaN(valor))
        console.log('ERRO: O valor deve ser preenchido com um número')


    else if (valor <= 1)
        console.log('ERRO: O fatorial só pode ser calculado com números maiores que 1')
    else {
        while (contador < valor) {
            resultado = resultado * (valor - contador)
            contador++
        }
    }

    return resultado
}


module.exports = {
    calcularFatorial
}
