export const carregarCards = async() => {
    const url = `https://lion-school.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const card = await response.json()

    return card
}