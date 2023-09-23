let readlineSync = require('readline-sync');
const {TaskManagement} = require("../src/Task")

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
    e: () => { return true }
})