'use strict'

import { showAlunosMatricula } from "../js/ApiAluno.js";

const showAlunosMatriculas = await showAlunosMatricula();

const buttonExit = document.getElementById('exit')

buttonExit.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/html/turma.html'
})

const criarCardAluno = (aluno) => {

    const containerCard = document.createElement('div')
    containerCard.classList.add('card-aluno')

    const imgAluno = document.createElement('img')
    imgAluno.classList.add('imgAluno')
    imgAluno.src = `${aluno.foto}`

    const nomeAluno = document.createElement('p')
    nomeAluno.classList.add('nomeAluno')
    nomeAluno.textContent = aluno.nome.toUpperCase()

    containerCard.append(imgAluno, nomeAluno)

    return containerCard
}

const criarCardGrafico = () => {
    const cardPai = document.createElement('div')
    cardPai.classList.add('cardPai')

    const containerDisciplinas = document.createElement('div')
    containerDisciplinas.classList.add('containerDisciplinas')

    const disciplinasBarras = document.createElement('div')
    disciplinasBarras.classList.add('disciplinasBarras')
    
    // const cardProsNomesDisciplinas = document.createElement('div')
    // cardProsNomesDisciplinas.classList.add('cardProsNomesDisciplinas')

    const nomesDisciplinasContainer = document.createElement('div')
    nomesDisciplinasContainer.classList.add('nomesDisciplinasContainer')

    showAlunosMatriculas.curso[0].disciplinas.forEach(disciplina => {

        const numerosGrafico = document.createElement('span')
        numerosGrafico.classList.add()
        numerosGrafico.textContent = disciplina.media

        containerDisciplinas.append(numerosGrafico)

        const disciplinaBarras = document.createElement('div')
        disciplinaBarras.classList.add('disciplinaBarras')

        const valor = document.createElement('div')
        valor.classList.add('valorBarra')

        setTimeout(() => {
            valor.style.height = disciplina.media + '%'
        }, 100);

        if (disciplina.media < 50) {
            valor.classList.add('barrinha-vermelha')
        } else if (disciplina.media >= 50 && disciplina.media <= 70) {
            valor.classList.add('barrinha-amarela')
        }

        disciplinasBarras.append(disciplinaBarras)
        disciplinaBarras.append(valor)

        const disciplinas = document.createElement('span')
        disciplinas.classList.add()
        disciplinas.textContent = disciplina.sigla

        nomesDisciplinasContainer.append(disciplinas)

        if (disciplina.media < 50) {
            numerosGrafico.classList.add('numeroNome-Vermelho')
            disciplinas.classList.add('numeroNome-Vermelho')
        } else if (disciplina.media >= 50 && disciplina.media <= 70) {
            numerosGrafico.classList.add('numeroNome-Amarelo')
            disciplinas.classList.add('numeroNome-Amarelo')
        } else {
            numerosGrafico.classList.add('numeroNome-Azul')
            disciplinas.classList.add('numeroNome-Azul')
        }

    })

    cardPai.append(containerDisciplinas)
    cardPai.append(disciplinasBarras)
    cardPai.append(nomesDisciplinasContainer)

    return cardPai
}

const loadCardAluno = () => {
    const cardAlunos = document.getElementById('container-pai')
    const listaAlunos = criarCardAluno(showAlunosMatriculas)
    const containerGrafico = criarCardGrafico(showAlunosMatriculas)

    cardAlunos.append(listaAlunos, containerGrafico)

}
loadCardAluno()