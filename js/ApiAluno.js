'use strict'

export const getAlunosMatriculas = async () => {
    const url = `http://localhost:8080/v1/lion-school/alunos/${matricula}`
    const response = await fetch(url)
    const alunosMatricula = await response.json()

    return alunosMatricula

}

const matricula = localStorage.getItem('matricula')
