'use strict'

import { carregarAlunosCurso } from "../js/ApiTurma.js"
import { carregarAlunosStatus } from "../js/ApiTurma.js"

const carregarAlunos = await carregarAlunosCurso()
const nomeCurso = document.getElementById('titulo-do-curso')

const buttonExit = document.getElementById('exit')

buttonExit.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/home.html'
})

const carregarTurma = (turma) => {

    nomeCurso.innerHTML = turma.curso.slice(6)

    const matriculaAluno = document.createElement('span')
    matriculaAluno.classList.add('matricula')
    matriculaAluno.textContent = turma.matricula


    const containerCard = document.createElement('a')
    containerCard.classList.add('containerCard')
    containerCard.setAttribute('href', 'http://127.0.0.1:5500/aluno.html')
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

const cursandoFinalizado = () => {
    const buttons = document.querySelectorAll('.card- ')

    buttons.forEach(button => {
        button.addEventListener('click', async () => {

            const statusSelecionado = button.id
            if (button.id == "status") {
                carregarDadosDaTurma()
            } else {
                const retorna = await carregarAlunosStatus(statusSelecionado)
                const cardJson = retorna.status.map(carregarTurma)
                const listCourses = document.getElementById('container-cards')
                listCourses.replaceChildren(...cardJson)  

            }
        })
    })
}
  
const pegarConclusaoAno = (alunos) =>{
    let anos = []

    alunos.forEach(aluno => {
        anos.push(aluno.conclusao)

    })
    let conclusaoAnos = anos.filter((este, i) => anos.indexOf(este) === i)
    return conclusaoAnos.sort()
}

const anos = pegarConclusaoAno(carregarAlunos.curso)
console.log(anos);

const conclusaoAno = async (ano) =>{
    const alunosJSON = {}
    const alunosArray = []

    carregarAlunos.curso.forEach(aluno => {
        if (aluno.conclusao == ano){
            alunosArray.push(aluno)
        }
    })
    alunosJSON.alunos = alunosArray
    return alunosJSON
}

const criarCardAno = (anos) =>{
    const container = document.getElementById('dropdown-anos-disponiveis')
    anos.forEach(ano => {
        const card = document.createElement('a')
        card.id = `${ano}`
        card.innerHTML = ano
        card.addEventListener('click', async () => {
            const returns = await conclusaoAno(ano)
            const cardJSON = returns.alunos.map(carregarTurma)
            const card = document.getElementById('container-cards')
            card.replaceChildren(...cardJSON)
        })
        container.append(card)
    })
}

const carregarDadosDaTurma = () => {
    const elementosDoContainerTurma = document.getElementById('container-cards')
    const curso = carregarAlunos.curso.map(carregarTurma)

    elementosDoContainerTurma.replaceChildren(...curso)
}
criarCardAno(anos)
carregarDadosDaTurma()
cursandoFinalizado()