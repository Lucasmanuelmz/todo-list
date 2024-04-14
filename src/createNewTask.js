import { Todo, myList } from './print.js';

function createDefaultTask() {
    if(myList.length === 0){
    const myDefaultTask = {
            title: 'Minha Nova Tarefa o seu título',
        description: `Descrição da minha nova tarefa. É importante escrever uma 
            descrição clara aqui por que somos imperfeitos e por isso nos esquecemos 
            de tudo que pensávamos que íamos fazer muitas vezes. Por isso não minimize a 
            importância de uma descrição clara e coesa.`,
            priority: 'Prioridade 1',
            dueDate: '15/04/2024',
            status: 'Pendente',
            noteText: `Notas adicionais sobre a tarefa. Nas Notas é muito bom ser 
            claro do que se espera da tarefa. Uma boa nota é uma exelente arma 
            para a execução eficaz de tarefas.` 
        };
        myList = [myDefaultTask];
        const taskTodo = JSON.stringify(myList);
        localStorage.setItem('task', taskTodo);
    } else if (myList.length > 0) {
      console.log('Não é necessário fazer mais nada')
    }
}

export default function createNewTask(title, description, priority, dueDate, status, noteText) {
   
    const newTask = {
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate,
        status: status,
        noteText: noteText, 
    }

    
    let taskExists = myList.some(task => task.title === newTask.title);

    if (taskExists) {
        console.log('A tarefa já existe');
    } else {
        
        const todo = new Todo(title, description, priority, dueDate, status, noteText);
        myList.push(todo.task());
        if (myList.length > 0) {
            if (typeof (localStorage) !== undefined) {
            const jsonList = JSON.stringify(myList);
                localStorage.setItem('task', jsonList);
                console.log('adicionei uma vez')
            } else {
           console.log('Nao existe o localSorage no seu navegador')
        }
        
        } else {
            console.log('Deve ter no minimo zero') 
        }

        
    }
}
document.addEventListener('DOMContentLoaded', () => {
    createDefaultTask()
})