'use strict'

import { carregarAlunosCurso } from "../js/ApiTurma.js"

const carregarAlunos = await carregarAlunosCurso()

const carregarTurma = (turma) => {

    // const tituloDoCurso = document.createElement('h2')
    // tituloDoCurso.classList.add('titulo-do-curso')
    // tituloDoCurso.textContent = turma.curso.nome

    // const pai = document.getElementById('titulo-do-curso')
    // const nomeTitulo = document.createElement('h2')
    // nomeTitulo.classList.add()
    // nomeTitulo.textContent = turma.NomeCurso.toUpperCase()

    // pai.append(nomeTitulo)


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