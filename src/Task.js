class TaskManagement {

    constructor() {
        this.taskList = []
    }
    addNewTask(title, description) {

        this.taskList.push({
            title,
            description,
            status: "A fazer"
        })

    }

    getList() {
        return this.taskList
    }

    showAttributes() {
        this.taskList.forEach((task) => {
            console.log(`Titulo: ${task.title}, \nDescrição: ${task.description}, \nStatus: ${task.status}`)
            console.log("\n")
        })
    }

    updateStatus(title, status) {
        this.taskList.forEach((task) => {
            if (task.title === title) {
                task.status = status
            }
        })
    }

    removeTask(title) {
        console.log(this.taskList)
        this.taskList = this.taskList.filter((task) => {
            return task.title !== title
        })

    }

}

module.exports = {
    TaskManagement
}