'use strict'

import { carregarAlunosCurso } from "../js/ApiTurma.js"

const carregarAlunos = await carregarAlunosCurso()
const nomeCurso = document.getElementById('titulo-do-curso')

const carregarTurma = (turma) => {

    nomeCurso.innerHTML = turma.curso.slice(6)

    const matriculaAluno = document.createElement('span')
    matriculaAluno.classList.add('matricula')
    matriculaAluno.textContent = turma.matricula


    const containerCard = document.createElement('a')
    containerCard.classList.add('containerCard')
    containerCard.setAttribute('href', 'http://127.0.0.1:5500/html/aluno.html')
    containerCard.addEventListener('click', () => {
        localStorage.setItem('matricula', matriculaAluno.textContent)
    })

    if (turma.status == 'Cursando') {
        containerCard.classList.add('color-cursando')
    } else {
        containerCard.classList.add('color-finalizado')
    }

    const imagensDosAlunos = document.createElement('img')
    imagensDosAlunos.classList.add('image-aluno')
    imagensDosAlunos.src = `${turma.foto}`

    const nomeDoAluno = document.createElement('p')
    nomeDoAluno.classList.add('p-alunos')
    nomeDoAluno.textContent = turma.nome

    const matricula = document.createElement('span')
    matricula.textContent = turma.matricula

    containerCard.append(imagensDosAlunos, nomeDoAluno)

    return containerCard

}

const carregarDadosDaTurma = () => {
    const elementosDoContainerTurma = document.getElementById('container-cards')
    const curso = carregarAlunos.curso.map(carregarTurma)
    elementosDoContainerTurma.replaceChildren(...curso)
}

carregarDadosDaTurma()