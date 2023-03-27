export const carregarCards = async () => {
    const url = ``
    const response = await fetch(url)
    const card = await response.json()

    return card
}