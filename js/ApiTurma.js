export const carregarTurma = async() => {
    const url = ``
    const response = await fetch(url)
    const cardTurma = await response.json()

    return cardTurma
}