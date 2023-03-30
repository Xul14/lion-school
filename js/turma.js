'use strict'

import { carregarTurma } from "../js/ApiTurma.js"

const cardsTurma = await carregarTurma()

const carregarTurma = (turma) => {
    const tituloDoCurso = document.createElement('div')
    tituloDoCurso.classList.add('h2')
    tituloDoCurso.textContent = turma.nome

    const containerCards = document.createElement('div')
    containerCards.classList.add('container-cards')

    const cardDoAluno = document.createElement('div')
    cardDoAluno.classList.add('card-aluno')

    const imagensDosAlunos = document.createElement('img')
    imagensDosAlunos.classList.add('image-aluno')
    imagensDosAlunos.src = `${turma.icone}`

    const nomeDoAluno = document.createElement('p')
    nomeDoAluno.classList.add('p-aluna')
    nomeDoAluno.textContent = turma.sigla

    // const cardDoAlunoFinalizado = document.createElement('div')
    // cardDoAlunoFinalizado.classList.add('card-aluno-finalizado')

    // const imagensDosAlunosFinalizados = document.createElement('img')
    // imagensDosAlunosFinalizados.classList.add('image-aluno')
    // imagensDosAlunosFinalizados.src = `${turma.icone}`

    // const nomeDoAlunoFinalizado = document.createElement('p')
    // nomeDoAlunoFinalizado.classList.add('p-aluna')
    // nomeDoAlunoFinalizado.textContent = turma.sigla

    containerCards.append(cardDoAluno)
    cardDoAluno.append(imagensDosAlunos, nomeDoAluno)

    return containerCards

}

const carregarDadosDaTurma = () => {

    const elementosDoContainerTurma = document.getElementById('container-cards')
    const curso = cardsTurma.cursos.map(carregarTurma)

    elementosDoContainerTurma.replaceChildren(...curso)

}

carregarDadosDaTurma()