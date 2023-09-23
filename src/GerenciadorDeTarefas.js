let readlineSync = require('readline-sync');

class TaskManagement  { 

    constructor() {
        this.taskList = []
    }
    addNewTask(title, description){

        this.taskList.push({
            title,
            description,
            status:"A fazer"
        })

    }

    getList(){
        return this.taskList
    }

    showAttributes() {
        this.taskList.forEach((task)=>{
            console.log(`Titulo: ${task.title}, \nDescrição: ${task.description}, \nStatus: ${task.status}`)
            console.log("\n")
        })
    }

    updateStatus(title, status) {
        this.taskList.forEach((task)=>{
            if(task.title === title){
                task.status = status
            }
        })
    }

    removeTask(title){
        console.log(this.taskList)
        this.taskList = this.taskList.filter((task) => {
            return task.title !== title
          })

    }

}

const taskManagement = new TaskManagement()

    readlineSync.promptCLLoop({
        a: (title, description) => {

            taskManagement.addNewTask(title, description)

            console.log('a - Adicionar nova tarefa')
            console.log('b - Visualizar a lista de tarefas')
            console.log('c - Atualizar o status da tarefa')
            console.log('d - Excluir tarefa')
            console.log('e - Sair')

        },
        b: () => {

            taskManagement.showAttributes()

            console.log('a - Adicionar nova tarefa')
            console.log('b - Visualizar a lista de tarefas')
            console.log('c - Atualizar o status da tarefa')
            console.log('d - Excluir tarefa')
            console.log('e - Sair')

        },
        c: (title, status) => {

            taskManagement.updateStatus(title, status)
            

            console.log('a - Adicionar nova tarefa')
            console.log('b - Visualizar a lista de tarefas')
            console.log('c - Atualizar o status da tarefa')
            console.log('d - Excluir tarefa')
            console.log('e - Sair')

        },
        d: (title) => {

           taskManagement.removeTask(title)

            console.log('a - Adicionar nova tarefa')
            console.log('b - Visualizar a lista de tarefas')
            console.log('c - Atualizar o status da tarefa')
            console.log('d - Excluir tarefa')
            console.log('e - Sair')

        },
        e: () => {return true }
    })




module.exports = {
    TaskManagement
}