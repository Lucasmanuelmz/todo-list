import createNewTask from "./createNewTask";

export default function manipulationFormData(radioFinished,
    radioInProgress, radioCantStarted, title,
    description, priority, showError, dueDate, noteText) {
    let status = '';

     if (radioFinished.checked) {
      status = 'Concluido!';
    } else if (radioInProgress.checked) {
      status ='Em Progresso...'
    } else if (radioCantStarted.checked) {
      status = `Pendente`;
    }
   
   if (title === '' || !isNaN && description === '' ||
      !isNaN && priority === '' && dueDate === '' &&
      noteText === '' || !isNaN) {
      showError.textContent = 'Deve preencher todos os campos para guardar a tarefa!';
      showError.style.color = '#f00';
      setTimeout(() => {
        showError.textContent = '';
         showError.style.color = '';
      }, 3000) 
    } else if (title === '' || !isNaN) {
      showError.textContent = 'Deve preencher o campo titulo para guardar a tarefa!';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000);
      return
    } else if( description === '' ||
      !isNaN) {
      showError.textContent = 'Deve preencher o campo descricao para guardar a tarefa!';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000); 
      return
    } else if (priority === '') {
      showError.textContent = 'Deve selecionar a prioridade para guardar a tarefa!';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000);
      return
    } else if (dueDate === '') {
      showError.textContent = 'Voce nao escolheu a data de execucao';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000); 
      return
    } else if (noteText === '' || !isNaN) {
      showError.textContent = 'Deve adicionar uma nota para guardar a tarefa!';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000);
      return
      } else {
     createNewTask(title, description, priority, dueDate, status, noteText);
    }
  }