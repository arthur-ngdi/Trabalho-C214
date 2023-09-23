const { expect } = require("chai")
const {TaskManagement} = require("../src/GerenciadorDeTarefas")

describe("Gerenciador de tarefas", ()=>{

    it("should add a new task", ()=>{
       
        const taskManagement = new TaskManagement()

        taskManagement.addNewTask("Teste1", "Fazer teste")

        expect(taskManagement.getList()[0].title).to.equal("Teste1")

    })

    it("should display task attributes", () => {
        const taskManagement = new TaskManagement();
        
        taskManagement.addNewTask("Teste1", "Fazer teste");
        
        const capturedOutput = captureConsoleOutput(() => {
            taskManagement.showAttributes();
        });

        expect(capturedOutput).to.include("Titulo: Teste1");
        expect(capturedOutput).to.include("Descrição: Fazer teste");
        expect(capturedOutput).to.include("Status: A fazer");
    });

    function captureConsoleOutput(callback) {
        const originalConsoleLog = console.log;
        let output = '';
        console.log = (data) => {
            output += data + '\n';
        };
        callback();
        console.log = originalConsoleLog;
        return output;
    }
})