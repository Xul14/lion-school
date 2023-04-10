'use strict'


export const showAlunosMatricula = async () => {
    const url = `https://lion-school.cyclic.app/v1/lion-school/alunos/${matricula}`
    const response = await fetch(url)
    const alunosMatricula = await response.json()

    return alunosMatricula

}

const matricula = localStorage.getItem('matricula')
