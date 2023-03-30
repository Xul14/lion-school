'use strict'

import { carregarTurmaAlunos } from "../js/ApiTurma.js"

const cardsTurma = await carregarTurmaAlunos()

const carregarTurma = (turma) => {

    const containerPaiCards = document.createElement('div')
    containerPaiCards.classList.add('container-teste')

    // const tituloDoCurso = document.createElement('div')
    // tituloDoCurso.classList.add('h2')
    // tituloDoCurso.textContent = turma.curso.nome

    const containerCards = document.createElement('div')
    containerCards.classList.add('container-cards')

    const cardDoAluno = document.createElement('div')
    cardDoAluno.classList.add('card-aluno')

    const imagensDosAlunos = document.createElement('img')
    imagensDosAlunos.classList.add('image-aluno')

    imagensDosAlunos.src = `${turma.foto}`

    const nomeDoAluno = document.createElement('p')
    nomeDoAluno.classList.add('p-aluna')
    nomeDoAluno.textContent = turma.nome

    // const cardDoAlunoFinalizado = document.createElement('div')
    // cardDoAlunoFinalizado.classList.add('card-aluno-finalizado')

    // const imagensDosAlunosFinalizados = document.createElement('img')
    // imagensDosAlunosFinalizados.classList.add('image-aluno')
    // imagensDosAlunosFinalizados.src = `${turma.icone}`

    // const nomeDoAlunoFinalizado = document.createElement('p')
    // nomeDoAlunoFinalizado.classList.add('p-aluna')
    // nomeDoAlunoFinalizado.textContent = turma.sigla

    containerPaiCards.append(containerCards)
    containerCards.append(cardDoAluno)
    cardDoAluno.append(imagensDosAlunos, nomeDoAluno)

    return containerPaiCards

}

const carregarDadosDaTurma = () => {

    const elementosDoContainerTurma = document.getElementById('container-teste')

    const curso = cardsTurma.alunos.map(carregarTurma)

    elementosDoContainerTurma.replaceChildren(...curso)

}

carregarDadosDaTurma()