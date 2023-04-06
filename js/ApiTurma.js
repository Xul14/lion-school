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
    
    return alunosCursoClicado
}


export const carregarAlunosStatus = async (statusSelecionado) => {
    const url = `https://lion-school.cyclic.app/v1/lion-school/alunos?curso=${curso}&status=${statusSelecionado}`
    const response = await fetch(url)
    const alunoStatus = await response.json()
    console.log(alunoStatus);
    return alunoStatus
}



const curso = localStorage.getItem('curso')