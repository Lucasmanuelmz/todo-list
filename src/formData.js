import manipulationFormData from "./manipulationFormData";
 
export default function getHtmlFormData() {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const priority = document.querySelector('#priority').value;
  const dueDate = document.querySelector('#dueDate').value;
  const radioFinished = document.querySelector('#finished');
  const radioInProgress = document.querySelector('#progress');
  const radioCantStarted = document.querySelector('#no');
  const noteDocument = document.querySelector('#notes');
  const form = document.querySelector('form')
  const noteText = noteDocument.value;
    let showError = document.createElement('p');
    form.appendChild(showError)
    manipulationFormData(radioFinished,
    radioInProgress, radioCantStarted, title,
    description, priority, showError, dueDate, noteText)
  }
