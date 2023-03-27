'use strict'

import { carregarCards } from "./ApiHome.js"

const cards = await carregarCards();

const criarCards = (card) => {
    const cardsCursos = document.createElement('div')
    cardsCursos.classList.add('container-cards-cursos')

    const containerCurso = document.createElement('div')
    containerCurso.classList.add('curso-container')
    
    const tipoCurso = document.createElement ('div')
    tipoCurso.classList.add('titulo-do-curso')

    const iconesDosCursos = document.createElement('i')
    iconesDosCursos.src = `./${card.icone}`

    const nomeDoCurso = document.createElement ('h1')
    nomeDoCurso.classList.add('tipo-curso')

    nomeDoCurso.textContent = card.sigla

    cardsCursos.append(containerCurso)
    containerCurso.append(tipoCurso)
    tipoCurso.append(iconesDosCursos,nomeDoCurso)

    return cardsCursos
}

 const carregarCards = () => {
    const elementosDoContainer = document.getElementById('container-cards-cursos')
    const cursos = cards.map(criarCards)

    elementosDoContainer.replaceChildren(...cursos)
 }

 carregarCards()