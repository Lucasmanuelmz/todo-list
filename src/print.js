function Todo(title, description, priority, dueDate, status, notes) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = status;
    this.notes = notes
}

Todo.prototype.task = function () {
    return {
        title: this.title,
        description: this.description,
        priority: this.priority,
        dueDate: this.dueDate,
        status: this.status,
        notes: this.notes
    }
}

const myList = [];

module.exports = {
 Todo, myList
}