const Reader = require ("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorerService")
const FizzBuzzService = require("./lib/services/FizzbuzzService")

const explorers = Reader.readJsonFile("explorers.json")
//console.log(explorers)
//console.log( ExplorerService.filterByMission(explorers, "node"))
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node").length)
//console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))
const explorer1 = {name: "Explorer1", score: 13}
console.log(FizzBuzzService.applyValidationInExplorer(explorer1))