const calculoTabuada = function(valorTabuada, valorTabuadaFinal, valor1, valor2){

    let tabuada = valorTabuada
    let tabuadafinal = valorTabuadaFinal
    let v1 = valor1
    let v2 = valor2

    // entrada da tabuada deverá ser entre 2 e 100, não sendo permitir outros valores; Nenhuma entrada de dados deverá ficar vazia; 
    //O valor até onde será calculada a tabuada deverá ser entre 1 e 50;

    if(tabuada == '' || tabuadafinal == '' || v1 == '' || v2 == '')
        console.log(' ERRO: É obrigatória a entrada de todos os valores')


    else if (isNaN(tabuada) || isNaN(tabuadafinal) || isNaN(v1) || isNaN(v2))
        console.log(' ERRO: Os valores inseridos devem ser números inteiros.')


    else if(tabuada < 2 || tabuada > 100 || tabuadafinal < 2 || tabuadafinal > 100)
        console.log(' ERRO: Os valores inseridos devem estar entre 2 e 100')


    else if(v1 < 1 || v1 > 50 || v2 < 1 || v2 > 50)
        console.log(' ERRO: Os valores a serem calculados só podem estar entre 1 e 50')  
        
        
    else{

        let resultado
        let status = false

        //se os valores forem invertidos, mudar para não dar erro
        if(tabuada > tabuadafinal){
            tabuada = tabuadafinal
            tabuadafinal = tabuada
        }
        if(v1 > v2){
            v1 = valorFinal
            v2 = valorInicial
        }

        //fazer cada tabuada
        for(;tabuada <= tabuadafinal; tabuada++){
            console.log()
            console.log('Tabuada do ' + tabuada)
            for(;v1 <= v2; v1++){
                resultado = tabuada * v1
                console.log(`${tabuada} x ${v1} = ${resultado}`)
            }
            v1 = valorTabuada
            status = true
        }

        return status
    }
}

module.exports={
    calculoTabuada
}