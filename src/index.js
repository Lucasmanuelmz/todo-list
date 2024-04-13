
import { formatDistance, subDays } from "date-fns";
import './style.css'
import displayButton from './displayButtons.js';
import TaskLists from './createComponents.js';
import getHtmlFormData from './formData.js';

function App() {
  displayButton();
const main = document.querySelector('.main')
    const add = document.querySelector('.btn');
  add.addEventListener('click', (e) => {
    e.preventDefault()
   getHtmlFormData()
    TaskLists();  
  })
  TaskLists()
  return main;
 }
    
document.addEventListener('DOMContentLoaded', () => {
 document.body.appendChild(App()) 
 })
