const { expect } = require("chai")
const {TaskManagement} = require("../src/GerenciadorDeTarefas")

describe("Gerenciador de tarefas", ()=>{

    it("should add a new task", ()=>{
       
        const taskManagement = new TaskManagement()

        taskManagement.addNewTask("Teste1", "Fazer teste")

        expect(taskManagement.getList()[0].title).to.equal("Teste1")

    })

})