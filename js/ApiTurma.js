export const carregarTurmaAlunos = async() => {
    const url = `http://localhost:8080/v1/lion-school/alunos`
    const response = await fetch(url)
    const cardTurma = await response.json()
   console.log(cardTurma);
    return cardTurma
}

export const carregarAlunosCurso = async() => {
    const url = `http://localhost:8080/v1/lion-school/alunos?curso=${curso}`
    const response = await fetch(url)
    const alunosCursoClicado = await response.json()
    console.log(alunosCursoClicado);
    return alunosCursoClicado
}

// export const carregarCardPeloStatus = async() => {
//     const url = `http://localhost:8080/v1/lion-school/alunos?curso=${curso}`
//     const response = await fetch(url)
//     const alunosCursandoOuFinalizado = await response.json()

//     return alunosCursandoOuFinalizado
// }



const curso = localStorage.getItem('curso')