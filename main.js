var gameData = {
    bacteria: 0,
    bacteriaPerClick: 0.1,
    bacteriaClick: 0,
    bacteriaPerClickCost: 10,
    bacteriaPerClickIncrease: 0.1,
    maxBulkBuying: 50,
}

var bulkBuying = 1
function toggleBulkBuying() {
  if (bulkBuying === 1) {
    bulkBuying = gameData.maxBulkBuying
  } else {
    bulkBuying = 1
  }
  document.getElementById("perClickUpgrade").innerHTML = "Study the bacterias to make more <br>(Currently Level " + gameData.bacteriaPerClick * 10 + ") <br>Cost: " + gameData.bacteriaPerClickCost * bulkBuying + " Bacterias"
  document.getElementById("bulkBuyingButton").innerHTML = "Buy " + bulkBuying;
}

function makeBacteria() {
    gameData.bacteria += gameData.bacteriaPerClick
    gameData.bacteria = roundVariable(gameData.bacteria)
    document.getElementById("bacteriaAmount").innerHTML = gameData.bacteria + " Bacteria(s)"
    bacteriaClick += 1
}

function buyBacteriaPerClick() {
    if (gameData.bacteria >= gameData.bacteriaPerClickCost * bulkBuying) {
      gameData.bacteria -= gameData.bacteriaPerClickCost * bulkBuying
      gameData.bacteriaPerClick += gameData.bacteriaPerClickIncrease * bulkBuying
      gameData.bacteria = roundVariable(gameData.bacteria)
      gameData.bacteriaPerClick = roundVariable(gameData.bacteriaPerClick)
      document.getElementById("bacteriaAmount").innerHTML = gameData.bacteria + " Bacteria(s)"
      document.getElementById("perClickUpgrade").innerHTML = "Study the bacterias to make more <br>(Currently Level " + gameData.bacteriaPerClick * 10 + ") <br>Cost: " + gameData.bacteriaPerClickCost * bulkBuying + " Bacterias"
    }
}

function buyClickUpgrade1() {
    if (gameData.bacteria >= 1000000) {
      gameData.bacteria -= 1000000
      gameData.bacteriaPerClickIncrease *= 2
      gameData.bacteriaPerClick *= 2
      gameData.bacteria = roundVariable(gameData.bacteria)
      gameData.bacteriaPerClick = roundVariable(gameData.bacteriaPerClick)
      document.getElementById("bacteriaAmount").innerHTML = gameData.bacteria + " Bacteria(s)"
      document.getElementById("clickUpgrade1").style.display = "none"
    }
}

function roundVariable(value) {
  //round up a number to the nearest 100th
  return Math.round(value * 100) / 100;
}

var saveGameLoop = window.setInterval(function() {
  //Save and load your game
  localStorage.setItem("plagueClickerSave0", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("plagueClickerSave0"))
if (savegame !== null) {
  gameData = savegame
  document.getElementById("bacteriaAmount").innerHTML = gameData.bacteria + " Bacteria(s)"
  document.getElementById("perClickUpgrade").innerHTML = "Study the bacterias to make more <br>(Currently Level " + gameData.bacteriaPerClick * 10 + ") <br>Cost: " + gameData.bacteriaPerClickCost * bulkBuying + " Bacterias"
}

function tab(tab) {
  // navigate through the different tabs (shop, buttons, etc...)
  document.getElementById("laboratoryMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById("upgradeMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}

//select a tab when the game opens so not all of them show
tab("laboratoryMenu")