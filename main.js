    var gameData = {
         bacteria: 0,
         bacteriaPerClick: 0.1,
         bacteriaPerClickCost: 10,
    }
    function buyBacteriaPerClick() {
        if (gameData.bacteria >= gameData.bacteriaPerClickCost) {
            gameData.bacteria -= gameData.bacteriaPerClickCost
            gameData.bacteriaPerClick += 0.1
            gameData.bacteria =  Math.round(10 * gameData.bacteria) / 10
            document.getElementById("bacteriaAmount").innerHTML = gameData.bacteria + " Bacteria(s) "
        }
    }
    function makeBacteria() {
        gameData.bacteria += gameData.bacteriaPerClick
        gameData.bacteria =  Math.round(10 * gameData.bacteria) / 10
        document.getElementById("bacteriaAmount").innerHTML = gameData.bacteria + " Bacteria(s) "
    }
    var saveGameLoop = window.setInterval(function() {
        localStorage.setItem("plagueClickerSave", JSON.stringify(gameData))
      }, 15000)
     var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
      if (savegame !== null) {
        gameData = savegame
      }