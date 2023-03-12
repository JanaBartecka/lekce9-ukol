//catering
const justFood = (pocetLidi) => {
    return `catering od Just Food pro ${pocetLidi} lidi za ${Math.round(
        pocetLidi * 85)} Kc`
}

const yourMama = (pocetLidi) => {
    return `catering od Your Mama pro ${pocetLidi} lidi za ${Math.round(
        pocetLidi * 499)} Kc`
}
const flavourHaven = (pocetLidi) => {
    return `catering od Flavour Haven pro ${pocetLidi} lidi za ${Math.round(
        pocetLidi * 3000)} Kc`
}

const createEvent = (Udalost, pocetLidi, catering) => {
    return `Událost ${Udalost} s ${catering(pocetLidi)}`
}

document.body.innerHTML += createEvent('Inaugurace prezidenta',100,flavourHaven)