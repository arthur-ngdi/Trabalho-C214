const { expect } = require("chai")
const {TaskManagement} = require("../src/Task")

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

    it("should update the task attributes", () => {
        const taskManagement = new TaskManagement();

        taskManagement.addNewTask("Teste_update", "Fazer Teste")
        
        taskManagement.updateStatus("Teste_update", "Feito");
        expect(taskManagement.getList()[0].status).to.equal("Feito")
        
    });

    it("should remove a task", () => {
        const taskManagement = new TaskManagement();
        
        taskManagement.addNewTask("Teste1", "Fazer teste");
        expect(taskManagement.getList()[0].title).to.equal("Teste1")

        taskManagement.removeTask("Teste1");
    
        const taskList = taskManagement.getList();
        const taskTitles = taskList.map(task => task.title);
    
        expect(taskTitles).to.not.include("Teste1"); 
      })

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