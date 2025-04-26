var gameData = {
    bacteria: 0,
    bacteriaPerClick: 0.1,
}
function makeBacteria() {
    gameData.bacteria += gameData.bacteriaPerClick
    gameData.bacteria = roundNumber(gameData.bacteria)
    document.getElementById("bacteriaCounter").innerHTML = gameData.bacteria + " bacteria"
}
function roundNumber(amount) {
    return Math.round(amount * 100) / 100
}
