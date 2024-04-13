import Dots from './icons/dots.png';
import Delete from './icons/delete.png';
import pencilEdit from './icons/pencil.png';
import CloseIcon from './icons/close-red.png';
import { myList } from './print.js';

export default function TaskLists() {
  const main = document.querySelector('.main');
  const Aside = document.querySelector('.invisible');

      const storedList = JSON.parse(localStorage.getItem('task'));
      storedList.forEach((newTask, index) => {
          const container = document.createElement('div');
          container.classList.add('container');
          main.appendChild(container);
  
          const minContainer = document.createElement('div');
          minContainer.classList.add('list');
          minContainer.id = index;
          minContainer.draggable = "true";
          container.appendChild(minContainer);
  
          const btnClose = document.createElement('button');
          btnClose.classList.add('button');
          btnClose.innerHTML = `<img src=${CloseIcon} alt='Open menu'/>`;
          btnClose.style.cssText = `
            align-self: flex-end;
            border: none;
            margin: 0;
            padding: 0;`;
          btnClose.title = 'Fechar';
          minContainer.appendChild(btnClose);
  
          const ul = document.createElement('ul');
          minContainer.appendChild(ul);
  
          const newTitle = document.createElement('h5');
          newTitle.textContent = newTask.title;
          newTitle.classList.add('n-title');
          newTitle.style.fontSize = '18px';
          minContainer.appendChild(newTitle);
  
          const content = document.createElement('div');
          content.classList.add('content');
          minContainer.appendChild(content);
  
          const myTitle = document.createElement('h3');
          myTitle.textContent = newTask.title;
          myTitle.classList.add('title');
          container.appendChild(myTitle);
  
          const containerAside = document.createElement('div');
          containerAside.classList.add('container-aside');
          Aside.appendChild(containerAside);
  
          const showDetails = document.createElement('button');
          container.appendChild(showDetails);
          showDetails.innerHTML = `<img src=${Dots} alt='Ver descricao'/>`;
          showDetails.classList.add('button');
          showDetails.style.cssText = `
            margin: 0;
            border: none;
            padding: 0;`;
          showDetails.title = 'Ver detalhes da tarefa.';
  
          showDetails.addEventListener('click', (e) => {
            e.preventDefault();
            minContainer.style.display = 'flex';
          });
  
          btnClose.addEventListener('click', (e) => {
            e.preventDefault();
            minContainer.style.display = 'none';
          });
          
          const titleDescription = document.createElement('h4');
          titleDescription.textContent = 'Descrição:';
          content.appendChild(titleDescription);
  
          const myDescription = document.createElement('p');
          content.appendChild(myDescription);
          myDescription.textContent = newTask.description;
          myDescription.classList.add('description');
          
          const priorityLevel = document.createElement('li');
          ul.appendChild(priorityLevel);
          priorityLevel.textContent = newTask.priority;
  
          const myDueDate = document.createElement('li');
          ul.appendChild(myDueDate);
          myDueDate.textContent = newTask.dueDate;
          myDueDate.title ='O prazo expira nesta data'
  
          const myStatus = document.createElement('li');
          ul.appendChild(myStatus);
          myStatus.textContent = newTask.status;
          myStatus.title='Estado da tarefa'
          
          if (newTask.status === 'Concluído!') {
            myStatus.classList.add('done');
          } else if (newTask.status === 'Em progresso...') {
            myStatus.classList.add('progress');
          } else {
            myStatus.classList.add('no');
          }
  
          const titleNote = document.createElement('h4');
          titleNote.textContent = 'Notas:';
          content.appendChild(titleNote);
  
          const myNotes = document.createElement('p');
          content.appendChild(myNotes);
          myNotes.textContent = newTask.noteText;
          myNotes.classList.add('newNote');
          
          const editButton = document.createElement('button');
          editButton.title = 'Editar a tarefa';
          editButton.innerHTML = `<img src=${pencilEdit} alt='Remover a tarefa'/>`;
          editButton.style.cssText = `
            margin-right: 15px;
            background-color: transparent;
            border: solid .6px #fafafa;
            cursor: pointer;`;
           
          editButton.addEventListener('click', () => {
             const editForm = document.createElement('form');
            const titleInput = document.createElement('input');
            titleInput.value = newTask.title;
            editForm.appendChild(titleInput);
  
            const titleElement = container.querySelector('.title');
            titleElement.textContent = '';
            titleElement.appendChild(titleInput);
            
            const otherTitleInput = document.createElement('input');
            otherTitleInput.value = newTask.title;
            editForm.appendChild(otherTitleInput);
  
            const otherTitleElement = minContainer.querySelector('.n-title');
            otherTitleElement.textContent = '';
            otherTitleElement.appendChild(otherTitleInput);
  
            const descriptionTextarea = document.createElement('textarea');
            descriptionTextarea.value = newTask.description;
            editForm.appendChild(descriptionTextarea);
  
            const descriptionElement = minContainer.querySelector('.description');
            descriptionElement.textContent = '';
            descriptionElement.appendChild(descriptionTextarea);
  
            const noteTextarea = document.createElement('textarea');
            noteTextarea.value = newTask.noteText;
            editForm.appendChild(noteTextarea);
  
            const noteElement = minContainer.querySelector('.newNote');
            noteElement.textContent = '';
    noteElement.appendChild(noteTextarea);

     const saveButton = document.createElement('button');
            saveButton.textContent = 'Salvar';
            saveButton.style.cssText = `
              margin-right: 15px;
              background-color: #00FF00;
              padding: 10px;
              border-radius: 5px;
              color: #fff;
              box-shadow: 2px 2px 2px #ddd;
              border: solid .6px #fafafa;
              cursor: pointer;`;
              editForm.appendChild(saveButton);
            saveButton.title="Salvar a tarefa"
            newContainer.appendChild(saveButton);
            
             saveButton.addEventListener('click', (e) => {
               e.preventDefault();
                const newOtherTitle = otherTitleInput.value;
               newTask.title = newOtherTitle;
              otherTitleElement.textContent = newOtherTitle;
  
              const newTitle = titleInput.value;
              newTask.title = newTitle;
              titleElement.textContent = newOtherTitle;
              
              const newDescription = descriptionTextarea.value;
              newTask.description = newDescription;
              descriptionElement.textContent = newDescription;
              
              const newNotes = noteTextarea.value;
              newTask.noteText = newNotes;
              noteElement.textContent = newNotes;
  
              otherTitleInput.remove();
              titleInput.remove();
              descriptionTextarea.remove();
              noteTextarea.remove();
              saveButton.remove();
            
            });

          });
          
          const removeButton = document.createElement('button');
          removeButton.innerHTML = `<img src=${Delete} alt='Remover a tarefa'/>`;
          removeButton.classList.add('button');
          removeButton.dataset.index = index;
          removeButton.title = 'Apagar a tarefa';
  
          removeButton.addEventListener('click', (e) => {
            const indexToRemove = e.target.dataset.index;
            myList.splice(indexToRemove, 1);
            localStorage.setItem('task', JSON.stringify(myList));
            e.target.closest('.container').remove();
          });
  
          const newContainer = document.createElement('div');
          newContainer.classList.add('new-container');
          minContainer.appendChild(newContainer);
          newContainer.appendChild(ul);
          newContainer.appendChild(editButton);
          newContainer.appendChild(removeButton);
          
      }); 
}
