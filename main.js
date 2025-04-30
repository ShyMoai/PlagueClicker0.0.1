var gameData = {
    bacteria: 0,
    bacteriaPerClick: 0.1,
    maxBulkBuying: 50,
    test: 0,
    testPower: 0.1,
    testCost: 10,
}
let bulkBuying = 1
function makeBacteria() {
    gameData.bacteria += gameData.bacteriaPerClick
    gameData.bacteria = roundNumber(gameData.bacteria)
    document.getElementById("bacteriaCounter").innerHTML = gameData.bacteria + " bacteria"
}
function cycleBulkBuying() {
    if (bulkBuying === 1) {
        bulkBuying = gameData.maxBulkBuying
        document.getElementById("bulkBuyingIndicator").innerHTML = "Buying " + bulkBuying
    } else {
        bulkBuying = 1
        document.getElementById("bulkBuyingIndicator").innerHTML = "Buying " + bulkBuying
    }
}
function buyTest() {
    if (gameData.bacteria >= gameData.testCost * bulkBuying) {
        gameData.test += bulkBuying
        gameData.bacteria -= gameData.testCost * bulkBuying
        gameData.bacteriaPerClick = gameData.testPower * gameData.test + 0.1
        document.getElementById("testCounter").innerHTML = "You have made " + gameData.test + " tests"
        gameData.bacteria = roundNumber(gameData.bacteria)
        document.getElementById("bacteriaCounter").innerHTML = gameData.bacteria + " bacteria"
    }
}
function roundNumber(amount) {
    return Math.round(amount * 100) / 100
}
