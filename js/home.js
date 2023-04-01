'use strict'
//import { cursos } from "../json/cursos.js"

import { carregarCards } from "../js/ApiHome.js"


const cards = await carregarCards();

const criarCards = (card) => {

    const cardsCursos = document.createElement('div')
    cardsCursos.classList.add('container-cards-cursos')

    const containerCurso = document.createElement('div')
    containerCurso.classList.add('curso-container')

    const tipoCurso = document.createElement('div')
    tipoCurso.classList.add('titulo-do-curso')

    const imagensDosCursos = document.createElement('img')
    imagensDosCursos.classList.add('logo-curso')
    imagensDosCursos.src = `${card.icone}`

    const nomeDoCurso = document.createElement('h1')
    nomeDoCurso.classList.add('tipo-curso')
    nomeDoCurso.textContent = card.sigla

    cardsCursos.addEventListener('click', () => {
        localStorage.setItem('curso', nomeDoCurso.textContent)
        
        window.location.href = 'http://127.0.0.1:5500/html/turma.html'
    })

    cardsCursos.append(containerCurso)
    containerCurso.append(tipoCurso)
    tipoCurso.append(imagensDosCursos, nomeDoCurso)

    return cardsCursos
}

const carregarDados = () => {
    const elementosDoContainer = document.getElementById('container-cards-cursos')
    const curso = cards.cursos.map(criarCards)

    elementosDoContainer.replaceChildren(...curso)
}

carregarDados()