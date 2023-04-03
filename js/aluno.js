'use strict'

import { getAlunosMatriculas } from "../js/ApiAluno.js";

const showAlunosMatriculas = await getAlunosMatriculas();

const criarCardAluno = (aluno) => {
    
    const containerCard = document.createElement('div')
    containerCard.classList.add('card-aluno')

    const imgAluno = document.createElement('img')
    imgAluno.classList.add('img-aluno')
    imgAluno.src = `${aluno.foto}`

    const nomeAluno = document.createElement('p')
    nomeAluno.classList.add('nome-aluno')
    nomeAluno.textContent = aluno.nome

    //cardContainer.append(containerCard)
    containerCard.append(imgAluno, nomeAluno)

    return containerCard
}
const criarCardGrafico = () => {

    const containerPai = document.createElement('div')
    containerPai.classList.add('card-pai')

    const disciplinaContainer = document.createElement('div')
    disciplinaContainer.classList.add('disciplina-container')

    const disciplinaBarras = document.createElement('div')
    disciplinaBarras.classList.add('disciplina-barras')

    const nomeDisciplinaContainer = document.createElement('div')
    nomeDisciplinaContainer.classList.add('nome-disciplina-container')

    showAlunosMatriculas.curso[0].disciplinas.forEach(disciplina => {

        const numerosGrafico = document.createElement('span')
        numerosGrafico.classList.add()
        numerosGrafico.textContent = disciplina.media

        disciplinaContainer.append(numerosGrafico)

        const disciplinasBarras = document.createElement('div')
        disciplinasBarras.classList.add('disciplinas-bar')

        const valor = document.createElement('div')
        valor.classList.add('barras')

        setTimeout(() => {
            valor.style.height = disciplina.media + '%'
        }, 100);

        if (disciplina.media < 50) {
            valor.classList.add('barra-vermelho')
        } else if (disciplina.media >= 50 && disciplina.media <= 70) {
            valor.classList.add('barra-amarelo')
        }
        
        console.log('if entrandooooo');
        disciplinaBarras.append(disciplinasBarras)
        disciplinasBarras.append(valor)

        const disciplinas = document.createElement('span')
        disciplinas.classList.add()
        disciplinas.textContent = disciplina.sigla

        nomeDisciplinaContainer.append(disciplinas)

        if (disciplina.media < 50) {
            numerosGrafico.classList.add('numeroNome-Vermelho')
            disciplinas.classList.add('numeroNome-Vermelho')
        } else if (disciplina.media >= 50 && disciplina.media <= 70) {
            numerosGrafico.classList.add('numeroNome-Amarelo')
            disciplinas.classList.add('numeroNome-Amarelo')
        }

    })

    containerPai.append(disciplinaContainer)
    containerPai.append(disciplinaBarras)
    containerPai.append(nomeDisciplinaContainer)

    return containerPai
}

const loadCardAluno = () => {
    const cardAlunos = document.getElementById('cardsContainer')
    const listaAlunos = criarCardAluno(showAlunosMatriculas)
    const containerGrafico = criarCardGrafico(showAlunosMatriculas)

    cardAlunos.append(listaAlunos, containerGrafico)
}

loadCardAluno()
console.log('teste')