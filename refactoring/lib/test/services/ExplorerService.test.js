const ExplorerService = require('./../../services/ExplorerService')
const Reader = require("./../../utils/Reader")

describe("Prueba de unidad para la clase Explorer Service", () => {
    const explorer = Reader.readJsonFile("explorers.json")

    test('Obtener la cantidad de explorers que tienen node en mission', () => { 
        const explorersInNode = ExplorerService.filterByMission(explorer, "node")
        expect(explorersInNode.length).toBe(9)
     });
})