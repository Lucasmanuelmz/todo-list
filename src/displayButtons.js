import PlusThis from './icons/plus-this.png';
import menuClose from './icons/menu-red.png';
import menu from './icons/menu.png';
import CloseIcon from './icons/close-red.png';
import Dots from './icons/dots.png';

export default function displayButton() {
  const main = document.querySelector('.main')
  const favDialog = document.querySelector('#dialog');
  const closeButton = document.querySelector('#close');
  closeButton.innerHTML = `<img src=${CloseIcon} alt='Close button'/>`
  closeButton.style.cssText = `
  border: none;
  margin-bottom: 15px;
  padding: 0;`;
  closeButton.title='Fechar.'
  const closeNote = document.querySelector('.close-note');
  closeNote.innerHTML=`<img src=${CloseIcon} alt='Close button'/>`
  closeNote.style.cssText = `
  border: none;
  margin: 0;
  margin-bottom: 5px;
  background-color: transparent;
  align-self: flex-end;
  padding: 0;
  cursor: pointer;
  width: min-content;`;
  closeNote.title='Fechar.'

  const showButton = document.querySelector('#show-button');
  const notesBtn = document.querySelector('#cont-notes');
  notesBtn.style.cssText = `
  border: none;`;
  notesBtn.title='Clique para outras opções.'
  notesBtn.innerHTML=`<img src=${Dots} alt='Notes'/>`
  const noteDocument = document.querySelector('.hesNotes');
  const showAside = document.querySelector('#show-aside');
  showAside.title = 'Abrir';
  const Aside = document.querySelector('.invisible');
  const closeAside = document.querySelector('#close-aside');
  closeAside.title = 'Fechar';
  const ShowLabel = document.querySelector('.show-label');
  ShowLabel.innerHTML = `<img src=${PlusThis} alt='Plus icon'/>`
  const addTask = document.querySelector('#add-task');

  addTask.addEventListener('click', (e) => {
    e.preventDefault()
    favDialog.style.display = 'flex';
  })

  let isMenuClosed = `<img src=${menuClose} alt='Open menu'/>`;
  let isMenuOpen = `<img src=${menu} alt='Open menu'/>`;
  closeAside.innerHTML=isMenuClosed
  showAside.innerHTML = isMenuOpen;
  showAside.addEventListener('click', (e) => {
    e.preventDefault();
    showAside.innerHTML = `
      <img src=${menu} alt='Close menu'/>`
    Aside.style.display = 'block';
    showAside.style.display = 'none';
    showButton.style.display = 'none';
  })

  closeAside.addEventListener('click', (e) => {
    e.preventDefault();
    Aside.style.display = 'none';
    showAside.style.display = 'block'
    showButton.style.display = 'block';
  })
   
  notesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    noteDocument.style.display = 'flex';
  });

  closeNote.addEventListener('click', (e) => {
    e.preventDefault();
    noteDocument.style.display = 'none';
  })

 closeButton.addEventListener('click', () => {
    favDialog.style.display= 'none';
 })
  
  showButton.addEventListener('click', () => {
    favDialog.style.display= 'flex';
  })

    return main;
}