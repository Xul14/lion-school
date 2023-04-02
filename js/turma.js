'use strict'

import { carregarAlunosCurso } from "../js/ApiTurma.js"

const carregarAlunos = await carregarAlunosCurso()
const nomeCurso = document.getElementById('titulo-do-curso')

const carregarTurma = (turma) => {

    nomeCurso.innerHTML = turma.curso.slice(6)


    const cardDoAluno = document.createElement('div')
    cardDoAluno.classList.add('card-aluno')

    if (turma.status == 'Cursando') {
        cardDoAluno.classList.add('color-cursando')
    } else {
        cardDoAluno.classList.add('color-finalizado')
    }

    const imagensDosAlunos = document.createElement('img')
    imagensDosAlunos.classList.add('image-aluno')
    imagensDosAlunos.src = `${turma.foto}`

    const nomeDoAluno = document.createElement('p')
    nomeDoAluno.classList.add('p-alunos')
    nomeDoAluno.textContent = turma.nome

    cardDoAluno.append(imagensDosAlunos, nomeDoAluno)

    return cardDoAluno

}

const carregarDadosDaTurma = () => {
    const elementosDoContainerTurma = document.getElementById('container-cards')
    const curso = carregarAlunos.curso.map(carregarTurma)
    elementosDoContainerTurma.replaceChildren(...curso)
}

carregarDadosDaTurma()