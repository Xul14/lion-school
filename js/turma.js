'use strict'

import { carregarTurmaAlunos } from "../js/ApiTurma.js"

const cardsTurma = await carregarTurmaAlunos()

const carregarTurma = (turma) => {

    // const tituloDoCurso = document.createElement('h2')
    // tituloDoCurso.classList.add('titulo-do-curso')
    // tituloDoCurso.textContent = turma.curso.nome

    const containerPaiCards = document.createElement('div')
    containerPaiCards.classList.add('container-teste')

    const containerCards = document.createElement('div')
    containerCards.classList.add('container-cards')

    const cardDoAluno = document.createElement('div')
    cardDoAluno.classList.add('card-aluno')

    const imagensDosAlunos = document.createElement('img')
    imagensDosAlunos.classList.add('image-aluno')
    imagensDosAlunos.src = `${turma.foto}`

    const nomeDoAluno = document.createElement('p')
    nomeDoAluno.classList.add('p-alunos')
    nomeDoAluno.textContent = turma.nome

    // const cardDoAlunoFinalizado = document.createElement('div')
    // cardDoAlunoFinalizado.classList.add('card-aluno-finalizado')

    // const imagensDosAlunosFinalizados = document.createElement('img')
    // imagensDosAlunosFinalizados.classList.add('image-aluno')
    // imagensDosAlunosFinalizados.src = `${turma.foto}`

    // const nomeDoAlunoFinalizado = document.createElement('p')
    // nomeDoAlunoFinalizado.classList.add('p-alunos')
    // nomeDoAlunoFinalizado.textContent = turma.nome

    containerPaiCards.append(containerCards)
    containerCards.append(cardDoAluno)

    cardDoAluno.append(imagensDosAlunos, nomeDoAluno)
    // cardDoAlunoFinalizado.append(imagensDosAlunosFinalizados,nomeDoAlunoFinalizado)
   

    // return tituloDoCurso
    return containerPaiCards

}
//fazer uma funcao pra somente trazer os alunos de redes,
//e outra pra trazer so os de ads na acão do click do botao da primeira interface.
const carregarDadosDaTurma = () => {
    const elementosDoContainerTurma = document.getElementById('container-teste')
    const curso = cardsTurma.alunos.map(carregarTurma)
    elementosDoContainerTurma.replaceChildren(...curso)
}

carregarDadosDaTurma()