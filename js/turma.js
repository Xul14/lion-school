'use strict'

import { carregarAlunosCurso } from "../js/ApiTurma.js"

const carregarAlunos = await carregarAlunosCurso()
const nomeCurso = document.getElementById('titulo-do-curso')

const carregarTurma = (turma) => {

    nomeCurso.innerHTML = turma.curso.slice(6)

    const cardDoAluno = document.createElement('a')
    cardDoAluno.classList.add('card-aluno')
    cardDoAluno.href = "../../html/aluno.html"

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

    const matricula = document.createElement('span')
    matricula.textContent = turma.matricula

    cardDoAluno.addEventListener('click', () => {
        localStorage.setItem('matricula', matricula.textContent)

        window.location.href = 'http://127.0.0.1:5500/html/aluno.html'
    })


    cardDoAluno.append(imagensDosAlunos, nomeDoAluno)

    return cardDoAluno

}

const carregarDadosDaTurma = () => {
    const elementosDoContainerTurma = document.getElementById('container-cards')
    const curso = carregarAlunos.curso.map(carregarTurma)
    elementosDoContainerTurma.replaceChildren(...curso)
}

carregarDadosDaTurma()