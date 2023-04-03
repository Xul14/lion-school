
// import { carregarCardsMatricula } from '../js/ApiAluno.js'

// console.log();

// const matriculaAluno = await (carregarCardsMatricula)

// 'use strict'

// const cardAluno = (matricula) => {

//     const cardAluno = document.createElement('div')
//     cardAluno.classList.add('container-aluno')

//     const imgAluno = document.createElement('img')
//     imgAluno.classList.add('img-aluno')
//     imgAluno.src = matricula.aluno.foto

//     const nomeAluno = document.createElement('p')
//     nomeAluno.classList.add('nome-aluno')
//     nomeAluno.textContent = matricula.aluno.nome

//     cardAluno.append(imgAluno, nomeAluno)

//     return cardAluno
// }

// const cardGrafico = () => {

//     const cardGrafico = document.createElement('div')
//     cardGrafico.classList.add('container-grafico')

//     const numeros = document.createElement('div')
//     numeros.classList.add('numeros-das-notas')

//     const chart = document.createElement('div')
//     chart.classList.add('chart')

//     const nomesDasMaterias = document.createElement('div')
//     nomesDasMaterias.classList.add('nomes-das-materias')

//     cardGrafico.append(numeros)
//     cardGrafico.append(chart)
//     cardGrafico.append(nomesDasMaterias)

//     return cardGrafico
// }

// const carregarCards = () => {
//     const cardsAlunos = document.getElementById('container-aluno')
//     const containerAluno = cardAluno(cards)
//     const containerGrafico = cardGrafico(matriculaAluno)
//     cardsAlunos.append(containerAluno, containerGrafico)
// }

// carregarCards()