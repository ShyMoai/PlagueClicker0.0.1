var gameData = {
    bacteria: 0,
    bacteriaPerClick: 0.1,
    string: 0,
    maxBulkBuying: 50,
    test: 0,
    testEfficiency: 0.1,
    testCost: 10,
    ant: 0,
    antEfficiency: 0.01,
    antCost: 10000000,
}
let bulkBuying = 1
let tickPerSecond = 20
const formatter = new Intl.NumberFormat('en', {
    notation: 'compact'
});
function makeBacteria() {
    gameData.bacteria += gameData.bacteriaPerClick + gameData.test * gameData.testEfficiency
    gameData.bacteria = roundNumber(gameData.bacteria)
    document.getElementById("bacteriaCounter").innerHTML = formatter.format(gameData.bacteria) + " bacteria"
}
function cycleBulkBuying() {
    if (bulkBuying === 1) {
        bulkBuying = gameData.maxBulkBuying
        document.getElementById("bulkBuyingIndicator").innerHTML = "Buying " + formatter.format(bulkBuying)
    } else {
        bulkBuying = 1
        document.getElementById("bulkBuyingIndicator").innerHTML = "Buying " + formatter.format(bulkBuying)
    }
}
function buyTest() {
    if (gameData.bacteria >= gameData.testCost * bulkBuying) {
        gameData.test += bulkBuying
        gameData.bacteria -= gameData.testCost * bulkBuying
        document.getElementById("testCounter").innerHTML = "You have made " + formatter.format(gameData.test) + " tests"
        gameData.bacteria = roundNumber(gameData.bacteria)
        document.getElementById("bacteriaCounter").innerHTML = formatter.format(gameData.bacteria) + " bacteria"
    }
}
function buyAnt() {
    if (gameData.bacteria >= gameData.antCost * bulkBuying) {
        gameData.ant += bulkBuying
        gameData.bacteria -= gameData.antCost * bulkBuying
        document.getElementById("antCounter").innerHTML = "You have " + formatter.format(gameData.ant) + " ants"
        gameData.bacteria = roundNumber(gameData.bacteria)
        document.getElementById("bacteriaCounter").innerHTML = formatter.format(gameData.bacteria) + " bacteria"
    }
}
var doTick = window.setInterval(function() {
    antProduction()
    unlockElements()
}, 1000 / tickPerSecond)

function antProduction() {
    gameData.string += gameData.antEfficiency * gameData.ant / tickPerSecond
    gameData.string = roundNumber(gameData.string)
    document.getElementById("stringCounter").innerHTML = formatter.format(gameData.string) + " string"
}
function unlockElements() {
    if (gameData.bacteria >= 100000) {
        document.getElementById("ant").style.display = "grid"
        if (gameData.ant >= 1) {
            document.getElementById("stringCounter").style.display = "inline-block"
        }
    }
}
function roundNumber(amount) {
    return Math.round(amount * 1000) / 1000
}
