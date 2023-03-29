'use strict'
 import { cursos } from "../json/cursos.js"
console.log('entrei');


// const cards = await carregarCards();

const criarCards = () => {
    // const cardsCursos = document.createElement('div')
    // cardsCursos.classList.add('container-cards-cursos')
   console.log('entrei2222');
    const containerCurso = document.createElement('div')
    containerCurso.classList.add('curso-container')
    
    const tipoCurso = document.createElement ('div')
    tipoCurso.classList.add('titulo-do-curso')

    const iconesDosCursos = document.createElement('i')
    iconesDosCursos.src = `./${cursos.icone}`

    const nomeDoCurso = document.createElement ('h1')
    nomeDoCurso.classList.add('tipo-curso')

    nomeDoCurso.textContent = cursos.sigla
    console.log();

    // cardsCursos.append(containerCurso)
    containerCurso.append(tipoCurso)
    tipoCurso.append(iconesDosCursos,nomeDoCurso)

    return containerCurso
}

 const carregarCards = () => {
    const elementosDoContainer = document.getElementById('container-cards-cursos')
    const curso = cursos.map(criarCards)

    elementosDoContainer.replaceChildren(...curso)
 }

 carregarCards()