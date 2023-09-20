const calcularMedia = function (n1, n2, n3, n4, n5){

    let nota1 = Number(n1.replace(',', '.'))
    let nota2 = Number(n2.replace(',', '.'))
    let nota3 = Number(n3.replace(',', '.'))
    let nota4 = Number(n4.replace(',', '.'))
    let nota5 = Number(n5.replace(',', '.'))
    let media
    
    if(nota1 == '' || nota2 == '' || nota3 == '' ||nota4 == '' ||nota5 == '' || isNaN(nota1) || isNaN(nota2)|| isNaN(nota3) || isNaN(nota4) || isNaN(nota5))
        console.log('ERRO: Todas as notas devem ser preenchidas com números.')


    else if(nota1 > 100 || nota2 > 100 || nota3 > 100 ||nota4 > 100 ||nota5 > 100 || nota1 < 0 || nota2 < 0 || nota3 < 0 ||nota4 < 0 ||nota5 < 0)
        console.log('ERRO: As notas só podem estar entre 0 e 100') 
    else
        media = (nota1 + nota2 + nota3 + nota4 + nota5)/5

    return media;
    
}

const mostrarSituacao = function(mediaFinal){

    let media = mediaFinal
    let situacao

    if(media > 69)
        situacao = 'aprovado'
    else if(media > 49)
        situacao = 'para exame'
    else
        situacao = 'reprovado'

    return situacao
}

const mostrarSituacaoFinal = function(mediaExame){

    let media = mediaExame
    let situacaoFinal

    if(media >= 60){
        situacaoFinal = 'aprovado'
    }else{
        situacaoFinal = 'reprovado'
    }

    console.log("Média final do exame: " + media + situacaoFinal)
}

const calcularExame = function(mediaFinal, notaExame){

    let media = Number(mediaFinal)
    let exame = Number(notaExame)
    let resultado

    resultado = (media + exame)/2

    return resultado

}


const mostrarRelatorio = function (nomeAluno, generoAluno,  nomeCurso, nomeDisciplina, nomeProfessor , generoProfessor, mediaFinal){

    let aluno = nomeAluno
    let professor = nomeProfessor
    let genero = generoAluno.toLowerCase()
    let generoP = generoProfessor.toLowerCase()
    let curso = nomeCurso
    let disciplina = nomeDisciplina
    let media = mediaFinal
    let situacao = mostrarSituacao(media)

    let aluno_A
    if(genero == 'f' )
        aluno_A = 'A aluna'
    else
        aluno_A = 'O aluno'

    let professor_A
    if(generoP == 'f')
        professor_A = 'Professora'
    else
        professor_A = 'Professor'

        console.log('Relatório do aluno: ')
        console.log(`${aluno_A} ${aluno} foi ${situacao} na disciplina ${disciplina}`)
        console.log(`Curso: ${curso}`)
        console.log(`${professor_A}: ${professor}`)
        console.log(`Média final:   ${media}`)

}

module.exports ={
    calcularMedia,
    mostrarRelatorio,
    mostrarSituacao,
    calcularExame,
    mostrarSituacaoFinal
}