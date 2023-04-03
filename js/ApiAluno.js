'use strict'

const matriculaTurma = localStorage.getItem('matricula')


export const carregarCardsMatricula = async () => {
   console.log(matricula);
    // const url = `http://localhost:8080/v1/lion-school/alunos/${matriculaTurma}`
    const response = await fetch(url)
    const matricula = await response.json()
    return matricula
}

